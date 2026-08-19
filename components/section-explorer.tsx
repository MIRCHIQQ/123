"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SubSection } from "@/lib/data";

type SectionExplorerProps = {
  badge: string;
  title: string;
  description: string;
  subsections: SubSection[];
};

export function SectionExplorer({
  badge,
  title,
  description,
  subsections,
}: SectionExplorerProps) {
  return (
    <div>
      <div className="mb-10 flex flex-col items-start gap-4">
        <Badge
          variant="secondary"
          className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {badge}
        </Badge>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          {title}
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          {description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {subsections.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <Card className="card-hover scroll-mt-20 h-full">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
