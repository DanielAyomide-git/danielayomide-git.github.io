interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, subtitle, children, footer }: CardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>
      <div className="space-y-4 text-slate-600">{children}</div>
      {footer ? (
        <div className="mt-6 text-sm text-slate-500">{footer}</div>
      ) : null}
    </article>
  );
}
