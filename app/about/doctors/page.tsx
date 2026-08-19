import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { specialists } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function DoctorsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>
      <div className="mb-10 flex flex-col items-start gap-4">
        <Badge
          variant="secondary"
          className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          О центре
        </Badge>
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Наши врачи
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          Команда опытных специалистов с высшей категорией и многолетней
          практикой по всем основным направлениям медицины.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialists.map((specialist, index) => (
          <Card
            key={specialist.name}
            className="card-hover flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={asset(specialist.image)}
                alt={specialist.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Stethoscope className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-base">{specialist.name}</CardTitle>
              <CardDescription>{specialist.role}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-end gap-3">
              <p className="text-sm text-muted-foreground">
                {specialist.description}
              </p>
              <p className="text-sm font-medium text-primary">
                {specialist.experience}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
