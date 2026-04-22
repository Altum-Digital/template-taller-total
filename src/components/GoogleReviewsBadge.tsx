import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

export function GoogleReviewsBadge() {
  const { googleReviews } = siteConfig;
  const fullStars = Math.floor(googleReviews.rating);
  const hasHalf = googleReviews.rating - fullStars >= 0.5;

  return (
    <a
      href={googleReviews.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift inline-flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:border-slate-300"
    >
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.2 6.2 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
        <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14.7 15.2 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.2 6.2 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.1z" />
        <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.4l-6.3-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4 5.6l6.3 5.2C41.3 35.6 44 30.2 44 24c0-1.3-.1-2.6-.4-3.9z" />
      </svg>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-lg text-ink">{googleReviews.rating.toFixed(1)}</span>
          <div className="flex gap-0.5 text-[#FFC107]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="star"
                className={`w-4 h-4 ${
                  i < fullStars
                    ? "opacity-100"
                    : i === fullStars && hasHalf
                    ? "opacity-70"
                    : "opacity-20"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-ink-muted mt-0.5">
          {googleReviews.reviewCount} reseñas en Google
        </p>
      </div>
    </a>
  );
}
