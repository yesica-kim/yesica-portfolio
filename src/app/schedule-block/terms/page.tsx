import {
  DocumentSection,
  ScheduleBlockDocument,
} from "@/components/schedule-block/schedule-block-shell";

export const metadata = {
  title: "이용약관 | Schedule Block",
  description: "Schedule Block 이용약관",
};

export default function ScheduleBlockTermsPage() {
  return (
    <ScheduleBlockDocument title="이용약관" effectiveDate="시행일: 2026년 5월 24일">
      <DocumentSection title="1. 서비스 개요">
        <p>Schedule Block은 사용자가 스케줄 블록, 다이어리, 미루기 기록, 휴지통, 수동 백업, Google Calendar 연동 기능을 사용할 수 있도록 제공되는 iOS 앱입니다.</p>
      </DocumentSection>
      <DocumentSection title="2. 사용자 책임">
        <p>사용자는 앱에 입력한 일정과 기록을 직접 관리해야 합니다. 중요한 데이터는 사용자가 직접 수동 백업하거나 필요한 경우 별도 보관해야 합니다.</p>
      </DocumentSection>
      <DocumentSection title="3. Google Calendar 연동">
        <p>사용자가 Google Calendar 연동을 선택하면 Schedule Block은 스케줄 블록과 다이어리 기록을 Google Calendar 일정으로 저장하고 동기화할 수 있습니다. 연동은 사용자의 명시적 선택에 따라 시작됩니다.</p>
        <p>Google 연동 해제 후에는 이후 변경사항이 Google Calendar와 동기화되지 않습니다. 다만 기기와 Google Calendar에 이미 저장된 데이터는 유지됩니다.</p>
      </DocumentSection>
      <DocumentSection title="4. 삭제 및 초기화">
        <p>사용자가 스케줄 블록 또는 다이어리를 삭제하면 해당 항목은 휴지통으로 이동할 수 있습니다. 휴지통에서 완전 삭제한 항목은 복구할 수 없습니다.</p>
        <p>전체 데이터 초기화를 실행하면 앱 데이터, 설정, 수동 백업 파일이 삭제될 수 있습니다. Google Calendar 연동 중에는 Schedule Block이 생성한 Google Calendar 일정도 함께 삭제될 수 있으며, 이 작업은 되돌릴 수 없습니다.</p>
      </DocumentSection>
      <DocumentSection title="5. 수동 백업 및 복원">
        <p>Schedule Block은 사용자가 직접 실행하는 수동 백업 및 복원 기능을 제공할 수 있습니다. 복원 시 현재 데이터가 백업 데이터로 교체될 수 있습니다.</p>
      </DocumentSection>
      <DocumentSection title="6. 외부 서비스 및 광고">
        <p>Schedule Block은 Google Sign-In 및 Google Calendar API와 같은 외부 서비스를 사용할 수 있습니다. 향후 앱 운영을 위해 광고 또는 유료 기능이 추가될 수 있습니다.</p>
        <p>Schedule Block은 Google Calendar 데이터를 광고 타게팅, 판매, 사용자 프로파일링, 또는 제3자 제공 목적으로 사용하지 않습니다.</p>
      </DocumentSection>
      <DocumentSection title="7. 책임 제한">
        <p>Schedule Block은 안정적인 서비스 제공을 위해 노력하지만, 사용자의 기기 상태, 네트워크 상태, Google 서비스 상태, 운영체제 변경 등에 따라 일부 기능이 제한될 수 있습니다.</p>
      </DocumentSection>
      <DocumentSection title="8. 약관 변경">
        <p>본 약관은 서비스 변경 또는 법령 변경에 따라 수정될 수 있습니다. 변경된 약관은 앱 또는 공식 웹사이트를 통해 안내됩니다.</p>
      </DocumentSection>
    </ScheduleBlockDocument>
  );
}
