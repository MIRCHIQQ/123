import { aboutSubSections } from "@/lib/data";
import { SubsectionPage } from "@/components/subsection-page";

export function generateStaticParams() {
  return aboutSubSections
    .filter((section) => section.href !== "/about/doctors")
    .map((section) => ({
      slug: section.href.split("/").pop(),
    }));
}

export default async function AboutSubsectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsection = aboutSubSections.find((section) =>
    section.href.endsWith(`/${slug}`)
  );
  if (!subsection) return null;
  return <SubsectionPage subsection={subsection} sectionLabel="О центре" />;
}
