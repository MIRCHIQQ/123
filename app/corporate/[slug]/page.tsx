import { corporateSubSections } from "@/lib/data";
import { CorporatePage } from "@/components/corporate-page";

export function generateStaticParams() {
  return corporateSubSections.map((section) => ({
    slug: section.href.split("/").pop(),
  }));
}

export default async function CorporateSubsectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsection = corporateSubSections.find((section) =>
    section.href.endsWith(`/${slug}`)
  );
  if (!subsection) return null;
  return <CorporatePage subsection={subsection} />;
}
