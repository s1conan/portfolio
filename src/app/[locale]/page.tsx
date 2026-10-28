import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Benchmarks } from "@/components/sections/benchmarks";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import {
  benchmarkValues,
  certificationRecords,
  projectRecords,
} from "@/lib/data";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n/config";
import type { BenchmarkView, ProjectView } from "@/lib/i18n/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);

  const projects: ProjectView[] = projectRecords.map((record, index) => ({
    ...record,
    ...copy.projects[index],
  }));

  const benchmarks: BenchmarkView[] = benchmarkValues.map((value, index) => ({
    value,
    ...copy.benchmarks[index],
  }));

  return (
    <>
      <Header
        locale={locale}
        navLinks={copy.site.navLinks}
        secureLink={copy.cta.secureLink}
        language={copy.language}
        aria={copy.aria}
      />
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col">
        <Hero copy={copy} />
        <Marquee copy={copy} />
        <Projects
          heading={copy.sectionHeadings.projects}
          projects={projects}
          aria={copy.aria}
          modalCopy={copy.projectModal}
        />
        <Skills copy={copy} />
        <Services copy={copy} />
        <Certifications
          heading={copy.sectionHeadings.certifications}
          certificates={certificationRecords}
          issuedBy={copy.certifications.issuedBy}
          aria={copy.aria}
        />
        <Benchmarks
          heading={copy.sectionHeadings.benchmarks}
          benchmarks={benchmarks}
          testimonials={copy.testimonials}
        />
        <About copy={copy} />
        <Contact
          locale={locale}
          heading={copy.sectionHeadings.contact}
          copy={copy.contact}
          services={copy.services}
        />
      </main>
      <Footer copy={copy} />
    </>
  );
}
