# Sitemap Validation Report — companyvista.com

**Sitemap:** https://companyvista.com/sitemap.xml
**Analyzed:** 2026-05-29
**Generator:** Free Online Sitemap Generator (www.xml-sitemaps.com)

## Summary

| Metric | Value |
|--------|-------|
| Sitemap HTTP status | 200 ✅ |
| Content-Type | application/xml ✅ |
| Format | Valid XML, single `<urlset>` ✅ |
| Total URLs | 94 |
| URLs returning 200 | 76 |
| **URLs returning 404** | **18 (19%)** 🛑 |
| Referenced in robots.txt | Yes ✅ |
| Protocol | HTTPS only ✅ |
| Within 50k URL limit | Yes ✅ |

**Verdict:** The sitemap is technically valid and well-organized, but **nearly 1 in 5 URLs is broken (404)**. This is a critical quality problem — submitting 404s in a sitemap wastes crawl budget and signals low quality to Google.

---

## 🛑 Critical: 18 Broken URLs (404)

### Broken page (1)
- `/compare-with-others/why-clients-choose-us`

### Broken blog posts (17 of 18 blog entries are dead)
The blog section is almost entirely broken. Only **1** of the 18 `/blogs/` URLs resolves:
- ✅ `/blogs/best-place-for-tech-startup-registration-singapore` (the only working post)

All 17 others 404:
- `/blogs/benefits-of-registering-your-company-uae-free-zones`
- `/blogs/beat-trumps-tariff-threat-with-us`
- `/blogs/5-common-mistakes-people-make-when-registering-a-business-globally`
- `/blogs/how-to-choose-the-right-country-for-your-startup`
- `/blogs/how-to-set-up-a-business-in-the-uk-as-a-non`
- `/blogs/what-documents-you-need-to-register-a-company-globally`
- `/blogs/cheapest-states-to-form-an-llc-in-the-us`
- `/blogs/registered-agent-and-virtual-address-what's-the-difference`
- `/blogs/use-a-virtual-address-for-your-llc`
- `/blogs/how-to-buy-a-domain-name-get-registered`
- `/blogs/get-an-llc-for-free-a-step-by-step-guide`
- `/blogs/how-quickly-will-companyvista-file-my-llc`
- `/blogs/virtual-address-services-for-your-small-business`
- `/blogs/everything-you-get-with-companyvista's-standard-package`
- `/blogs/everything-you-get-with-companyvista-premium-package`
- `/blogs/naics-codes-what-they-are-how-to-find-yours`
- `/blogs/need-a-physical-address-for-your-business`

**Fix:** Either (a) the blog posts moved/were renamed — update the sitemap to the live slugs, or (b) they were never published — remove them from the sitemap. Verify the correct slugs against the live `/blog` listing page and the working post's URL pattern.

---

## ⚠️ Other Issues

| Issue | Severity | Detail | Fix |
|-------|----------|--------|-----|
| Apostrophes in URLs | High | 2 URLs contain raw `'` (`...what's-the-difference`, `...companyvista's-standard-package`). Apostrophes in paths are non-canonical and error-prone (both are also 404). | Use hyphens, no apostrophes: `whats-the-difference`, `companyvistas-standard-package`. |
| Inconsistent comparison slugs | Medium | `/compare-with-others/companyvista-firstbase` omits `-vs-` while siblings use it (`companyvista-vs-doola`, `-vs-stripe`, `-vs-zenBusiness`). | Standardize to `companyvista-vs-firstbase`. |
| Mixed-case slug | Low | `companyvista-vs-zenBusiness` mixes camelCase into an otherwise all-lowercase URL scheme. | Lowercase: `companyvista-vs-zenbusiness`. |
| PDF in sitemap | Low/Info | `/images/brochure/companyvista-brochure.pdf` is a binary asset in a pages sitemap. Not wrong, but PDFs belong in a separate sitemap or can be omitted unless you want it indexed. | Optional: move to an assets sitemap or drop. |
| `<priority>` on every URL | Info | Google ignores `<priority>`. Values are 1.00/0.80/0.64. Harmless but noise. | Can remove. |
| `<changefreq>` | Info | Not present — good (it's also ignored by Google). | — |
| Identical `<lastmod>` | Low | 93 of 94 URLs share the same timestamp (`2025-10-16T10:37:45`), i.e. the date the sitemap was generated, not real edit dates. | Set real per-page modification dates so `<lastmod>` carries signal. |
| Stale sitemap | Low | Generated 2025-10-16 by a free third-party tool. Blog 404s suggest the site changed since and the sitemap wasn't regenerated. | Automate sitemap generation on deploy instead of using a manual one-off tool. |

---

## ✅ What's Good

- Valid XML, correct namespace and schema declaration.
- All HTTPS, no HTTP URLs.
- Cleanly organized by region/intent: `/services/*`, `/americas/*`, `/europe/*`, `/asia/*`, `/middle-east/freezones/*`, `/middle-east/mainland/*`, `/offshore/*`, `/compare-with-others/*`, `/blogs/*`.
- Well under the 50,000-URL / 50 MB limit (94 URLs, ~15 KB) — no need for a sitemap index.
- Properly referenced in robots.txt.
- `robots.txt` is permissive (`Disallow:` empty) with a `Crawl-delay: 20`.

---

## Priority Action List

1. **Fix the 17 broken blog URLs** — biggest issue. Confirm correct slugs or remove dead entries. (Crawl budget + quality signal.)
2. **Fix `/compare-with-others/why-clients-choose-us` (404)** — restore the page or remove from sitemap.
3. **Remove apostrophes** from the 2 URLs that contain them.
4. **Standardize comparison slugs** — add `-vs-` to firstbase, lowercase zenBusiness.
5. **Regenerate the sitemap automatically** (server-side / build step) with real `lastmod` dates instead of the manual xml-sitemaps.com export.
6. Optionally remove `<priority>` and move the PDF out of the pages sitemap.

> Note on robots.txt: `Crawl-delay: 20` is honored by Bing but ignored by Google. With only ~94 URLs it's harmless, but if the site grows it could slow Bing's crawl.
