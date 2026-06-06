'use client';

import { useState } from 'react';
import { Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Article image that degrades gracefully: if the photo fails to load it falls
 * back to a brand gradient with a faint scales-of-justice mark instead of a
 * broken-image icon. Shared by the homepage blog section and the /blog page.
 */
export function PostImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div className={cn('relative overflow-hidden bg-gradient-to-br from-[#0a3d6d] via-[#022d54] to-[#0a3d6d]', className)}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Scale className="w-10 h-10 text-white/15" strokeWidth={1} />
        </div>
      )}
    </div>
  );
}
