'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  TagIcon,
  CalendarIcon,
  EyeIcon,
  MapPinIcon as PinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface Notice {
  id: number;
  title: string;
  content: string;
  category: '일반' | '학술대회' | '교육' | '긴급';
  author: string;
  date: string;
  views: number;
  isPinned: boolean;
  isNew: boolean;
}

const mockNotices: Notice[] = [
  {
    id: 1,
    title: '2025년 춘계 학술대회 사전등록 안내',
    content: '2025년 3월 15-16일 개최되는 춘계 학술대회의 사전등록이 시작되었습니다. Early Bird 할인 혜택을 놓치지 마세요.',
    category: '학술대회',
    author: '사무국',
    date: '2024-12-15',
    views: 1248,
    isPinned: true,
    isNew: true,
  },
  {
    id: 2,  
    title: '필러 안전성 가이드라인 v3.0 업데이트',
    content: '국제 표준에 맞춘 새로운 안전성 가이드라인이 업데이트되었습니다. 모든 회원은 필히 확인해 주시기 바랍니다.',
    category: '긴급',
    author: '학술위원회',
    date: '2024-12-12',
    views: 892,
    isPinned: true,
    isNew: true,
  },
  {
    id: 3,
    title: '2024년도 우수 회원 시상식 개최',
    content: '올해 학회 발전에 기여한 우수 회원들을 대상으로 시상식을 개최합니다.',
    category: '일반',
    author: '사무국',
    date: '2024-12-10',
    views: 567,
    isPinned: false,
    isNew: false,
  },
  {
    id: 4,
    title: '온라인 강의 플랫폼 업그레이드 완료',
    content: 'KFS Academy 플랫폼이 업그레이드되어 더욱 향상된 학습 환경을 제공합니다.',
    category: '교육',
    author: '교육위원회',
    date: '2024-12-08',
    views: 445,
    isPinned: false,
    isNew: false,
  },
  {
    id: 5,
    title: '회원 정보 업데이트 요청',
    content: '정확한 회원 서비스 제공을 위해 회원 정보 업데이트를 부탁드립니다.',
    category: '일반',
    author: '사무국',
    date: '2024-12-05',
    views: 334,
    isPinned: false,
    isNew: false,
  },
];

const categories = ['전체', '일반', '학술대회', '교육', '긴급'];

const categoryColors = {
  '일반': 'bg-gray-100 text-gray-700',
  '학술대회': 'bg-primary-100 text-primary-700',
  '교육': 'bg-secondary-100 text-secondary-700',
  '긴급': 'bg-red-100 text-red-700',
};

export default function NoticePage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredNotices = mockNotices.filter(notice => {
    const matchesCategory = selectedCategory === '전체' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">공지사항</h1>
          <p className="text-gray-600">대한필러학회의 최신 소식과 중요한 공지사항을 확인하세요</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="제목이나 내용으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Notice List */}
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
              <div className="col-span-1">구분</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2">작성자</div>
              <div className="col-span-2">작성일</div>
              <div className="col-span-1">조회</div>
            </div>
          </div>

          {/* Notice Items */}
          <div className="divide-y divide-gray-200">
            {currentNotices.map((notice) => (
              <Link 
                key={notice.id} 
                href={`/community/notice/${notice.id}`}
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Category */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-1">
                      {notice.isPinned && (
                        <PinIcon className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        categoryColors[notice.category]
                      }`}>
                        <TagIcon className="w-3 h-3 mr-1" />
                        {notice.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-span-6">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-medium ${
                        notice.isPinned ? 'text-red-600' : 'text-gray-900'
                      } group-hover:text-primary-600`}>
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {notice.content}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">{notice.author}</p>
                  </div>

                  {/* Date */}
                  <div className="col-span-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(notice.date).toLocaleDateString('ko-KR')}
                    </div>
                  </div>

                  {/* Views */}
                  <div className="col-span-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      {notice.views}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {currentNotices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 text-center">
          <Link
            href="/member/mypage"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            마이페이지에서 알림 설정하기
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}