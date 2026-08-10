interface SectionHeadingProps {
  number: string
  title: string
  accent: string
}

export function SectionHeading({ number, title, accent }: SectionHeadingProps) {
  const parts = title.split('<em>')
  
  return (
    <div className="mb-14">
      <div className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-4">
        {number} / {parts[0]?.trim() || title}
      </div>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-text font-normal leading-[1.1] tracking-[-0.02em]">
        {parts.map((part, i) =>
          i === 0 ? (
            part
          ) : (
            <em key={i} className="italic text-accent">
              {part.replace('</em>', '')}
            </em>
          )
        )}
      </h2>
    </div>
  )
}