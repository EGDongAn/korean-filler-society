import { 
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  TrophyIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const conferenceHighlights = [
  {
    icon: UserGroupIcon,
    title: '500+ 참가자',
    description: '국내외 필러 전문가들이 모이는 최대 규모 행사',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: AcademicCapIcon,
    title: '45명 연자',
    description: '세계적 수준의 전문가들의 최신 지견 공유',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: GlobeAltIcon,
    title: '15개국 참여',
    description: '아시아 태평양 지역을 대표하는 국제 학술대회',
    color: 'bg-accent-blue bg-blue-100 text-blue-600',
  },
  {
    icon: TrophyIcon,
    title: '12 CME 점수',
    description: '대한의사협회 인정 연수평점 최대 취득',
    color: 'bg-green-100 text-green-600',
  },
];

const keyTopics = [
  '최신 필러 시술 테크닉',
  '안면 해부학과 주입 포인트',
  '합병증 예방 및 관리',
  '신제품 소개 및 비교 분석',
  '환자 안전성 프로토콜',
  '미용의학 트렌드 분석',
  '국제 가이드라인 업데이트',
  '케이스 스터디 발표',
];

const speakers = [
  {
    name: 'Dr. Jean-Michel Mazer',
    title: 'AMWC Scientific Director',
    country: 'France',
    topic: 'Advanced Injection Techniques',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dr. Sung Min Park',
    title: 'Seoul National University',
    country: 'Korea',
    topic: 'Asian Facial Anatomy',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dr. Lisa Chen',
    title: 'Singapore General Hospital',
    country: 'Singapore',
    topic: 'Complication Management',
    image: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=200&h=200&fit=crop&crop=face',
  },
];

const schedule = [
  {
    day: 'Day 1 - 3월 15일 (토)',
    sessions: [
      { time: '08:00-09:00', title: '등록 및 환영 리셉션' },
      { time: '09:00-09:30', title: '개회식 및 기조연설' },
      { time: '09:30-11:00', title: 'Session 1: 필러 기초 과정' },
      { time: '11:00-11:30', title: '커피 브레이크 & 전시회' },
      { time: '11:30-12:30', title: 'Session 2: 고급 테크닉' },
      { time: '12:30-14:00', title: '점심 & 네트워킹' },
      { time: '14:00-15:30', title: 'Session 3: 합병증 관리' },
      { time: '15:30-16:00', title: '간식 & 전시회' },
      { time: '16:00-17:30', title: 'Session 4: 케이스 스터디' },
      { time: '19:00-21:00', title: '만찬 & 어워드 세레모니' },
    ],
  },
  {
    day: 'Day 2 - 3월 16일 (일)',
    sessions: [
      { time: '09:00-10:30', title: 'Session 5: 신제품 소개' },
      { time: '10:30-11:00', title: '커피 브레이크' },
      { time: '11:00-12:30', title: 'Session 6: 핸즈온 워크샵' },
      { time: '12:30-14:00', title: '점심 & 자유 토론' },
      { time: '14:00-15:30', title: 'Session 7: 미래 전망' },
      { time: '15:30-16:00', title: '폐회식 & 수료증 수여' },
    ],
  },
];

export default function ConferenceIntroductionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <CalendarIcon className="w-4 h-4 mr-2" />
              2025년 3월 15일-16일
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              2025 춘계 학술대회
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Advanced Filler Techniques: Innovation & Safety
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              국내외 최고 전문가들과 함께하는 필러 의학의 최신 트렌드와 혁신 기술을 만나보세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-lg">
                <MapPinIcon className="w-6 h-6 mr-2" />
                서울 코엑스 그랜드볼룸
              </div>
              <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
              <div className="flex items-center text-lg">
                <UserGroupIcon className="w-6 h-6 mr-2" />
                500+ 참가 예정
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              대회 하이라이트
            </h2>
            <p className="text-lg text-gray-600">
              2025 춘계 학술대회의 특별한 특징들
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-full ${highlight.color} mb-4`}>
                  <highlight.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                주요 주제
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                최신 필러 의학 트렌드부터 실무 적용까지, 
                현장에서 바로 활용할 수 있는 실용적인 내용들로 구성되었습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="학술대회 현장"
                className="rounded-xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 연자
            </h2>
            <p className="text-lg text-gray-600">
              세계적으로 인정받는 필러 전문가들의 강연
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                <div className="relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                      {speaker.country}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    강연 주제: {speaker.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/conference/speakers"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              전체 연자 보기
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              프로그램 일정
            </h2>
            <p className="text-lg text-gray-600">
              2일간의 알찬 일정으로 구성된 학술대회
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {day.day}
                </h3>
                
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-20 text-sm text-gray-500 font-medium">
                        {session.time}
                      </div>
                      <div className="flex-1 ml-4">
                        <p className="text-gray-900 font-medium">{session.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/conference/program"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              상세 프로그램 보기
            </a>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              지금 등록하고 Early Bird 할인 혜택을 받으세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              2025년 2월 15일까지 등록 시 최대 30% 할인!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">₩150,000</div>
                <div className="text-sm opacity-80">의사회원 Early Bird</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">₩80,000</div>
                <div className="text-sm opacity-80">간호사 Early Bird</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">₩50,000</div>
                <div className="text-sm opacity-80">학생 Early Bird</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/conference/registration"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                지금 등록하기
              </a>
              <a
                href="/conference/program"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                프로그램 상세보기
              </a>
            </div>
            
            <p className="mt-6 text-sm opacity-80">
              * 등록 후 변경/취소는 학술대회 7일 전까지 가능합니다
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}