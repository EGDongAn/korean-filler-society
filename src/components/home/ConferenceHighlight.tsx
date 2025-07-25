'use client';

import Link from 'next/link';
import { CalendarIcon, MapPinIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const upcomingConference = {
  title: '2025 대한필러학회 춘계 학술대회',
  subtitle: 'Advanced Filler Techniques: Innovation & Safety',
  date: '2025년 3월 15일(토) - 16일(일)',
  location: '서울 코엑스 그랜드볼룸',
  earlyBirdDeadline: '2025년 2월 15일',
  speakers: 45,
  sessions: 12,
  workshops: 8,
  highlights: [
    '최신 필러 시술 테크닉 라이브 데모',
    '합병증 예방 및 관리 심포지엄',
    '글로벌 연자 초청 특별 세션',
    '실습 위주 핸즈온 워크샵',
  ],
};

export default function ConferenceHighlight() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            다가오는 학술대회
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            국내외 최고의 전문가들과 함께하는 필러 의학의 최신 지견을 만나보세요
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-large overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Conference Info */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
                <ClockIcon className="w-4 h-4 mr-1" />
                Early Bird 등록 마감 D-30
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {upcomingConference.title}
              </h3>
              <p className="text-lg text-primary-600 font-medium mb-6">
                {upcomingConference.subtitle}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{upcomingConference.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{upcomingConference.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="w-5 h-5 mr-3 text-gray-400" />
                  <span>연자 {upcomingConference.speakers}명 | 세션 {upcomingConference.sessions}개 | 워크샵 {upcomingConference.workshops}개</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">주요 프로그램</h4>
                <ul className="space-y-2">
                  {upcomingConference.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/conference/registration"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all"
                >
                  사전등록 하기
                </Link>
                <Link
                  href="/conference/program"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all"
                >
                  프로그램 보기
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative h-full min-h-[400px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="학술대회 현장"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 grid grid-cols-3 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-xs text-gray-600">예상 참가자</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-gray-900">20+</p>
                  <p className="text-xs text-gray-600">해외 연자</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-gray-900">12점</p>
                  <p className="text-xs text-gray-600">연수평점</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}