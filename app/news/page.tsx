import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { newsItems } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function NewsPage() {
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
          <Newspaper className="mr-1 h-3.5 w-3.5" />
          Новости
        </Badge>
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Новости и события нашего центра
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          Будьте в курсе жизни «МЕДЭКСПЕРТ»: новые кабинеты, акции и важные
          обновления.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {newsItems.map((item, index) => (
          <Card
            key={item.title}
            className="card-hover flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={asset(item.image)}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>{item.date}</span>
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.excerpt}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
