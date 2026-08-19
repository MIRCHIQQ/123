import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { SubSection } from "@/lib/data";

type CorporatePageProps = {
  subsection: SubSection;
};

export function CorporatePage({ subsection }: CorporatePageProps) {
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
        <Building2 className="mr-1 h-3.5 w-3.5" />
        Юр.лицам
      </Badge>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {subsection.title}
      </h1>
      <div className="relative mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 blur-2xl" />
        <Card className="relative rounded-2xl border-transparent bg-gradient-to-br from-background/95 to-muted/80 p-6 shadow-xl sm:p-8 backdrop-blur-sm">
          <div className="whitespace-pre-line text-base leading-relaxed text-foreground/90 sm:text-lg">
            {subsection.text}
          </div>
        </Card>
      </div>
    </div>
  );
}
