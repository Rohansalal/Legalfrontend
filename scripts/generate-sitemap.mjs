// Generates public/sitemap.xml and public/robots.txt for legaldoor.in
//
// URL sources:
//   1. Static routes  — every folder under app/ that has a page.* file and no
//      dynamic ([slug] / [...slug]) segment in its path.
//   2. Data-driven routes — slugs read from the lib/ data files that back the
//      generateStaticParams() of the dynamic route segments.
//
// Run:  node scripts/generate-sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://legaldoor.in';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'app');
const LIB = path.join(ROOT, 'lib');

/** url -> source file used for lastmod. First writer wins (dedupe). */
const urls = new Map();
const add = (url, sourceFile) => {
  const clean = url.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  if (!urls.has(clean)) urls.set(clean, sourceFile);
};

const read = (f) => fs.readFileSync(f, 'utf8');
const PAGE = /^page\.(tsx|ts|jsx|js)$/;

// 1) Static routes -----------------------------------------------------------
function walk(dir, segs) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pageFile = entries.find((e) => e.isFile() && PAGE.test(e.name));
  const isDynamic = segs.some((s) => s.startsWith('['));
  if (pageFile && !isDynamic) {
    add('/' + segs.join('/'), path.join(dir, pageFile.name));
  }
  for (const e of entries) {
    if (e.isDirectory()) walk(path.join(dir, e.name), [...segs, e.name]);
  }
}
walk(APP, []);

// helpers for reading slugs out of the data files ----------------------------
const flatSlugs = (file) =>
  [...read(file).matchAll(/^ {2}'([a-z0-9-]+)':/gm)].map((m) => m[1]);

const nestedSlugs = (file) => {
  // returns [ [category, slug], ... ] for `  category: { '  slug': {...} }`
  const lines = read(file).split('\n');
  const out = [];
  let cat = null;
  for (const line of lines) {
    const c = line.match(/^ {2}([a-z0-9-]+): \{/);
    if (c) { cat = c[1]; continue; }
    const s = line.match(/^ {4}'([a-z0-9-]+)':/);
    if (s && cat) out.push([cat, s[1]]);
  }
  return out;
};

// 2) Data-driven routes ------------------------------------------------------
// blog
for (const m of read(path.join(LIB, 'blog-data.ts')).matchAll(/slug:\s*'([^']+)'/g))
  add(`/blog/${m[1]}`, path.join(LIB, 'blog-data.ts'));

// flat single-record services { 'slug': ServiceContent }
const flatRoutes = [
  ['business-registration-data/institutional-setup.ts', '/services/business-registration/institutional-setup'],
  ['business-registration-data/taxation.ts', '/services/business-registration/taxation'],
  ['compliances-data/certification.ts', '/services/compliances/certification'],
  ['lawyer-services-data/corporate.ts', '/services/lawyer-services/corporate-services'],
  ['lawyer-services-data/criminal-law.ts', '/services/lawyer-services/criminal-law'],
  ['lawyer-services-data/family-law.ts', '/services/lawyer-services/family-law'],
];
for (const [rel, base] of flatRoutes) {
  const file = path.join(LIB, rel);
  for (const slug of flatSlugs(file)) add(`${base}/${slug}`, file);
}

// documentation: 2 category landing pages + leaves (leaves mostly overlap static)
for (const [cat, file] of [
  ['legal', 'documentation-data/legal.ts'],
  ['business-corporate', 'documentation-data/business-corporate.ts'],
]) {
  const f = path.join(LIB, file);
  add(`/services/documentation/${cat}`, f);
  for (const slug of flatSlugs(f)) add(`/services/documentation/${cat}/${slug}`, f);
}

// property: registration / verification / real-estate leaves (no category pages)
for (const [cat, file] of [
  ['registration', 'property-data/registration.ts'],
  ['verification', 'property-data/verification.ts'],
  ['real-estate', 'property-data/real-estate.ts'],
]) {
  const f = path.join(LIB, file);
  for (const slug of flatSlugs(f)) add(`/services/property/${cat}/${slug}`, f);
}

// nested category->slug services (with category landing pages where present)
const nestedRoutes = [
  ['global-business-data/educational-law.ts', '/services/global-business/educational-law', true],
  ['lawyer-services-data/aviation-maritime.ts', '/services/lawyer-services/aviation-maritime', false],
  ['lawyer-services-data/ipr.ts', '/services/lawyer-services/ipr-services', false],
];
for (const [rel, base, hasCategoryPage] of nestedRoutes) {
  const file = path.join(LIB, rel);
  const seenCat = new Set();
  for (const [cat, slug] of nestedSlugs(file)) {
    if (hasCategoryPage && !seenCat.has(cat)) {
      add(`${base}/${cat}`, file);
      seenCat.add(cat);
    }
    add(`${base}/${cat}/${slug}`, file);
  }
}

// global-business regions + jurisdictions (catch-all [...slug])
const gj = path.join(LIB, 'global-jurisdictions.ts');
const gjText = read(gj);
for (const line of gjText.split('\n')) {
  const slug = line.match(/slug: '([^']+)'/);
  if (!slug) continue;
  const region = line.match(/region: '([^']+)'/);
  if (!region) {
    // a REGIONS entry (no `region:` field on the line)
    add(`/services/global-business/${slug[1]}`, gj);
  } else {
    const group = line.match(/group: '([^']+)'/);
    const segs = group ? [region[1], group[1], slug[1]] : [region[1], slug[1]];
    add(`/services/global-business/${segs.join('/')}`, gj);
  }
}

// 3) Emit --------------------------------------------------------------------
const lastmod = (file) => {
  try { return fs.statSync(file).mtime.toISOString().slice(0, 10); }
  catch { return new Date().toISOString().slice(0, 10); }
};

const sorted = [...urls.keys()].sort((a, b) => a.localeCompare(b));
const body = sorted
  .map((u) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${lastmod(urls.get(u))}</lastmod>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const robots = `# robots.txt for ${SITE}
# Allow full crawling — JS/CSS under /_next/ must stay crawlable so Google
# can render pages correctly.
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

fs.mkdirSync(path.join(ROOT, 'public'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
fs.writeFileSync(path.join(ROOT, 'public', 'robots.txt'), robots);

console.log(`Wrote public/sitemap.xml with ${sorted.length} URLs`);
console.log(`Wrote public/robots.txt`);
