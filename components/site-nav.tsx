"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  servicesSubSections,
  aboutSubSections,
  corporateSubSections,
  pricesSubSections,
  receptionSubSections,
  type SubSection,
} from "@/lib/data";

type NavChild = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  children: NavChild[];
};

const plainLinks = [
  { href: "/promotions", label: "Акции" },
  { href: "/news", label: "Новости" },
  { href: "#contacts", label: "Контакты" },
];

function toChildren(subsections: SubSection[]): NavChild[] {
  return subsections.map((section) => ({
    label: section.label,
    href: section.href,
  }));
}

const dropdownLinks: {
  label: string;
  groups: NavGroup[];
  children: NavChild[];
}[] = [
  {
    label: "Услуги",
    groups: [
      {
        label: "Приём специалистов",
        children: toChildren(receptionSubSections),
      },
    ],
    children: toChildren(
      servicesSubSections.filter(
        (section) => section.href !== "/services/reception"
      )
    ),
  },
  {
    label: "О центре",
    groups: [],
    children: toChildren(aboutSubSections),
  },
  {
    label: "Юр.лицам",
    groups: [],
    children: toChildren(corporateSubSections),
  },
  {
    label: "Цены",
    groups: [],
    children: toChildren(pricesSubSections),
  },
];

export function SiteNav() {
  return (
    <nav className="ml-8 hidden items-center gap-1 md:flex">
      {dropdownLinks.map((link) => (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground data-open:text-foreground">
            {link.label}
            <ChevronDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {link.groups.map((group) => (
                <DropdownMenuSub key={group.label}>
                  <DropdownMenuSubTrigger>{group.label}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      {group.children.map((item) => (
                        <DropdownMenuItem
                          key={item.href}
                          render={<Link href={item.href} />}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
              {link.children.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  render={<Link href={item.href} />}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}

      {plainLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
