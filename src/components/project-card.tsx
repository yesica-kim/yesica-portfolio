import Link from "next/link";
import type { Project } from "@/data/projects";
import { FloatCard } from "./motion";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <FloatCard className="h-full">
      <article
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(16,24,32,0.72)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur transition hover:border-[#5ef2c2]/30"
      >
        <div
          className={`mb-5 flex aspect-[16/10] items-end rounded-[1.15rem] bg-gradient-to-br ${project.accent} p-4`}
        >
          <div className="w-full rounded-2xl border border-white/30 bg-white/25 p-3 shadow-lg backdrop-blur-md">
            <div className="h-2 w-20 rounded-full bg-white/70" />
            <div className="mt-3 grid gap-2">
              <div className="h-8 rounded-xl bg-white/45" />
              <div className="h-8 rounded-xl bg-white/30" />
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.category.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#5ef2c2]/15 bg-[#5ef2c2]/8 px-3 py-1 text-xs font-medium text-[#91f7d7]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-[#d7e0ea]">
          {project.subtitle}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#9ba8b5]">
          {project.description}
        </p>
        <dl className="mt-5 grid gap-3 border-t border-white/[0.07] pt-5 text-sm">
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-[#687686]">Period</dt>
            <dd className="font-medium text-[#c3ccd6]">{project.period}</dd>
          </div>
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-[#687686]">Status</dt>
            <dd className="font-medium text-[#c3ccd6]">{project.releaseInfo}</dd>
          </div>
          <div>
            <dt className="text-[#687686]">Role</dt>
            <dd className="mt-1 text-[#c3ccd6]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-[#687686]">Platform</dt>
            <dd className="mt-1 text-[#c3ccd6]">{project.platform}</dd>
          </div>
        </dl>
        <p className="mt-4 rounded-2xl border border-[#5ef2c2]/15 bg-[#5ef2c2]/8 px-4 py-3 text-sm leading-6 text-[#c8fbe8]">
          {project.outcome}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-[#5ef2c2] transition hover:translate-x-1"
          >
            상세 보기
          </Link>
          {project.productUrl ? (
            <Link
              href={project.productUrl}
              className="text-sm font-semibold text-[#d7e0ea] transition hover:text-white"
            >
              {project.productLabel ?? "제품 링크"}
            </Link>
          ) : null}
        </div>
      </article>
    </FloatCard>
  );
}
