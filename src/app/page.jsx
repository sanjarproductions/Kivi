export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0 }}>
        We build fast, modern websites that convert
      </h1>
      <p style={{ marginTop: 12, color: "var(--color-muted)" }}>
        Kivi Studio is a design & development team crafting clean UI, solid UX,
        and SEO-friendly Next.js sites for founders and brands.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <a href="/contact" className="btn">Start a project</a>
        <a href="/work" className="btn" style={{ background: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>See our work</a>
      </div>
    </section>
  );
}
