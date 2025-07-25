import { CalendarIcon, TrophyIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const milestones = [
  {
    year: '2018',
    title: '대한필러학회 창립',
    description: '국내 필러 의학 전문가 50명이 모여 학회를 정식 창립',
    achievements: [
      '학회 정관 제정 및 초대 임원진 선출',
      '창립 기념 심포지엄 개최 (참석자 150명)',
      '필러 안전성 가이드라인 v1.0 발표',
    ],
    highlight: true,
  },
  {
    year: '2019',
    title: '교육 프로그램 체계화',
    description: '체계적인 교육 시스템 구축 및 첫 정기 학술대회 개최',
    achievements: [
      '제1회 춘계 학술대회 개최 (참석자 300명)',
      '온라인 교육 플랫폼 "KFS Academy" 런칭',
      '대한의사협회 연수평점 인정기관 승인',
      '회원 수 500명 돌파',
    ],
  },
  {
    year: '2020',
    title: '디지털 전환 및 글로벌 파트너십',
    description: 'COVID-19 대응 비대면 교육 시스템 구축',
    achievements: [
      '온라인 학술대회 시스템 구축',
      'AMWC(국제미용의학회) 공식 파트너십 체결',
      '필러 합병증 관리 프로토콜 개발',
      '해외 연자 초청 국제 심포지엄 시작',
    ],
  },
  {
    year: '2021',
    title: '연구 활동 강화',
    description: '국내 최초 필러 안전성 대규모 연구 프로젝트 시작',
    achievements: [
      '필러 안전성 연구센터 설립',
      '국내 5개 대학병원과 연구 협력 체결',
      '보건복지부 의료기술개발사업 선정',
      '회원 수 1,000명 돌파',
    ],
  },
  {
    year: '2022',
    title: '국제적 인정 및 표준화',
    description: '아시아 태평양 지역 필러 의학 표준 제정 주도',
    achievements: [
      'ISO 필러 안전성 표준 제정 참여',
      '아시아 필러 의학회 연맹 창립 멤버 참여',
      '해외 학술지 논문 발표 20편 달성',
      '필러 시술 국가 인증 과정 개발',
    ],
  },
  {
    year: '2023',
    title: '기술 혁신과 AI 도입',
    description: 'AI 기반 필러 시술 가이드 시스템 개발',
    achievements: [
      'AI 얼굴 분석 시스템 "FillerAI" 개발',
      '3D 시뮬레이션 교육 프로그램 도입',
      'VR/AR 활용 실습 교육 시스템 구축',
      '회원 수 2,000명 돌파',
    ],
  },
  {
    year: '2024',
    title: '글로벌 리더십 확장',
    description: '아시아 태평양 지역 필러 의학의 허브로 자리매김',
    achievements: [
      '제1회 APAC 필러 컨퍼런스 주최 (15개국 참가)',
      '해외 진출 한국 의료진 교육 프로그램 런칭',
      '국제 필러 안전성 가이드라인 공동 개발',
      '회원 수 2,500명 달성',
    ],
  },
];

const statistics = [
  { label: '총 회원 수', value: '2,500+', icon: UserGroupIcon },
  { label: '개최 학술대회', value: '42', icon: CalendarIcon },
  { label: '국제 파트너', value: '15', icon: GlobeAltIcon },
  { label: '연구논문', value: '150+', icon: TrophyIcon },
];

const awards = [
  {
    year: '2020',
    title: '보건복지부 장관상',
    description: '의료 안전성 향상에 기여한 공로',
  },
  {
    year: '2021',
    title: 'AMWC Excellence Award',
    description: '아시아 지역 미용의학 발전 기여상',
  },
  {
    year: '2022',
    title: '대한의사협회 학술상',
    description: '혁신적인 의료 교육 프로그램 개발',
  },
  {
    year: '2023',
    title: 'ISO 기여상',
    description: '국제 의료 표준 제정 기여',
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            학회 연혁
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            2018년 창립부터 현재까지, 대한필러학회의 성장 이야기를 소개합니다
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <stat.icon className="h-8 w-8" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            주요 연혁
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`${
                      milestone.highlight 
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white' 
                        : 'bg-white border-2 border-gray-200'
                    } rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-2xl font-bold ${
                          milestone.highlight ? 'text-white' : 'text-primary-600'
                        }`}>
                          {milestone.year}
                        </span>
                        {milestone.highlight && (
                          <TrophyIcon className="w-6 h-6 text-yellow-300" />
                        )}
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-2 ${
                        milestone.highlight ? 'text-white' : 'text-gray-900'
                      }`}>
                        {milestone.title}
                      </h3>
                      
                      <p className={`mb-4 ${
                        milestone.highlight ? 'text-gray-100' : 'text-gray-600'
                      }`}>
                        {milestone.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className={`text-sm flex items-start ${
                            milestone.highlight ? 'text-gray-100' : 'text-gray-700'
                          }`}>
                            <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for opposite side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            주요 수상 내역
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-medium transition-all">
                <div className="inline-flex p-3 bg-yellow-100 rounded-full text-yellow-600 mb-4">
                  <TrophyIcon className="h-6 w-6" />
                </div>
                
                <p className="text-primary-600 font-semibold mb-2">{award.year}</p>
                <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            미래를 향한 비전
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 opacity-90">
              대한필러학회는 지난 6년간의 성과를 바탕으로 2030년까지 
              아시아 태평양 지역을 선도하는 필러 의학 교육 및 연구 기관으로 
              발전하고자 합니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">2025년 목표</h3>
                <p className="text-sm opacity-90">
                  AI 기반 필러 시술 가이드 시스템 상용화 및 
                  국제 표준 인증 획득
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">2027년 목표</h3>
                <p className="text-sm opacity-90">
                  글로벌 필러 의학 교육 네트워크 구축 및 
                  해외 진출 확대
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">2030년 목표</h3>
                <p className="text-sm opacity-90">
                  아시아 태평양 지역 필러 의학의 
                  글로벌 허브로 자리매김
                </p>
              </div>
            </div>
            
            <a
              href="/about/overview"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              학회 비전 자세히 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}