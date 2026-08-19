import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BadgePercent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { promotions } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function PromotionsPage() {
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
          <BadgePercent className="mr-1 h-3.5 w-3.5" />
          Акции и предложения
        </Badge>
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Действующие акции нашего центра
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          Следите за скидками и специальными предложениями, чтобы сделать заботу
          о здоровье доступнее.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {promotions.map((promo, index) => (
          <Card
            key={promo.title}
            className="card-hover flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={asset(promo.image)}
                alt={promo.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <promo.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{promo.title}</CardTitle>
              <CardDescription>{promo.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-end gap-3">
              <Separator className="mb-1" />
              <p className="text-sm text-muted-foreground">{promo.terms}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
