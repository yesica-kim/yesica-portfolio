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
          title="채워 넣기 좋은 프로젝트 아카이브"
          description="각 프로젝트는 데이터 파일에서 관리되며, 상세 페이지는 같은 템플릿으로 연결되어 있습니다."
        />
      </FadeIn>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
