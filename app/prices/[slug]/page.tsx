import { pricesSubSections } from "@/lib/data";
import { SubsectionPage } from "@/components/subsection-page";

export function generateStaticParams() {
  return pricesSubSections.map((section) => ({
    slug: section.href.split("/").pop(),
  }));
}

export default async function PricesSubsectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsection = pricesSubSections.find((section) =>
    section.href.endsWith(`/${slug}`)
  );
  if (!subsection) return null;
  return <SubsectionPage subsection={subsection} sectionLabel="Цены" />;
}
