import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      aria-label="Digital Roadmap Conference 2025 Logo"
      {...props}
    >
      <text
        x="0"
        y="15"
        className="font-headline text-lg font-bold"
        fill="hsl(var(--primary))"
      >
        DRC
      </text>
      <text
        x="40"
        y="15"
        className="font-headline text-lg font-bold"
        fill="hsl(var(--foreground))"
      >
        2025
      </text>
    </svg>
  );
}
