type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="container py-20 sm:py-28">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-base text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </main>
  );
}
