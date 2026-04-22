import { Link, useParams, Navigate } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = siteConfig.blog.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="bg-white">
      {/* Cover */}
      <div className="relative h-[50vh] min-h-[360px] bg-slate-900 overflow-hidden">
        <img
          src={post.coverUrl}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-sm mb-4 transition-colors"
            >
              <Icon name="arrow" className="w-3.5 h-3.5 rotate-180" />
              Volver al blog
            </Link>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tightest mb-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-xs text-slate-300">
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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-32">
        <div className="prose-like">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-ink leading-relaxed text-base md:text-lg mb-5">
              {para}
            </p>
          ))}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
            <span className="text-xs text-ink-muted uppercase tracking-wider font-semibold mr-2">
              Etiquetas:
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-surface border border-slate-200 rounded-full text-xs text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 bg-surface rounded-2xl border border-slate-200 text-center">
          <h2 className="font-display font-bold text-xl text-ink mb-2">
            ¿Tu auto necesita un chequeo?
          </h2>
          <p className="text-ink-muted text-sm mb-5">
            Agenda diagnóstico gratis por WhatsApp.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/30"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
