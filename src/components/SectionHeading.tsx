interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-accent-500 text-sm font-semibold uppercase tracking-[0.24em]">
        {title}
      </p>
      {description ? (
        <p className="mt-3 text-slate-600 text-lg leading-8">{description}</p>
      ) : null}
    </div>
  );
}
