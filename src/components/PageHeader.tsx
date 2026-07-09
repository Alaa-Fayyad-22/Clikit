type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 text-center sm:pt-44">
      <p className="mx-auto w-fit rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[13px] tracking-wide text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">
          {subtitle}
        </p>
      )}
    </div>
  );
}