import { receptionSubSections } from "@/lib/data";
import { SubsectionPage } from "@/components/subsection-page";

export function generateStaticParams() {
  return receptionSubSections.map((section) => ({
    slug: section.href.split("/").pop(),
  }));
}

export default async function ReceptionSubsectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsection = receptionSubSections.find((section) =>
    section.href.endsWith(`/${slug}`)
  );
  if (!subsection) return null;
  return <SubsectionPage subsection={subsection} sectionLabel="Услуги" />;
}
