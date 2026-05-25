type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#f4f7fa] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#9ba8b5]">{description}</p>
      ) : null}
    </div>
  );
}
