'use client';

import Link from 'next/link';
import { PlayIcon, ClockIcon, UserIcon, StarIcon } from '@heroicons/react/24/solid';

const lectures = [
  {
    id: 1,
    title: '안전한 필러 시술을 위한 해부학적 이해',
    instructor: '김민수 교수',
    hospital: '서울대학교병원 성형외과',
    duration: '45분',
    rating: 4.9,
    views: 1234,
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isPremium: false,
  },
  {
    id: 2,
    title: '필러 합병증의 예방과 관리: 실전 가이드',
    instructor: '박지영 원장',
    hospital: '강남 JY 피부과',
    duration: '60분',
    rating: 4.8,
    views: 892,
    thumbnail: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isPremium: true,
  },
  {
    id: 3,
    title: '코 필러 시술의 A to Z',
    instructor: '이준호 원장',
    hospital: '청담 미학 클리닉',
    duration: '38분',
    rating: 4.7,
    views: 756,
    thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isNew: false,
    isPremium: false,
  },
  {
    id: 4,
    title: '최신 필러 제품 비교 분석 및 선택 가이드',
    instructor: '정수진 교수',
    hospital: '연세대학교 세브란스병원',
    duration: '52분',
    rating: 4.9,
    views: 1567,
    thumbnail: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isNew: true,
    isPremium: true,
  },
];

export default function FeaturedLectures() {
  return (
    <section className="py-20 bg-background-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            추천 교육 강의
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            국내 최고 전문가들의 필러 시술 노하우를 온라인으로 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={lecture.thumbnail}
                  alt={lecture.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {lecture.isNew && (
                    <span className="px-2 py-1 bg-accent-green text-white text-xs font-medium rounded">
                      NEW
                    </span>
                  )}
                  {lecture.isPremium && (
                    <span className="px-2 py-1 bg-accent-yellow text-white text-xs font-medium rounded">
                      PREMIUM
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {lecture.title}
                </h3>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">{lecture.instructor}</p>
                  <p className="text-xs text-gray-500">{lecture.hospital}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {lecture.duration}
                    </span>
                    <span className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {lecture.views.toLocaleString()}
                    </span>
                  </div>
                  <span className="flex items-center text-accent-yellow">
                    <StarIcon className="w-4 h-4 mr-1" />
                    {lecture.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/education/online"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all"
          >
            모든 강의 보기
          </Link>
        </div>
      </div>
    </section>
  );
}