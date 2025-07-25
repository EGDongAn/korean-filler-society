'use client';

import Link from 'next/link';
import { 
  AcademicCapIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  TagIcon,
  VideoCameraIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: AcademicCapIcon,
    title: '학술대회 할인',
    description: '정회원 30% 할인, 준회원 20% 할인 혜택',
    color: 'text-primary-600 bg-primary-100',
  },
  {
    icon: DocumentTextIcon,
    title: '학술자료 무료 이용',
    description: '강의록, 가이드라인 무제한 다운로드',
    color: 'text-secondary-600 bg-secondary-100',
  },
  {
    icon: VideoCameraIcon,
    title: '온라인 강의 무료',
    description: '프리미엄 교육 콘텐츠 365일 무제한 시청',
    color: 'text-accent-blue bg-blue-100',
  },
  {
    icon: UserGroupIcon,
    title: '네트워킹 기회',
    description: '전문가 그룹 참여 및 스터디 모임 지원',
    color: 'text-accent-green bg-green-100',
  },
  {
    icon: TagIcon,
    title: '파트너사 할인',
    description: '의료기기, 제품 구매 시 특별 할인',
    color: 'text-accent-yellow bg-yellow-100',
  },
  {
    icon: GiftIcon,
    title: '회원 전용 혜택',
    description: '학회지 발간, 연구 지원금, 해외 연수 기회',
    color: 'text-purple-600 bg-purple-100',
  },
];

export default function MemberBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            회원 혜택
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대한필러학회 회원이 되시면 다양한 혜택을 누리실 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${benefit.color} mb-4`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            지금 회원이 되어 혜택을 누리세요
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            연회비 납부 시 모든 혜택을 1년간 이용하실 수 있습니다.
            신규 가입 회원에게는 추가 할인 혜택을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/member/join"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all"
            >
              회원가입 하기
            </Link>
            <Link
              href="/member/benefits"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-all"
            >
              자세한 혜택 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}