import { 
  AcademicCapIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const stats = [
  { label: '설립연도', value: '2018', unit: '년' },
  { label: '회원 수', value: '2,500+', unit: '명' },
  { label: '연간 학술대회', value: '12', unit: '회' },
  { label: '파트너사', value: '50+', unit: '개' },
];

const missions = [
  {
    icon: AcademicCapIcon,
    title: '학술 연구 진흥',
    description: '필러 의학 분야의 최신 연구 성과를 공유하고 학술적 발전을 도모합니다.',
  },
  {
    icon: UserGroupIcon,
    title: '전문가 네트워킹',
    description: '국내외 필러 의학 전문가들 간의 지식 교류와 협력 관계를 구축합니다.',
  },
  {
    icon: GlobeAltIcon,
    title: '국제 협력 강화',
    description: 'AMWC 등 국제 학술단체와의 협력을 통해 글로벌 표준을 제시합니다.',
  },
  {
    icon: ChartBarIcon,
    title: '의료 표준 제정',
    description: '안전하고 효과적인 필러 시술을 위한 가이드라인과 표준을 수립합니다.',
  },
];

const achievements = [
  '보건복지부 인증 의료 학술단체 등록',
  '대한의사협회 연수평점 인정기관 지정',
  'AMWC(Aesthetic & Anti-aging Medicine World Congress) 공식 파트너',
  '국제 필러 안전성 가이드라인 공동 개발 참여',
  '연간 2,000명 이상 의료진 교육 프로그램 운영',
  '국내 최초 필러 합병증 관리 프로토콜 개발',
];

const visionPoints = [
  {
    icon: LightBulbIcon,
    title: '혁신적 교육',
    description: '최신 기술과 AR/VR을 활용한 차세대 의료 교육 플랫폼 구축',
  },
  {
    icon: GlobeAltIcon,
    title: '글로벌 리더십',
    description: '아시아 태평양 지역 필러 의학의 허브 역할 수행',
  },
  {
    icon: CheckCircleIcon,
    title: '안전성 확보',
    description: '필러 시술의 안전성과 효과성을 보장하는 표준 체계 완성',
  },
];

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              대한필러학회 소개
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              대한민국 필러 의학의 발전을 선도하며, 안전하고 효과적인 시술을 위한 
              교육과 연구에 앞장서는 전문 의료 학술단체입니다.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl lg:text-4xl font-bold text-primary-600">{stat.value}</span>
                    <span className="text-lg text-gray-600">{stat.unit}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              우리의 사명
            </h2>
            <p className="text-lg text-gray-600">
              필러 의학의 안전성과 효과성을 높이기 위한 4가지 핵심 사명
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex p-4 bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <mission.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {mission.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-16 lg:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                설립 배경과 연혁
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  대한필러학회는 2018년 국내 필러 의학의 체계적인 발전과 안전성 확보를 위해 
                  설립된 전문 의료 학술단체입니다.
                </p>
                <p>
                  급속히 성장하는 국내 미용의학 시장에서 필러 시술의 안전성과 효과성을 
                  보장하기 위한 전문적인 교육과 가이드라인 제정의 필요성이 대두되면서, 
                  국내 최고의 성형외과, 피부과 전문의들이 주축이 되어 학회를 창립하였습니다.
                </p>
                <p>
                  설립 이후 지속적인 학술 활동과 교육 프로그램을 통해 현재 2,500여 명의 
                  회원을 보유한 국내 최대 규모의 필러 전문 학술단체로 성장하였습니다.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">주요 성과</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              비전 2030
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              대한필러학회는 2030년까지 아시아 태평양 지역을 선도하는 
              필러 의학 교육 및 연구 기관으로 발전하고자 합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-medium transition-shadow">
                <div className="inline-flex p-3 bg-secondary-100 rounded-lg text-secondary-600 mb-4">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium">
              "Safe, Effective, Innovative Filler Medicine"
            </div>
            <p className="mt-4 text-gray-600 italic">
              안전하고 효과적이며 혁신적인 필러 의학을 추구합니다
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            대한필러학회와 함께하세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            필러 의학의 미래를 함께 만들어갈 전문가를 기다립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/member/join"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              회원가입
            </a>
            <a
              href="/about/organization"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              조직도 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}