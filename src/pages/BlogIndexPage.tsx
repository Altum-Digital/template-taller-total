import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";

export function BlogIndexPage() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const { blog } = siteConfig;

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
            Blog
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4 tracking-tightest">
            Consejos y guías mecánicas
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Información honesta para mantener tu auto en las mejores condiciones. Sin tecnicismos innecesarios.
          </p>
        </div>
      </section>

      <section className="pt-20 pb-32 bg-white">
        <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
          {blog.length === 0 ? (
            <p className="text-center text-ink-muted">Próximamente publicaremos contenido. ¡Vuelve pronto!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blog.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="card-lift group block rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl hover:border-slate-300"
                >
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={post.coverUrl}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("es-MX", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>·</span>
                      <span>{post.readingMinutes} min lectura</span>
                    </div>
                    <h2 className="font-display font-semibold text-xl text-ink mb-2 leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-surface border border-slate-200 rounded-full text-[11px] text-ink-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
