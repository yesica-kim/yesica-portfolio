import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="실제 서비스와 개인 제품을 연결하는 프로젝트 아카이브"
          description="운영 경험이 있는 서비스, 복잡한 비즈니스 UX, AI와 함께 만든 개인 제품을 중심으로 정리했습니다."
        />
      </FadeIn>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
