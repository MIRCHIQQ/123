import { HeartPulse, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { SectionExplorer } from "@/components/section-explorer";
import { PhotoSlider } from "@/components/photo-slider";
import { asset } from "@/lib/asset";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutFeatures, contacts, aboutSubSections } from "@/lib/data";

const highlights = [
  {
    icon: Users,
    title: "Опытные специалисты",
    text: "Врачи с многолетней практикой и заботой о каждом пациенте.",
  },
  {
    icon: ShieldCheck,
    title: "Современная диагностика",
    text: "Точное оборудование для быстрой и достоверной диагностики.",
  },
  {
    icon: HeartPulse,
    title: "Забота о здоровье",
    text: "Тёплая атмосфера и внимание к деталям на каждом приёме.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 gradient-hero-vibrant" />
        <div className="absolute inset-0 pattern-grid opacity-40" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 py-20 sm:py-28">
          <Badge
            variant="secondary"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            Медицинский центр «МЕДЭКСПЕРТ»
          </Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              Забота о вашем здоровье — наша главная цель
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              Современная клиника, где опытные врачи, точная диагностика и
              тёплое отношение помогают вам чувствовать себя лучше уже сегодня.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <a href="#about">
              <Button variant="outline" size="lg">
                Узнать о центре
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <Reveal className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <Card
              key={item.title}
              className="card-hover animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Reveal>
      </section>

      <section className="border-t">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
          <Reveal>
            <PhotoSlider
              slides={[
                {
                  image: asset("/assets/project-cover.png"),
                  title: "Забота о вашем здоровье",
                  caption: "Медицинский центр «МЕДЭКСПЕРТ»",
                },
                {
                  image: asset("/assets/project-cover.png"),
                  title: "Опытные специалисты",
                  caption: "Врачи с многолетней практикой",
                },
                {
                  image: asset("/assets/project-cover.png"),
                  title: "Современная диагностика",
                  caption: "Точное оборудование для вас",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section id="about" className="border-t">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
          <SectionExplorer
            badge="О центре"
            title="Центр, которому доверяют заботу о здоровье"
            description="Медицинский центр «МЕДЭКСПЕРТ» — современная клиника с командой опытных врачей, точной диагностикой и тёплым отношением к каждому пациенту."
            subsections={aboutSubSections}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="card-hover animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="border-t">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
          <Reveal className="mb-10 flex flex-col items-start gap-4">
            <Badge
              variant="secondary"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              Контакты
            </Badge>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              Свяжитесь с нами
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              Позвоните нам или приходите в гости — мы всегда рады помочь с
              выбором специалиста и записью на приём.
            </p>
          </Reveal>

          <Reveal className="grid gap-6 sm:grid-cols-3">
            {contacts.map((contact, index) => (
              <Card
                key={contact.label}
                className="card-hover animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardDescription>{contact.label}</CardDescription>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <CardTitle className="text-lg">{contact.value}</CardTitle>
                  )}
                </CardHeader>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="booking" className="border-t gradient-hero-light">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-start gap-4">
              <Badge
                variant="secondary"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                Запись на приём
              </Badge>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                Запишитесь на консультацию
              </h2>
              <p className="max-w-lg text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
                Оставьте заявку, и наш администратор перезвонит вам, чтобы
                подобрать удобное время приёма и ответить на все вопросы.
              </p>
            </div>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
