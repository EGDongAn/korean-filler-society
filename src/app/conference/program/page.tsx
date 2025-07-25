'use client';

import { useState } from 'react';
import { 
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  BeakerIcon,
  ChatBubbleLeftIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface Session {
  id: string;
  time: string;
  title: string;
  type: 'keynote' | 'session' | 'workshop' | 'break' | 'meal' | 'networking';
  speaker?: string;
  speakerTitle?: string;
  room?: string;
  duration: number;
  description?: string;
  cmeCredits?: number;
  capacity?: number;
  isFeatured?: boolean;
}

interface DayProgram {
  date: string;
  day: string;
  sessions: Session[];
}

const programData: DayProgram[] = [
  {
    date: '2025-03-15',
    day: 'Day 1 - 3월 15일 (토)',
    sessions: [
      {
        id: 'registration-day1',
        time: '08:00',
        title: '등록 및 환영 리셉션',
        type: 'networking',
        room: '로비',
        duration: 60,
        description: '참가자 등록, 네임택 수령, 웰컴 키트 배포'
      },
      {
        id: 'opening',
        time: '09:00',
        title: '개회식 및 기조연설',
        type: 'keynote',
        speaker: 'Dr. Jean-Michel Mazer',
        speakerTitle: 'AMWC Scientific Director',
        room: '그랜드볼룸',
        duration: 30,
        description: '2025년 필러 의학의 미래 전망과 학회의 비전',
        cmeCredits: 0.5,
        isFeatured: true
      },
      {
        id: 'session1',
        time: '09:30',
        title: 'Session 1: 필러 기초 과정 - 해부학적 접근',
        type: 'session',
        speaker: 'Dr. Sung Min Park',
        speakerTitle: '서울대학교 성형외과 교수',
        room: '그랜드볼룸',
        duration: 90,
        description: '아시아인 안면 해부학의 특징과 필러 주입 시 고려사항',
        cmeCredits: 1.5,
        isFeatured: true
      },
      {
        id: 'break1',
        time: '11:00',
        title: '커피 브레이크 & 전시회',
        type: 'break',
        room: '전시홀',
        duration: 30,
        description: '스폰서 부스 방문 및 네트워킹 시간'
      },
      {
        id: 'session2',
        time: '11:30',
        title: 'Session 2: 고급 테크닉 - Cannula vs Needle',
        type: 'session',
        speaker: 'Dr. Lisa Chen',
        speakerTitle: 'Singapore General Hospital',
        room: '그랜드볼룸',
        duration: 60,
        description: '캐뉼라와 니들 각각의 장단점과 적응증',
        cmeCredits: 1.0
      },
      {
        id: 'lunch1',
        time: '12:30',
        title: '점심 & 네트워킹 런치',
        type: 'meal',
        room: '다이닝홀',
        duration: 90,
        description: '점심 식사와 함께하는 자유로운 학술 토론'
      },
      {
        id: 'session3',
        time: '14:00',
        title: 'Session 3: 합병증 관리 - 예방과 치료',
        type: 'session',
        speaker: 'Dr. Michael Rodriguez',
        speakerTitle: 'Miami Aesthetic Institute',
        room: '그랜드볼룸',
        duration: 90,
        description: '혈관 폐색, 감염, 결절 등 주요 합병증의 예방과 치료법',
        cmeCredits: 1.5,
        isFeatured: true
      },
      {
        id: 'break2',
        time: '15:30',
        title: '간식 & 전시회',
        type: 'break',
        room: '전시홀',
        duration: 30
      },
      {
        id: 'session4',
        time: '16:00',
        title: 'Session 4: 케이스 스터디 & 라이브 데모',
        type: 'workshop',
        speaker: 'Multiple Speakers',
        speakerTitle: '국내외 전문의 패널',
        room: '그랜드볼룸',
        duration: 90,
        description: '실제 케이스 분석과 라이브 시술 시연',
        cmeCredits: 1.5,
        capacity: 200
      },
      {
        id: 'dinner',
        time: '19:00',
        title: '만찬 & 어워드 세레모니',
        type: 'networking',
        room: '로열룸',
        duration: 120,
        description: '우수 회원 시상 및 네트워킹 디너'
      }
    ]
  },
  {
    date: '2025-03-16',
    day: 'Day 2 - 3월 16일 (일)',
    sessions: [
      {
        id: 'session5',
        time: '09:00',
        title: 'Session 5: 신제품 소개 & 비교 분석',
        type: 'session',
        speaker: 'Industry Speakers',
        speakerTitle: '주요 제조사 연구진',
        room: '그랜드볼룸',
        duration: 90,
        description: '2025년 출시 예정 신제품과 기존 제품 비교',
        cmeCredits: 1.5
      },
      {
        id: 'break3',
        time: '10:30',
        title: '커피 브레이크',
        type: 'break',
        room: '전시홀',
        duration: 30
      },
      {
        id: 'workshop',
        time: '11:00',
        title: 'Session 6: 핸즈온 워크샵 (소그룹)',
        type: 'workshop',
        speaker: 'Workshop Leaders',
        speakerTitle: '전문의 강사진',
        room: '워크샵실 A,B,C',
        duration: 90,
        description: '실습용 모델을 이용한 직접 실습 (사전 신청 필수)',
        cmeCredits: 1.5,
        capacity: 60,
        isFeatured: true
      },
      {
        id: 'lunch2',
        time: '12:30',
        title: '점심 & 자유 토론',
        type: 'meal',
        room: '다이닝홀',
        duration: 90,
        description: '점심과 함께하는 자유로운 Q&A 시간'
      },
      {
        id: 'session7',
        time: '14:00',
        title: 'Session 7: 미래 전망 & 최신 연구 동향',
        type: 'session',
        speaker: 'Dr. Sarah Johnson',
        speakerTitle: 'Harvard Medical School',
        room: '그랜드볼룸',
        duration: 90,
        description: '재생의학과 필러의 융합, 미래 기술 전망',
        cmeCredits: 1.5,
        isFeatured: true
      },
      {
        id: 'closing',
        time: '15:30',
        title: '폐회식 & 수료증 수여',
        type: 'keynote',
        room: '그랜드볼룸',
        duration: 30,
        description: '대회 총평 및 참석자 수료증 수여식',
        cmeCredits: 0.5
      }
    ]
  }
];

const sessionTypeConfig = {
  keynote: {
    icon: PresentationChartLineIcon,
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    label: '기조연설'
  },
  session: {
    icon: UserGroupIcon,
    color: 'bg-primary-100 text-primary-700 border-primary-200',
    label: '학술세션'
  },
  workshop: {
    icon: BeakerIcon,
    color: 'bg-green-100 text-green-700 border-green-200',
    label: '워크샵'
  },
  break: {
    icon: ClockIcon,
    color: 'bg-gray-100 text-gray-600 border-gray-200',
    label: '휴식'
  },
  meal: {
    icon: ChatBubbleLeftIcon,
    color: 'bg-orange-100 text-orange-700 border-orange-200',
    label: '식사'
  },
  networking: {
    icon: UserGroupIcon,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    label: '네트워킹'
  }
};

export default function ConferenceProgramPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const currentDayData = programData[selectedDay];
  const filteredSessions = showOnlyFeatured 
    ? currentDayData.sessions.filter(session => session.isFeatured)
    : currentDayData.sessions;

  const totalCMECredits = programData.reduce((total, day) => {
    return total + day.sessions.reduce((dayTotal, session) => {
      return dayTotal + (session.cmeCredits || 0);
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">상세 프로그램</h1>
            <p className="text-lg text-gray-600 mb-4">
              2025 춘계 학술대회 - Advanced Filler Techniques: Innovation & Safety
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                2025년 3월 15일-16일
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                서울 코엑스 그랜드볼룸
              </div>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 mr-2" />
                총 {totalCMECredits} CME 점수
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <PresentationChartLineIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">45</p>
            <p className="text-sm text-gray-500">세션</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <UserGroupIcon className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">25</p>
            <p className="text-sm text-gray-500">연자</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <BeakerIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">6</p>
            <p className="text-sm text-gray-500">핸즈온 워크샵</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <StarIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{totalCMECredits}</p>
            <p className="text-sm text-gray-500">CME 점수</p>
          </div>
        </div>

        {/* Day Navigation */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              {programData.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDay === index
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyFeatured}
                  onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">추천 세션만 보기</span>
              </label>
            </div>
          </div>
        </div>

        {/* Program Schedule */}
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6">
            <h2 className="text-2xl font-bold mb-2">{currentDayData.day}</h2>
            <p className="opacity-90">
              {filteredSessions.length}개 세션 · 
              총 {filteredSessions.reduce((total, session) => total + (session.cmeCredits || 0), 0)} CME 점수
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {filteredSessions.map((session, index) => {
                const config = sessionTypeConfig[session.type];
                const IconComponent = config.icon;

                return (
                  <div
                    key={session.id}
                    className={`border-2 rounded-xl p-6 transition-all hover:shadow-medium ${
                      session.isFeatured ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row gap-4">
                      {/* Time */}
                      <div className="lg:w-20 flex-shrink-0">
                        <div className="text-lg font-bold text-gray-900">
                          {session.time}
                        </div>
                        <div className="text-sm text-gray-500">
                          {session.duration}분
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}>
                            <IconComponent className="w-4 h-4 mr-1" />
                            {config.label}
                          </span>
                          
                          {session.isFeatured && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                              <StarIcon className="w-4 h-4 mr-1" />
                              추천
                            </span>
                          )}
                          
                          {session.cmeCredits && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                              <CheckCircleIcon className="w-4 h-4 mr-1" />
                              {session.cmeCredits} CME
                            </span>
                          )}
                          
                          {session.capacity && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                              정원 {session.capacity}명
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {session.title}
                        </h3>

                        {session.speaker && (
                          <div className="mb-3">
                            <p className="font-medium text-primary-600">{session.speaker}</p>
                            {session.speakerTitle && (
                              <p className="text-sm text-gray-600">{session.speakerTitle}</p>
                            )}
                          </div>
                        )}

                        {session.description && (
                          <p className="text-gray-600 mb-3">{session.description}</p>
                        )}

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          {session.room && (
                            <div className="flex items-center">
                              <MapPinIcon className="w-4 h-4 mr-1" />
                              {session.room}
                            </div>
                          )}
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {session.time} - {
                              new Date(`2000-01-01T${session.time}`).getTime() + session.duration * 60000 > 0 
                                ? new Intl.DateTimeFormat('ko-KR', { 
                                    hour: '2-digit', 
                                    minute: '2-digit', 
                                    hour12: false 
                                  }).format(new Date(`2000-01-01T${session.time}`).getTime() + session.duration * 60000)
                                : ''
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Download & Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            프로그램 PDF 다운로드
          </button>
          <a
            href="/conference/registration"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            지금 등록하기
          </a>
        </div>

        {/* Important Notes */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">중요 안내사항</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• 핸즈온 워크샵은 사전 신청이 필수이며, 선착순 마감됩니다.</li>
            <li>• CME 점수 취득을 위해서는 70% 이상 세션 참석이 필요합니다.</li>
            <li>• 프로그램 일정은 연자 사정에 따라 변경될 수 있습니다.</li>
            <li>• 점심 및 만찬은 별도 신청이 필요합니다 (등록 시 선택 가능).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}