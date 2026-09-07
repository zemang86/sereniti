import Image from "next/image";
import { site, formatDate } from "@/lib/site";
import { cn } from "@/lib/utils";

interface CredentialBadgeProps {
  variant?: "strip" | "card";
  showCertLink?: boolean;
  className?: string;
}

const variants = {
  strip:
    "inline-flex items-center gap-3 rounded-button bg-white/80 px-5 py-2.5 shadow-card backdrop-blur-sm",
  card: "flex items-start gap-4 rounded-card bg-white p-8 shadow-card",
};

/**
 * Company-level HRD Corp Training Provider registration.
 *
 * States the registration only — deliberately no "HRD Corp claimable" / levy-claim
 * language, which is a separate programme-level approval. All facts come from
 * `site.hrdCorp`; nothing here is hardcoded.
 *
 * Light backgrounds only. The dark footer renders the credential as plain text.
 */
export function CredentialBadge({
  variant = "strip",
  showCertLink = true,
  className,
}: CredentialBadgeProps) {
  const { credential, issuer, expires, certificate, logo } = site.hrdCorp;
  const isCard = variant === "card";

  return (
    <div className={cn(variants[variant], className)}>
      {/* Decorative: the seal artwork already reads "Registered Training Provider",
          which the adjacent text repeats — so it is hidden from screen readers
          rather than announced twice. */}
      <Image
        src={logo}
        alt=""
        aria-hidden="true"
        width={168}
        height={168}
        className={cn("shrink-0", isCard ? "w-14 h-14" : "w-11 h-11")}
      />
      <div className="text-left">
        <p className={cn("font-semibold text-night", isCard ? "text-base" : "text-sm")}>
          {credential}
        </p>
        <p
          className={cn(
            "text-night/60",
            isCard ? "text-sm mt-1.5 leading-relaxed" : "text-xs mt-0.5"
          )}
        >
          {isCard && `${issuer}. `}
          Valid until {formatDate(expires)}.
          {showCertLink && (
            <>
              {" "}
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-coral hover:underline"
              >
                View certificate
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
