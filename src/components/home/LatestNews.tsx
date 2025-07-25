'use client';

import Link from 'next/link';
import { CalendarIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const newsItems = [
  {
    id: 1,
    category: '학술대회',
    title: '2025 춘계 학술대회 초록 접수 시작',
    excerpt: '2025년 춘계 학술대회의 초록 접수가 시작되었습니다. 마감일은 2025년 1월 31일까지이며, 우수 초록에는 시상이 있을 예정입니다.',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    category: '교육',
    title: '필러 합병증 관리 온라인 강의 개설',
    excerpt: '필러 시술 후 발생할 수 있는 합병증의 예방과 관리에 대한 온라인 강의가 새롭게 개설되었습니다. 회원 무료 수강 가능합니다.',
    date: '2024-12-10',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    category: '공지사항',
    title: '2025년도 정기 회원 갱신 안내',
    excerpt: '2025년도 정기 회원 갱신이 시작되었습니다. 조기 갱신 시 10% 할인 혜택을 제공하오니 많은 참여 부탁드립니다.',
    date: '2024-12-05',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
];

const categoryColors = {
  '학술대회': 'bg-primary-100 text-primary-700',
  '교육': 'bg-secondary-100 text-secondary-700',
  '공지사항': 'bg-neutral-100 text-neutral-700',
};

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              최신 소식
            </h2>
            <p className="text-lg text-gray-600">
              대한필러학회의 새로운 소식을 전해드립니다
            </p>
          </div>
          <Link
            href="/community/notice"
            className="hidden sm:inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            전체보기
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                    <TagIcon className="w-3 h-3 mr-1" />
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('ko-KR')}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <Link
                  href={`/community/notice/${item.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  자세히 보기
                  <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/community/notice"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            전체보기
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}