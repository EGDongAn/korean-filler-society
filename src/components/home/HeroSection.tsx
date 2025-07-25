'use client';

import Link from 'next/link';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

const stats = [
  { label: '회원 수', value: '2,500+', unit: '명' },
  { label: '연간 학술대회', value: '12', unit: '회' },
  { label: '교육 시간', value: '180+', unit: '시간' },
  { label: '파트너사', value: '50+', unit: '개' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              2025년 춘계 학술대회 사전등록 중
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              대한민국 필러 의학의
              <span className="block text-primary-600 mt-2">선도 학회</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              필러 시술 전문 의료진을 위한 최고 수준의 학술대회, 
              교육 프로그램, 그리고 네트워킹 플랫폼을 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/conference/registration"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
              >
                학술대회 등록하기
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all">
                <PlayCircleIcon className="mr-2 h-5 w-5" />
                학회 소개 영상
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-500 justify-center lg:justify-start">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                보건복지부 인증
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                대한의사협회 연수평점
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="의료진 학술대회"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                <p className="text-sm font-semibold text-gray-900 mb-1">2025 춘계 학술대회</p>
                <p className="text-xs text-gray-600">2025년 3월 15-16일 | 코엑스 그랜드볼룸</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-lg text-gray-600">{stat.unit}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}