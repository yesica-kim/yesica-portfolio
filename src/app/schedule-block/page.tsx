import Image from "next/image";
import Link from "next/link";
import { ScheduleBlockShell } from "@/components/schedule-block/schedule-block-shell";

export const metadata = {
  title: "Schedule Block",
  description: "Schedule Block 공식 소개 페이지",
};

const features = [
  {
    title: "스케줄 블록",
    description: "하루 일정을 시간과 상태에 따라 생성, 수정, 완료, 삭제할 수 있습니다.",
  },
  {
    title: "다이어리 기록",
    description: "일정과 함께 짧은 메모와 기록을 남길 수 있습니다.",
  },
  {
    title: "미루기 관리",
    description: "완료하지 못한 일정을 오늘 또는 내일 일정으로 이동할 수 있습니다.",
  },
  {
    title: "수동 백업 및 복원",
    description: "사용자가 원할 때 현재 데이터를 기기에 백업하고 복원할 수 있습니다.",
  },
];

export default function ScheduleBlockPage() {
  return (
    <ScheduleBlockShell>
      <main>
        <section className="mx-auto flex min-h-[580px] w-full max-w-[1200px] items-center px-5 py-14 sm:px-8 lg:py-20">
          <div className="max-w-[760px]">
            <Image
              src="/schedule-block/app-icon.png"
              alt="Schedule Block 앱 아이콘"
              width={96}
              height={96}
              className="mb-7 rounded-3xl shadow-[0_18px_45px_rgba(31,41,51,0.12)]"
              priority
            />
            <h1 className="text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[1.02] tracking-tight">
              Schedule Block
            </h1>
            <p className="mt-6 max-w-[720px] text-xl leading-9 text-[#64717f]">
              하루의 스케줄과 짧은 기록을 블록 단위로 관리하는 iOS 앱입니다.
              Schedule Block은 오늘 할 일, 다이어리, 미룬 일정, 휴지통, 수동
              백업, Google Calendar 연동을 한곳에서 정리할 수 있도록 돕습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/schedule-block/privacy"
                className="inline-flex rounded-lg bg-[#286c5f] px-5 py-3 font-bold text-white"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/schedule-block/terms"
                className="inline-flex rounded-lg border border-[#e2ded8] px-5 py-3 font-bold text-[#1f2933]"
              >
                이용약관
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e2ded8]">
          <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
            <h2 className="mb-7 text-3xl font-bold tracking-tight sm:text-5xl">
              주요 기능
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-lg border border-[#e2ded8] bg-white p-6"
                >
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-[17px] leading-8 text-[#64717f]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#e2ded8] bg-[#eef6f3]">
          <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">
              Google Calendar 연동
            </h2>
            <div className="max-w-[900px] space-y-5 text-[17px] leading-8 text-[#64717f]">
              <p>
                사용자가 명시적으로 Google Calendar 연동을 선택한 경우에만 Google
                계정과 Calendar Events 권한을 요청합니다. 이 권한은 앱에서
                생성한 스케줄 블록과 다이어리 기록을 Google Calendar 일정으로
                저장하고, 재연동 또는 기기 변경 시 Schedule Block 데이터를
                복원하기 위해 사용됩니다.
              </p>
              <p>
                Schedule Block은 Google Calendar 데이터를 광고, 판매, 사용자
                프로파일링, 또는 제3자 제공 목적으로 사용하지 않습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e2ded8]">
          <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">
              사용자 제어
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-[17px] leading-8 text-[#64717f]">
              <li>Google Calendar 연동은 설정에서 사용자가 직접 시작합니다.</li>
              <li>Google 연동 해제 후에도 기기와 Google Calendar에 저장된 데이터는 유지됩니다.</li>
              <li>전체 데이터 초기화는 별도 경고를 거쳐 사용자가 직접 실행합니다.</li>
              <li>수동 백업 파일은 사용자가 직접 생성, 복원, 삭제할 수 있습니다.</li>
            </ul>
          </div>
        </section>
      </main>
    </ScheduleBlockShell>
  );
}
