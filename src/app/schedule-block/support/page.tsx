import Link from "next/link";
import {
  DocumentSection,
  ScheduleBlockDocument,
} from "@/components/schedule-block/schedule-block-shell";

export const metadata = {
  title: "지원 | Schedule Block",
  description: "Schedule Block 지원",
};

export default function ScheduleBlockSupportPage() {
  return (
    <ScheduleBlockDocument title="지원">
      <div className="pb-8 text-[17px] leading-8 text-[#64717f]">
        <p>Schedule Block 사용 중 문제가 발생했거나 개인정보 처리, Google Calendar 연동, 데이터 삭제와 관련한 문의가 필요한 경우 아래 연락처로 문의할 수 있습니다.</p>
      </div>
      <DocumentSection title="문의 이메일">
        <p>
          <Link href="mailto:danbari1226@gmail.com" className="text-[#286c5f] underline underline-offset-4">
            danbari1226@gmail.com
          </Link>
        </p>
      </DocumentSection>
      <DocumentSection title="문의 시 포함하면 좋은 정보">
        <ul className="list-disc space-y-2 pl-6">
          <li>사용 중인 앱 버전</li>
          <li>사용 중인 iOS 버전</li>
          <li>문제가 발생한 화면 또는 기능</li>
          <li>Google Calendar 연동 여부</li>
        </ul>
      </DocumentSection>
    </ScheduleBlockDocument>
  );
}
