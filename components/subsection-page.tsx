import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SubSection } from "@/lib/data";

type SubsectionPageProps = {
  subsection: SubSection;
  sectionLabel: string;
};

export function SubsectionPage({
  subsection,
  sectionLabel,
}: SubsectionPageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:py-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>
      <Badge
        variant="secondary"
        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        {sectionLabel}
      </Badge>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {subsection.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
        {subsection.text}
      </p>
    </div>
  );
}
