<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

## Portfolio-specific guidance

This is the personal portfolio website of Muhammad Zain Tariq.

Primary goals:
- Present Zain as a frontend-focused senior software engineer.
- Emphasize React, TypeScript, Next.js, frontend architecture, complex enterprise UI, testing, and product thinking.
- Make the site useful for recruiters, hiring managers, and engineers reviewing job applications.
- Keep the site polished, modern, and slightly creative without looking gimmicky.

Design direction:
- Minimal and professional.
- Strong typography and spacing.
- Subtle frontend interactions.
- Avoid generic developer portfolio clichés such as excessive neon gradients, terminal UIs, giant tech-logo clouds, or overdone animations.
- Animations should be purposeful and restrained.

Architecture:
- No database for v1.
- Store portfolio content in local TypeScript, JSON, or MDX files.
- Keep content separate from presentation.
- Prefer reusable but simple components.
- Avoid premature abstraction.
- Avoid unnecessary dependencies.
- Prefer Server Components unless client-side interaction is actually required.

Planned sections:
- Hero
- Selected Work
- Developer Activity
- Experience
- Experiments / Projects
- About
- Contact
- Resume link

Future ideas:
- Combined GitHub + GitLab contribution activity chart.
- AI assistant answering questions about Zain's approved professional background.
- These should not complicate the initial version.

<!-- END:nextjs-agent-rules -->
