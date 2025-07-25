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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-lg shadow-cyan-400/50"></span>
              2025년 춘계 학술대회 사전등록 중
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                대한민국 필러 의학의
              </span>
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mt-2">
                선도 학회
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
              필러 시술 전문 의료진을 위한 최고 수준의 학술대회, 
              <span className="block mt-2">교육 프로그램, 그리고 네트워킹 플랫폼을 제공합니다.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Link
                href="/conference/registration"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                학술대회 등록하기
                <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <PlayCircleIcon className="mr-3 h-6 w-6" />
                학회 소개 영상
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-white/80 justify-center lg:justify-start">
              <div className="flex items-center group">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium group-hover:text-white transition-colors">보건복지부 인증</span>
              </div>
              <div className="flex items-center group">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium group-hover:text-white transition-colors">대한의사협회 연수평점</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="의료진 학술대회"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Premium Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-2">2025 춘계 학술대회</p>
                      <p className="text-sm text-slate-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        2025년 3월 15-16일 | 코엑스 그랜드볼룸
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRightIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-white group-hover:text-cyan-300 transition-colors">{stat.value}</span>
                  <span className="text-xl text-blue-200">{stat.unit}</span>
                </div>
                <p className="text-sm text-blue-100 font-medium">{stat.label}</p>
              </div>
              <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}