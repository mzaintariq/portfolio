export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectMediaGroup =
  | { type: "single"; media: ProjectMedia }
  | { type: "responsive-pair"; desktop: ProjectMedia; mobile: ProjectMedia; caption?: string }
  | { type: "gallery"; media: ProjectMedia[]; caption?: string };

export type ProjectDetailSection = {
  id: string;
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  layout?: "text-left" | "text-right" | "full";
  media?: ProjectMediaGroup;
};

export type ProjectDetail = {
  slug: string;
  introduction?: string;
  sections: ProjectDetailSection[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "tracktv",
    introduction:
      "A full-stack TV and movie tracker built around how people actually watch shows, not just a watched/unwatched flag.",
    sections: [
      {
        id: "beyond-tracking",
        eyebrow: "Product experience",
        title: "A personal library, not just a single tracking screen",
        body:
          "TrackTV brings TV shows and movies into one place: a library for what's actively being watched, separate watchlists for movies and upcoming TV, and a view for what's airing next across tracked shows.",
        layout: "full",
        media: {
          type: "gallery",
          media: [
            { src: "/screenshots/tracktv-movies.png", alt: "Movie watchlist", width: 1600, height: 1000 },
            { src: "/screenshots/tracktv-movies-upcoming.png", alt: "Upcoming releases view", width: 1600, height: 1000 },
            { src: "/screenshots/tracktv-shows-upcoming.png", alt: "Upcoming releases view", width: 1600, height: 1000 },
          ],
        },
      },
      {
        id: "watch-progress",
        eyebrow: "Tracking model",
        title: "Progress that understands how a show is actually being watched",
        body:
          "A show's state is derived, not manually set: once every released regular episode is watched, it's marked complete if the show has ended, or caught-up if it's still airing. Progress itself only counts released, dated, non-special episodes, so unaired episodes and Season 0 specials never distort the count.",
        bullets: [
          "Watch Next surfaces the first released, unwatched episode in order, with a direct 'Mark Watched' action, so users don't have to navigate through a season to find where they left off.",
          "Shows are grouped by real activity: actively watched shows with recent progress, shows untouched for a while, and separate categories for unstarted, paused, and dropped shows.",
          "Every episode watch is stored with its own timestamp, so history reflects when things were actually watched, not just a single running counter.",
        ],
        layout: "text-left",
        media: {
          type: "single",
          media: {
            src: "/screenshots/tracktv-shows.png",
            alt: "Digital Cookbook admin editor with grouped, draggable ingredients",
            width: 1600,
            height: 1000,
          },
        },
      },
      {
        id: "discovery",
        eyebrow: "Interaction design",
        title: "A quick-view that respects browser navigation",
        body:
          "Clicking a search result opens a quick-view over the results instead of navigating away — a modal on mobile, a right-side panel on larger screens, both backed by the same interaction and data-fetching logic.",
        bullets: [
          "The preview's open/closed state is pushed into the URL, so the browser's Back button closes it naturally instead of leaving the page — this wasn't just a modal bolted onto the search view, it's treated as real navigation state.",
          "Preview details are fetched asynchronously without blocking the underlying search results from staying interactive.",
        ],
        layout: "full",
        media: {
          type: "responsive-pair",
          desktop: {
            src: "/screenshots/tracktv-preview-desktop.png",
            alt: "TrackTV discovery preview panel on desktop",
            width: 1600,
            height: 1000,
          },
          mobile: {
            src: "/screenshots/tracktv-preview-mobile.png",
            
            alt: "TrackTV discovery preview as a full-screen modal on mobile",
            width: 480,
            height: 960,
          },
          caption: "The same preview interaction as a side panel on desktop and a full-screen view on mobile.",
        },
      },
      {
        id: "viewing-insights",
        eyebrow: "Personal insights",
        title: "Watch time computed from real runtimes, not estimates",
        body:
          "The profile aggregates viewing history into a snapshot: episodes and movies watched, shows tracked, completed vs. caught-up shows, and total watch time — split into television, movies, and combined. Watch time sums each item's actual stored runtime rather than a flat per-episode estimate, falling back to a show's average episode runtime when a specific episode's runtime is missing.",
        bullets: [
          "Computed live on every profile view rather than cached or precomputed — no aggregate table or materialized view sits behind it.",
          "Favorites are explicitly marked by the user (a toggle on each show or movie), not inferred from viewing behavior, and shown in full with no ranking or limit.",
        ],
        layout: "text-right",
        media: {
          type: "single",
          media: {
            src: "/screenshots/tracktv-profile.png",
            alt: "Profile with watch activity summary",
            width: 1600,
            height: 1000,
          },
        },
      },
      {
        id: "history-import",
        eyebrow: "Data migration",
        title: "Importing history without guessing",
        body:
          "TrackTV supports importing a full watch history from a TV Time data export, including both its legacy and newer record formats. Rather than a blind bulk insert, imported titles are matched against TrackTV's own media data and sorted into confirmed, ambiguous, or unmatched.",
        bullets: [
          "Ambiguous matches can be resolved manually — picking a suggested candidate, entering a TMDB ID directly, or skipping the item — before anything is applied.",
          "Original viewing dates are preserved through the import rather than reset to the import time, with existing TrackTV history left untouched where it already exists.",
        ],
        layout: "text-left",
        media: {
          type: "single",
          media: {
            src: "/screenshots/tracktv-import.png",
            alt: "Profile with watch activity summary",
            width: 1600,
            height: 1000,
          },
        },
      },
      {
        id: "auth-and-redirects",
        eyebrow: "Authentication",
        title: "Sign-in that works the same on localhost and production",
        body:
          "Google OAuth is the primary sign-in method, with an email magic link as a fallback — both routes return through a shared callback and land the user on their library. Existing users who sign in with Google using an already-verified email resolve to the same account through Supabase's identity linking, rather than creating a duplicate profile.",
        bullets: [
          "Found that appending a `?next=` query string to the redirect URL caused Supabase to reject the exact-match allowlist entry and silently fall back to the production Site URL — meaning a local sign-in could redirect to the live site instead of localhost.",
          "Fixed it by storing the intended post-login destination in a short-lived cookie instead of the URL, keeping the redirect itself an exact allowlist match.",
        ],
        layout: "full",
      },
    ],
  },
  {
    slug: "digital-cookbook",
    introduction:
      "A private family recipe vault for preserving and publishing tried-and-tested recipes through structured authoring and cooking-focused interactions.",
    sections: [
      {
        id: "browse-and-filter",
        eyebrow: "Product experience",
        title: "Category browsing that survives a refresh",
        body:
          "The public recipe list supports both category filtering and search, applied together. Category selection is reflected in the URL, so a filtered view is shareable and restores correctly after a page refresh.",
        bullets: [
          "Search text is currently local to the page rather than URL-synced — a deliberate scope line for this MVP rather than an oversight.",
        ],
        layout: "text-left",
        media: {
          type: "single",
          media: {
            src: "/screenshots/zaika-browse-filtered.png",
            alt: "Digital Cookbook recipe collection filtered by category",
            width: 1600,
            height: 1000,
          },
        },
      },
      {
        id: "serving-scaling",
        eyebrow: "Cooking experience",
        title: "Serving-size scaling without changing the source recipe",
        body:
          "Recipe quantities scale live in the reading view at ½×, 1×, 2×, or 3× — recalculated for display only, with nothing written back to the stored recipe.",
        bullets: [
          "Common cooking units (cups, tablespoons, teaspoons) are formatted as friendly fractions; other units fall back to decimals, which is a known trade-off rather than a full unit-conversion system — grams don't convert to kilograms, for instance.",
          "'To taste' ingredients and quantities embedded in free text are intentionally left unscaled, since they can't be reliably recalculated.",
        ],
        layout: "text-right",
        media: {
          type: "responsive-pair",
          desktop: {
            src: "/screenshots/zaika-detail-desktop.png",
            alt: "Digital Cookbook recipe detail view on desktop",
            width: 1600,
            height: 1000,
          },
          mobile: {
            src: "/screenshots/zaika-detail-mobile.png",
            alt: "Digital Cookbook recipe detail view on mobile",
            width: 480,
            height: 960,
          },
          caption: "The same recipe with 1x on desktop and 2x on mobile, showing scaled ingredient quantities.",
        },
      },
      {
        id: "structured-recipes",
        eyebrow: "Authoring",
        title: "Recipes as structured content, not blocks of text",
        body:
          "Ingredients and steps aren't stored as flat text — each ingredient is a structured object with quantity, unit, name, and category, and each step can be grouped and broken into sub-steps. The admin editor supports drag-and-drop reordering both within a category and between categories.",
        bullets: [
          "Structured data is what makes the recipe page's grouped ingredient lists, multi-part methods, and serving-size scaling possible without parsing formatted text.",
        ],
        layout: "text-right",
        media: {
          type: "single",
          media: {
            src: "/screenshots/zaika-editor.png",
            alt: "Digital Cookbook recipe editor with grouped ingredients and method steps",
            width: 1600,
            height: 1000,
          },
        },
      },
      {
        id: "publish-workflow",
        eyebrow: "Content workflow",
        title: "A clear boundary between editing and publishing",
        body:
          "Every recipe carries an explicit draft or published status, enforced on both public endpoints: the list query filters by status directly, while the detail endpoint returns a 404 for anything that isn't published.",
        bullets: [
          "Admin authentication is fully separate from the public browsing experience, so drafts are never exposed by simply guessing a URL.",
        ],
        layout: "text-left",
        media: {
          type: "single",
          media: {
            src: "/screenshots/zaika-table.png",
            alt: "Digital Cookbook admin recipe table showing draft and published recipes",
            width: 1600,
            height: 1000,
          },
        },
      },
    ],
  },
];

export function getProjectDetails(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
