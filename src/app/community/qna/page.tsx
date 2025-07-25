'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  HandThumbUpIcon as ThumbsUpIcon,
  UserCircleIcon,
  PlusIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckSolidIcon } from '@heroicons/react/24/solid';

interface QnAItem {
  id: number;
  title: string;
  question: string;
  category: string;
  author: {
    name: string;
    role: string;
    isAnonymous?: boolean;
  };
  date: string;
  views: number;
  likes: number;
  answers: number;
  isAnswered: boolean;
  isHot: boolean;
  hasExpertAnswer: boolean;
}

const mockQnAs: QnAItem[] = [
  {
    id: 1,
    title: '필러 시술 후 붓기가 2주째 지속되고 있습니다',
    question: '코 필러 시술을 받은 지 2주가 지났는데 아직도 붓기가 가라앉지 않고 있습니다. 정상적인 반응인지 궁금합니다.',
    category: '부작용/합병증',
    author: {
      name: '익명1234',
      role: '일반회원',
      isAnonymous: true,
    },
    date: '2024-12-15',
    views: 243,
    likes: 12,
    answers: 3,
    isAnswered: true,
    isHot: true,
    hasExpertAnswer: true,
  },
  {
    id: 2,
    title: '히알루론산 필러의 종류별 차이점이 궁금합니다',
    question: '시중에 나와있는 히알루론산 필러들의 차이점과 각각의 장단점에 대해 알고 싶습니다.',
    category: '제품 문의',
    author: {
      name: '김철수',
      role: '의사회원',
    },
    date: '2024-12-14',
    views: 187,
    likes: 8,
    answers: 5,
    isAnswered: true,
    isHot: false,
    hasExpertAnswer: true,
  },
  {
    id: 3,
    title: '턱 필러 시술 시 주의사항이 있나요?',
    question: '턱 라인 개선을 위한 필러 시술을 계획 중인데, 특별히 주의해야 할 사항들이 있을까요?',
    category: '시술 문의',
    author: {
      name: '이영희',
      role: '일반회원',
    },
    date: '2024-12-13',
    views: 156,
    likes: 6,
    answers: 2,
    isAnswered: false,
    isHot: false,
    hasExpertAnswer: false,
  },
  {
    id: 4,
    title: '필러 용해술에 대해서 알고 싶습니다',
    question: '만약 필러 시술 결과가 마음에 들지 않을 경우 용해술을 통해 제거할 수 있는지 궁금합니다.',
    category: '시술 문의',
    author: {
      name: '박민지',
      role: '일반회원',
    },
    date: '2024-12-12',
    views: 134,
    likes: 4,
    answers: 1,
    isAnswered: true,
    isHot: false,
    hasExpertAnswer: true,
  },
];

const categories = ['전체', '시술 문의', '부작용/합병증', '제품 문의', '비용 문의', '기타'];

export default function QnAPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'unanswered'>('latest');

  const filteredQnAs = mockQnAs.filter(qna => {
    const matchesCategory = selectedCategory === '전체' || qna.category === selectedCategory;
    const matchesSearch = qna.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         qna.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedQnAs = [...filteredQnAs].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'unanswered':
        return a.isAnswered === b.isAnswered ? 0 : a.isAnswered ? 1 : -1;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Q&A</h1>
              <p className="text-gray-600">필러 시술에 대한 궁금한 점을 전문의에게 물어보세요</p>
            </div>
            <Link
              href="/community/qna/ask"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              질문하기
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex gap-4 flex-1">
              <div className="relative flex-1 lg:max-w-80">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="질문 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="latest">최신순</option>
                <option value="popular">인기순</option>
                <option value="unanswered">미답변순</option>
              </select>
            </div>
          </div>
        </div>

        {/* QnA Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <QuestionMarkCircleIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-gray-500">총 질문</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <CheckCircleIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">1,089</p>
            <p className="text-sm text-gray-500">답변 완료</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <ClockIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">158</p>
            <p className="text-sm text-gray-500">답변 대기</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <FireIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">87%</p>
            <p className="text-sm text-gray-500">답변률</p>
          </div>
        </div>

        {/* QnA List */}
        <div className="bg-white rounded-xl shadow-soft">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-xl">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
              <div className="col-span-1">상태</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2">작성자</div>
              <div className="col-span-2">작성일</div>
              <div className="col-span-1">답변</div>
            </div>
          </div>

          {/* QnA Items */}
          <div className="divide-y divide-gray-200">
            {sortedQnAs.map((qna) => (
              <Link 
                key={qna.id} 
                href={`/community/qna/${qna.id}`}
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Status */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-1">
                      {qna.isHot && (
                        <FireIcon className="w-4 h-4 text-red-500" />
                      )}
                      {qna.isAnswered ? (
                        <CheckSolidIcon className="w-5 h-5 text-green-500" />
                      ) : (
                        <ClockIcon className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-span-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                        {qna.category}
                      </span>
                      {qna.hasExpertAnswer && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          전문의 답변
                        </span>
                      )}
                      {qna.isHot && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                          HOT
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 hover:text-primary-600 line-clamp-1">
                      {qna.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {qna.question}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <UserCircleIcon className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {qna.author.isAnonymous ? qna.author.name : qna.author.name}
                        </p>
                        <p className="text-xs text-gray-500">{qna.author.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">
                      {new Date(qna.date).toLocaleDateString('ko-KR')}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <span>조회 {qna.views}</span>
                      <span>·</span>
                      <span className="flex items-center">
                        <ThumbsUpIcon className="w-3 h-3 mr-1" />
                        {qna.likes}
                      </span>
                    </div>
                  </div>

                  {/* Answers */}
                  <div className="col-span-1">
                    <div className="flex items-center justify-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        qna.answers > 0 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {qna.answers}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {sortedQnAs.length === 0 && (
            <div className="text-center py-12">
              <QuestionMarkCircleIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">검색 결과가 없습니다.</p>
              <Link
                href="/community/qna/ask" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                첫 번째 질문을 작성해보세요 →
              </Link>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">자주 묻는 질문 (FAQ)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">필러 시술 후 언제부터 운동할 수 있나요?</h3>
              <p className="text-sm text-gray-600">일반적으로 시술 후 24-48시간 후부터 가벼운 운동이 가능합니다.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">필러 효과는 얼마나 지속되나요?</h3>
              <p className="text-sm text-gray-600">제품과 부위에 따라 다르지만 보통 6-18개월 정도 지속됩니다.</p>
            </div>
          </div>
        </div>

        {/* Mobile Ask Button */}
        <div className="fixed bottom-6 right-6 sm:hidden">
          <Link
            href="/community/qna/ask"
            className="flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            <PlusIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}