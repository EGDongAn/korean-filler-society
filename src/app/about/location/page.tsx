import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  TruckIcon as CarIcon,
  TruckIcon as TrainIcon
} from '@heroicons/react/24/outline';

const contactInfo = {
  address: '서울특별시 강남구 테헤란로 123',
  detailAddress: '메디컬타워 15층',
  phone: '02-555-1234',
  fax: '02-555-1235',
  email: 'info@kfillersociety.org',
  website: 'www.kfillersociety.org',
  businessHours: [
    { day: '평일', time: '09:00 - 18:00' },
    { day: '토요일', time: '09:00 - 13:00' },
    { day: '일요일/공휴일', time: '휴무' },
  ],
};

const transportInfo = [
  {
    type: '지하철',
    icon: TrainIcon,
    routes: [
      '2호선 강남역 6번 출구에서 도보 5분',
      '신분당선 강남역 B2 출구에서 도보 3분',
      '9호선 신논현역 5번 출구에서 도보 7분',
    ],
  },
  {
    type: '버스',
    icon: CarIcon,
    routes: [
      '간선버스: 146, 360, 740, N13',
      '지선버스: 3411, 4319, 6411',
      '광역버스: 9303, 1100, 7007',
    ],
  },
  {
    type: '자가용',
    icon: CarIcon,
    routes: [
      '강남대로 → 테헤란로 진입',
      '메디컬타워 지하주차장 이용',
      '주차요금: 30분당 1,500원',
    ],
  },
];

const nearbyLandmarks = [
  { name: '강남역', distance: '300m', type: '지하철역' },
  { name: '코엑스', distance: '1.2km', type: '컨벤션센터' },
  { name: '삼성역', distance: '800m', type: '지하철역' },
  { name: '선릉역', distance: '1.5km', type: '지하철역' },
  { name: '강남세브란스병원', distance: '600m', type: '병원' },
  { name: '롯데호텔', distance: '400m', type: '호텔' },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            찾아오시는 길
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            대한필러학회 사무국 위치 및 교통편 안내
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  위치 지도
                </h3>
                <p className="text-gray-500 mb-4">
                  서울 강남구 테헤란로 123<br />
                  메디컬타워 15층
                </p>
                <div className="bg-primary-600 text-white px-4 py-2 rounded-lg inline-block">
                  카카오맵으로 보기
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">연락처 정보</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">주소</p>
                    <p className="text-gray-600">
                      {contactInfo.address}<br />
                      {contactInfo.detailAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">전화번호</p>
                    <p className="text-gray-600">
                      TEL: {contactInfo.phone}<br />
                      FAX: {contactInfo.fax}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">이메일</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">업무시간</p>
                    <div className="text-gray-600 space-y-1">
                      {contactInfo.businessHours.map((hours, index) => (
                        <p key={index}>
                          {hours.day}: {hours.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            교통편 안내
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {transportInfo.map((transport, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg mr-3">
                    <transport.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {transport.type}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {transport.routes.map((route, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{route}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            주변 주요 시설
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-medium transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{landmark.name}</h3>
                    <p className="text-sm text-gray-500">{landmark.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-600 font-medium">{landmark.distance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Information */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                메디컬타워 안내
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  대한필러학회 사무국이 위치한 메디컬타워는 강남구 테헤란로의 
                  대표적인 의료 전문 빌딩입니다.
                </p>
                <p>
                  15층에 위치한 사무국은 현대적인 시설과 편리한 접근성을 갖추고 있어 
                  회원 여러분의 방문을 언제든 환영합니다.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900">층별 안내: </span>
                    <span className="text-gray-600">15층 대한필러학회 사무국</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <CarIcon className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900">주차 안내: </span>
                    <span className="text-gray-600">지하 1~3층 주차 가능 (300대)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                방문 시 참고사항
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-900">사전 연락</p>
                    <p className="text-sm text-gray-600">방문 전 사무국에 미리 연락 부탁드립니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-900">신분증 지참</p>
                    <p className="text-sm text-gray-600">빌딩 출입을 위해 신분증을 지참해 주세요.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-900">주차 할인</p>
                    <p className="text-sm text-gray-600">사무국 방문 시 2시간 무료 주차 가능합니다.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-primary-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
                >
                  전화 걸기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            더 자세한 문의가 필요하신가요?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            사무국으로 직접 연락하시거나 온라인 문의를 이용해 주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              전화 문의
            </a>
            <a
              href="/support/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              온라인 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}