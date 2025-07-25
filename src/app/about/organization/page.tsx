import { UserCircleIcon, BuildingOfficeIcon, StarIcon } from '@heroicons/react/24/outline';

const executiveBoard = [
  {
    name: '김대호',
    position: '회장',
    hospital: '서울대학교병원 성형외과',
    specialty: '안면필러, 비침습적 성형술',
    education: '서울대학교 의과대학',
    experience: '25년',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: '박영희',
    position: '부회장',
    hospital: '연세대학교 세브란스병원 피부과',
    specialty: '미용피부과, 필러 안전성 연구',
    education: '연세대학교 의과대학',
    experience: '22년',
    image: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: '이준수',
    position: '상임이사',
    hospital: '고려대학교 안암병원 성형외과',
    specialty: '3D 얼굴 분석, 필러 주입술',
    education: '고려대학교 의과대학',
    experience: '18년',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
  },
];

const directors = [
  { name: '정민호', position: '학술이사', hospital: '삼성서울병원 성형외과' },
  { name: '최지영', position: '교육이사', hospital: '아산병원 피부과' },
  { name: '장철수', position: '기획이사', hospital: '강남세브란스병원' },
  { name: '윤미래', position: '홍보이사', hospital: '서울성모병원 성형외과' },
  { name: '한국진', position: '국제이사', hospital: '분당서울대병원' },
  { name: '송현아', position: '재무이사', hospital: '신촌세브란스병원' },
];

const committees = [
  {
    name: '학술위원회',
    description: '학술대회 기획, 연구 과제 심의, 가이드라인 제정',
    chair: '정민호 이사',
    members: 12,
  },
  {
    name: '교육위원회',
    description: '교육 프로그램 개발, 강의 심사, 인증 관리',
    chair: '최지영 이사',
    members: 10,
  },
  {
    name: '윤리위원회',
    description: '의료윤리 심의, 분쟁 조정, 회원 징계',
    chair: '한국진 이사',
    members: 7,
  },
  {
    name: '국제협력위원회',
    description: '해외 학회 교류, 국제 학술 협력 사업',
    chair: '한국진 이사',
    members: 8,
  },
];

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            조직도 및 임원진
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            대한필러학회를 이끌어가는 전문가들을 소개합니다
          </p>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">임원진</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {executiveBoard.map((executive, index) => (
              <div key={index} className="bg-white rounded-xl shadow-large p-6 text-center hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                      <StarIcon className="w-3 h-3 mr-1" />
                      {executive.position}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{executive.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{executive.hospital}</p>
                <p className="text-gray-600 text-sm mb-3">{executive.specialty}</p>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">학력:</span>
                    <span className="text-gray-900">{executive.education}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">경력:</span>
                    <span className="text-gray-900">{executive.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Directors Grid */}
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">이사진</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((director, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{director.name}</h4>
                  <p className="text-sm text-primary-600">{director.position}</p>
                  <p className="text-xs text-gray-500">{director.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">조직 구조</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Org Chart */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold mb-8">
                회장
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-gray-300"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg font-medium">
                  부회장
                </div>
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg font-medium">
                  상임이사
                </div>
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg font-medium">
                  감사
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-gray-300"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  학술이사
                </div>
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  교육이사
                </div>
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  기획이사
                </div>
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  홍보이사
                </div>
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  국제이사
                </div>
                <div className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                  재무이사
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">위원회</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {committee.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {committee.description}
                    </p>
                  </div>
                  <BuildingOfficeIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                </div>
                
                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">위원장</p>
                    <p className="font-medium text-gray-900">{committee.chair}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">위원 수</p>
                    <p className="font-medium text-gray-900">{committee.members}명</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            대한필러학회 임원진에게 문의하기
          </h2>
          <p className="text-xl mb-8 opacity-90">
            학회 운영 관련 제안이나 문의사항이 있으시면 언제든 연락주세요
          </p>
          <a
            href="/support/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            문의하기
          </a>
        </div>
      </section>
    </div>
  );
}