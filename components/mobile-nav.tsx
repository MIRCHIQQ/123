"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, type ReactNode } from "react";
import {
  servicesSubSections,
  aboutSubSections,
  corporateSubSections,
  pricesSubSections,
  receptionSubSections,
} from "@/lib/data";

function Accordion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="pb-3 pl-3">{children}</div>}
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="ml-auto md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Открыть меню"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b bg-background shadow-lg">
          <div className="container mx-auto max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-2">
            <Accordion label="Услуги">
              <Accordion label="Приём специалистов">
                {receptionSubSections.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </Accordion>
              {servicesSubSections
                .filter((section) => section.href !== "/services/reception")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
            </Accordion>

            <Accordion label="О центре">
              {aboutSubSections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </Accordion>

            <Accordion label="Юр.лицам">
              {corporateSubSections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </Accordion>

            <Accordion label="Цены">
              {pricesSubSections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </Accordion>

            {[
              { href: "/promotions", label: "Акции" },
              { href: "/news", label: "Новости" },
              { href: "#contacts", label: "Контакты" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
