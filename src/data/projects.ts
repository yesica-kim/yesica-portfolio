export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string[];
  description: string;
  role: string;
  platform: string;
  period: string;
  status: string;
  outcome: string;
  releaseInfo: string;
  productUrl?: string;
  productLabel?: string;
  accent: string;
  focus: string[];
  overview: string;
  problem: string;
  goal: string;
  screens: string[];
};

export const projects: Project[] = [
  {
    slug: "schedule-block",
    title: "Schedule Block",
    subtitle: "Recovery-first scheduling system",
    category: ["Personal Product", "AI-built App", "Productivity"],
    description: "계획 실패의 감정 부담을 줄이는 일정 블록 앱",
    role: "Product Design, UI/UX, AI-assisted Development",
    platform: "App",
    period: "2026",
    status: "App Store Released",
    outcome: "Google Calendar Sync · Auto Reschedule · App Store Released",
    releaseInfo: "Official Page / Released",
    productUrl: "/schedule-block",
    productLabel: "제품 페이지",
    accent: "from-cyan-400 via-teal-400 to-emerald-400",
    focus: ["회복형 UX", "자동 미루기", "일정+할일 통합", "AI 협업 개발"],
    overview:
      "개인의 반복적인 계획 실패 경험에서 출발한 제품입니다. 일정과 할일을 하나의 흐름으로 다루고, 실패 후 다시 회복할 수 있는 UX를 중심에 둡니다.",
    problem:
      "사용자는 계획을 세우는 순간보다 계획이 밀렸을 때 더 큰 피로와 죄책감을 느낍니다. 기존 도구는 실패 이후의 재정렬 경험을 충분히 돕지 못했습니다.",
    goal:
      "일정 변경과 미루기를 자연스러운 흐름으로 만들고, 사용자가 오늘의 리듬을 잃지 않도록 돕는 생산성 앱 구조를 설계합니다.",
    screens: ["Today Blocks", "Auto Reschedule", "Task Detail", "Weekly Rhythm"],
  },
  {
    slug: "walla",
    title: "Walla Improvement",
    subtitle: "Survey creation flow improvement",
    category: ["Product Design", "UX Research", "Survey Service"],
    description: "설문 제작 경험을 개선한 프로덕트 디자인 프로젝트",
    role: "UX Research, Product Design, UI Design",
    platform: "Web",
    period: "2025",
    status: "Case Study Draft",
    outcome: "Survey Builder · IA Improvement · UX Writing",
    releaseInfo: "Case Study Draft",
    accent: "from-sky-400 via-cyan-400 to-teal-400",
    focus: ["설문 제작 플로우 개선", "정보 구조 개선", "UX Writing", "흐름 단순화"],
    overview:
      "설문 제작자가 질문을 만들고 배포하기까지의 흐름을 점검하고, 불편 지점을 줄이는 방향으로 개선안을 설계한 프로젝트입니다.",
    problem:
      "설문 생성 과정에서 사용자가 현재 단계와 다음 행동을 명확히 파악하기 어렵고, 설정 정보가 흩어져 반복 확인이 필요했습니다.",
    goal:
      "설문 제작의 진입 장벽을 낮추고, 설정-편집-배포 흐름을 더 예측 가능하게 만드는 UX 구조를 제안합니다.",
    screens: ["Survey Builder", "Question Flow", "Settings Panel", "Publish Check"],
  },
  {
    slug: "wsop-plus",
    title: "WSOP+",
    subtitle: "Global poker tournament platform",
    category: ["Real Service", "App", "Admin", "Payment Flow"],
    description: "포커 대회 접수, 결제, 관리자 운영 시스템 설계",
    role: "UI/UX Design, App Design, Admin Design",
    platform: "App, Admin Web",
    period: "2025–2026",
    status: "Real Service",
    outcome: "Mobile App + Admin System · Payment Flow · Service Operation",
    releaseInfo: "Live Service",
    accent: "from-blue-400 via-cyan-400 to-emerald-400",
    focus: ["대회 접수/결제", "관리자페이지", "양면 사용자 경험", "상태값 관리"],
    overview:
      "실제 운영되는 포커 대회 서비스의 접수, 결제, 운영 관리 경험을 앱과 관리자 웹 양쪽에서 설계한 프로젝트입니다.",
    problem:
      "사용자 접수 상태, 결제 상태, 운영자의 확인 작업이 서로 연결되어 있어 작은 정보 누락도 운영 리스크로 이어질 수 있었습니다.",
    goal:
      "참가자는 쉽게 신청하고, 운영자는 복잡한 상태를 빠르게 파악하며 처리할 수 있는 안정적인 서비스 흐름을 만듭니다.",
    screens: ["Tournament Entry", "Payment Flow", "Admin Dashboard", "Status Management"],
  },
  {
    slug: "pokerstake",
    title: "PokerStake",
    subtitle: "Staking-based tournament participation UX",
    category: ["Web Service", "Complex Business UX"],
    description: "스테이킹 기반 포커 대회 참여 플랫폼 UX 설계",
    role: "UI/UX Design, Web Service Design",
    platform: "Web",
    period: "Case Study Draft",
    status: "Case Study Draft",
    outcome: "Player / Backer Flow · Prize Pool IA · Trust-based UX",
    releaseInfo: "Case Study Draft",
    accent: "from-indigo-400 via-sky-400 to-teal-400",
    focus: ["Player / Backer 관계", "스테이킹 흐름", "수익 분배 구조", "신뢰 기반 UX"],
    overview:
      "복잡한 스테이킹 비즈니스 구조를 사용자가 이해하고 신뢰할 수 있도록 정보 구조와 참여 흐름을 설계한 프로젝트입니다.",
    problem:
      "Player, Backer, Prize Pool, 수익 분배 조건이 얽혀 있어 사용자가 참여 전 리스크와 기대 결과를 이해하기 어려웠습니다.",
    goal:
      "투명한 정보 구조와 단계적 의사결정 흐름을 통해 복잡한 참여 모델을 명확하게 전달합니다.",
    screens: ["Stake Overview", "Player Profile", "Backing Flow", "Revenue Split"],
  },
];

export const selectedProjects = projects;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
