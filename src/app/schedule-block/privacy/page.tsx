import {
  DocumentSection,
  ScheduleBlockDocument,
} from "@/components/schedule-block/schedule-block-shell";

export const metadata = {
  title: "개인정보처리방침 | Schedule Block",
  description: "Schedule Block 개인정보처리방침",
};

export default function ScheduleBlockPrivacyPage() {
  return (
    <ScheduleBlockDocument title="개인정보처리방침" effectiveDate="시행일: 2026년 5월 24일">
      <DocumentSection title="1. 개인정보 처리 목적">
        <p>Schedule Block은 스케줄 블록, 다이어리, 미루기 기록, 수동 백업, Google Calendar 연동 기능을 제공하기 위해 필요한 범위에서만 개인정보를 처리합니다.</p>
      </DocumentSection>
      <DocumentSection title="2. 처리하는 정보">
        <p>앱은 사용자가 입력한 스케줄 블록, 다이어리 내용, 완료 상태, 미루기 기록, 휴지통 데이터, 수동 백업 데이터를 기기 내에 저장할 수 있습니다.</p>
        <p>사용자가 Google Calendar 연동을 선택하는 경우 Google 계정 이메일, Google OAuth 인증 정보, Google Calendar 일정 식별자와 동기화 메타데이터를 처리할 수 있습니다. Schedule Block은 Google 계정 비밀번호를 수집하거나 저장하지 않습니다.</p>
      </DocumentSection>
      <DocumentSection title="3. Google Calendar 데이터 사용">
        <p>Schedule Block은 사용자가 명시적으로 Google Calendar 연동을 선택한 경우에만 Google Calendar Events 권한을 요청합니다. 이 권한은 사용자가 앱에서 생성한 스케줄 블록과 다이어리 기록을 Google Calendar 일정으로 저장하고, 재연동 또는 기기 변경 시 Schedule Block 데이터를 복원하기 위해 사용됩니다.</p>
        <p>앱은 Google Calendar에서 Schedule Block이 생성한 일정 또는 Schedule Block과 연결된 일정만 식별하여 동기화합니다. 같은 항목으로 판단되는 데이터는 중복 생성하지 않고 기존 데이터와 연결합니다.</p>
      </DocumentSection>
      <DocumentSection title="4. Google 사용자 데이터 제한적 사용">
        <p>Schedule Block의 Google 사용자 데이터 사용은 Google API Services User Data Policy의 Limited Use requirements를 준수합니다. Google Calendar 데이터는 일정 백업, 복원, 동기화 기능 제공에만 사용됩니다.</p>
        <p>Schedule Block은 Google Calendar 데이터를 광고, 판매, 사용자 프로파일링, 신용 평가, 또는 제3자 제공 목적으로 사용하지 않습니다. 또한 사용자의 명시적 동의 없이 Google Calendar 데이터를 제3자에게 이전하지 않습니다.</p>
      </DocumentSection>
      <DocumentSection title="5. 데이터 보관 및 삭제">
        <p>로컬 데이터는 사용자의 기기에 저장되며, 사용자가 앱 내에서 삭제하거나 전체 데이터 초기화를 실행할 때 삭제됩니다. 휴지통으로 이동한 항목은 사용자가 복원하거나 완전 삭제할 수 있습니다.</p>
        <p>Google 연동 해제를 실행하면 Google 로그인 정보와 동기화 연결은 제거되지만, 기기와 Google Calendar에 저장된 스케줄 블록과 다이어리 데이터는 유지됩니다. 전체 데이터 초기화를 실행하는 경우 앱 데이터, 설정, 수동 백업 파일이 삭제될 수 있으며, Google Calendar 연동 중에는 Schedule Block이 생성한 Google Calendar 일정도 함께 삭제될 수 있습니다.</p>
      </DocumentSection>
      <DocumentSection title="6. 제3자 서비스">
        <p>Schedule Block은 Google Sign-In 및 Google Calendar API를 사용합니다. Google 서비스 사용에는 Google의 개인정보처리방침과 약관이 적용될 수 있습니다.</p>
      </DocumentSection>
      <DocumentSection title="7. 문의">
        <p>개인정보 처리와 관련한 문의는 지원 페이지에 안내된 연락처를 통해 접수할 수 있습니다.</p>
      </DocumentSection>
    </ScheduleBlockDocument>
  );
}
