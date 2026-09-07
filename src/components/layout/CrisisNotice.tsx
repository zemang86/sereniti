import { LifeBuoy } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Site-wide crisis resources.
 *
 * Duty of care: a mental health provider must surface these from every page,
 * not only inside blog prose. Rendered in the footer so it is reachable
 * everywhere without competing with page content.
 */
export function CrisisNotice() {
  return (
    <div className="mb-12 rounded-card border border-coral/25 bg-coral/[0.07] p-6">
      <div className="flex items-start gap-3">
        <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-coral" strokeWidth={1.75} />
        <div>
          <p className="text-sm font-semibold text-dawn">
            Need help right now?
          </p>
          <p className="mt-1 text-sm leading-relaxed text-dawn/60">
            If you are in crisis or at immediate risk, please reach out straight
            away. These lines are free and answered by trained people.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {site.crisis.lines.map((line) => (
              <li key={line.name}>
                <a
                  href={`tel:${line.tel}`}
                  className="text-sm font-semibold text-coral hover:underline"
                >
                  {line.display}
                </a>
                <p className="text-xs text-dawn/40">
                  {line.name} &middot; {line.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
