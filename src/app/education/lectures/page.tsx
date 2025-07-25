'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  BookmarkIcon,
  CheckCircleIcon,
  FireIcon,
  EyeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { PlayIcon as PlaySolidIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';

interface Lecture {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    hospital: string;
    avatar: string;
  };
  duration: number; // minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  views: number;
  rating: number;
  ratingCount: number;
  thumbnail: string;
  price: number;
  isNew: boolean;
  isPopular: boolean;
  isFree: boolean;
  publishDate: string;
  cmeCredits: number;
  enrolledCount: number;
  completionRate: number;
  chapters: number;
}

const mockLectures: Lecture[] = [
  {
    id: 1,
    title: '필러 시술의 기초: 해부학적 접근법',
    description: '안전하고 효과적인 필러 시술을 위한 필수 해부학적 지식을 체계적으로 학습합니다. 혈관, 신경 분포를 중심으로 한 실무 중심의 교육입니다.',
    instructor: {
      name: '박민수',
      title: '성형외과 전문의',
      hospital: '서울대학교병원',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
    },
    duration: 120,
    level: 'beginner',
    category: '기초 과정',
    tags: ['해부학', '안전성', '기초'],
    views: 2847,
    rating: 4.8,
    ratingCount: 156,
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    price: 150000,
    isNew: true,
    isPopular: true,
    isFree: false,
    publishDate: '2024-12-10',
    cmeCredits: 2,
    enrolledCount: 456,
    completionRate: 89,
    chapters: 8
  },
  {
    id: 2,
    title: '고급 필러 테크닉: 자연스러운 볼륨 증강',
    description: '자연스러운 결과를 위한 고급 주입 기법과 볼륨 배치 전략을 실제 케이스를 통해 상세히 설명합니다.',
    instructor: {
      name: '김지영',
      title: '피부과 전문의',
      hospital: '강남 JY 클리닉',
      avatar: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=100&h=100&fit=crop&crop=face'
    },
    duration: 180,
    level: 'advanced',
    category: '심화 과정',
    tags: ['고급기법', '볼륨증강', '자연스러움'],
    views: 1923,
    rating: 4.9,
    ratingCount: 98,
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
    price: 250000,
    isNew: false,
    isPopular: true,
    isFree: false,
    publishDate: '2024-11-25',
    cmeCredits: 3,
    enrolledCount: 298,
    completionRate: 92,
    chapters: 12
  },
  {
    id: 3,
    title: '필러 합병증 관리: 응급상황 대처법',
    description: '필러 시술 중 발생할 수 있는 합병증의 예방과 응급상황 발생 시 즉각적인 대처 방법을 실습 중심으로 교육합니다.',
    instructor: {
      name: '이준호',
      title: '성형외과 원장',
      hospital: '청담 미학 클리닉',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face'
    },
    duration: 90,
    level: 'intermediate',
    category: '안전성',
    tags: ['합병증', '응급처치', '안전'],
    views: 3156,
    rating: 4.7,
    ratingCount: 234,
    thumbnail: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop',
    price: 0,
    isNew: false,
    isPopular: false,
    isFree: true,
    publishDate: '2024-10-15',
    cmeCredits: 1.5,
    enrolledCount: 1247,
    completionRate: 85,
    chapters: 6
  },
  {
    id: 4,
    title: '캐뉼라 vs 니들: 기법별 비교 분석',
    description: '캐뉼라와 니들 각각의 장단점과 적응증을 비교 분석하고, 상황별 최적의 선택 기준을 제시합니다.',
    instructor: {
      name: '최윤정',
      title: '피부과 부원장',
      hospital: '연세의료원',
      avatar: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=100&h=100&fit=crop&crop=face'
    },
    duration: 75,
    level: 'intermediate',
    category: '시술 기법',
    tags: ['캐뉼라', '니들', '비교분석'],
    views: 1678,
    rating: 4.6,
    ratingCount: 87,
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    price: 80000,
    isNew: true,
    isPopular: false,
    isFree: false,
    publishDate: '2024-12-01',
    cmeCredits: 1,
    enrolledCount: 178,
    completionRate: 91,
    chapters: 5
  },
  {
    id: 5,
    title: '환자 상담 및 동의서 작성 가이드',
    description: '효과적인 환자 상담 기법과 법적 문제를 예방하는 동의서 작성 방법을 실제 사례를 통해 학습합니다.',
    instructor: {
      name: '정태호',
      title: '법무팀 변호사',
      hospital: '대한의사협회',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
    },
    duration: 60,
    level: 'beginner',
    category: '법무/윤리',
    tags: ['상담기법', '동의서', '법무'],
    views: 956,
    rating: 4.4,
    ratingCount: 64,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    price: 0,
    isNew: false,
    isPopular: false,
    isFree: true,
    publishDate: '2024-09-20',
    cmeCredits: 1,
    enrolledCount: 567,
    completionRate: 78,
    chapters: 4
  }
];

const categories = ['전체', '기초 과정', '심화 과정', '안전성', '시술 기법', '법무/윤리'];
const levels = ['전체', 'beginner', 'intermediate', 'advanced'];

export default function LecturesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedLevel, setSelectedLevel] = useState('전체');
  const [showOnlyFree, setShowOnlyFree] = useState(false);
  const [bookmarkedLectures, setBookmarkedLectures] = useState<number[]>([]);

  const filteredLectures = mockLectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '전체' || lecture.category === selectedCategory;
    const matchesLevel = selectedLevel === '전체' || lecture.level === selectedLevel;
    const matchesFree = !showOnlyFree || lecture.isFree;

    return matchesSearch && matchesCategory && matchesLevel && matchesFree;
  });

  const handleBookmark = (lectureId: number) => {
    setBookmarkedLectures(prev => 
      prev.includes(lectureId)
        ? prev.filter(id => id !== lectureId)
        : [...prev, lectureId]
    );
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return '초급';
      case 'intermediate': return '중급';
      case 'advanced': return '고급';
      default: return level;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">온라인 강의</h1>
            <p className="text-lg text-gray-600 mb-4">
              언제 어디서나 학습할 수 있는 전문가 강의
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                총 {mockLectures.length}개 강의
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                {mockLectures.reduce((sum, lecture) => sum + lecture.enrolledCount, 0).toLocaleString()}명 수강
              </div>
              <div className="flex items-center">
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                최대 {Math.max(...mockLectures.map(l => l.cmeCredits))} CME 점수
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <PlayIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{mockLectures.length}</p>
            <p className="text-sm text-gray-500">총 강의</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <ClockIcon className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(mockLectures.reduce((sum, lecture) => sum + lecture.duration, 0) / 60)}
            </p>
            <p className="text-sm text-gray-500">총 시간</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <StarIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {(mockLectures.reduce((sum, lecture) => sum + lecture.rating, 0) / mockLectures.length).toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">평균 평점</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <CheckCircleIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(mockLectures.reduce((sum, lecture) => sum + lecture.completionRate, 0) / mockLectures.length)}%
            </p>
            <p className="text-sm text-gray-500">완주율</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="강의명, 내용, 태그로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === '전체' ? '전체' : getLevelText(level)}
                  </option>
                ))}
              </select>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyFree}
                  onChange={(e) => setShowOnlyFree(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">무료 강의만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Lecture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <div key={lecture.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
              <div className="relative">
                <img
                  src={lecture.thumbnail}
                  alt={lecture.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link
                    href={`/education/lectures/${lecture.id}`}
                    className="flex items-center justify-center w-16 h-16 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <PlaySolidIcon className="w-8 h-8 text-primary-600 ml-1" />
                  </Link>
                </div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  {lecture.isNew && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      NEW
                    </span>
                  )}
                  {lecture.isPopular && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      <FireIcon className="w-3 h-3 mr-1" />
                      인기
                    </span>
                  )}
                  {lecture.isFree && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      무료
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleBookmark(lecture.id)}
                    className="flex items-center justify-center w-8 h-8 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    {bookmarkedLectures.includes(lecture.id) ? (
                      <BookmarkSolidIcon className="w-5 h-5 text-primary-600" />
                    ) : (
                      <BookmarkIcon className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded bg-black/70 text-white text-sm">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {Math.floor(lecture.duration / 60)}h {lecture.duration % 60}m
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {lecture.category}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lecture.level)}`}>
                    {getLevelText(lecture.level)}
                  </span>
                </div>

                <Link href={`/education/lectures/${lecture.id}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                    {lecture.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {lecture.description}
                </p>

                <div className="flex items-center mb-3">
                  <img
                    src={lecture.instructor.avatar}
                    alt={lecture.instructor.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{lecture.instructor.name}</p>
                    <p className="text-xs text-gray-500">{lecture.instructor.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 mr-1 text-yellow-400" />
                    {lecture.rating} ({lecture.ratingCount})
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    {lecture.views.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(lecture.publishDate).toLocaleDateString('ko-KR')}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary-600">
                      {lecture.isFree ? '무료' : `₩${lecture.price.toLocaleString()}`}
                    </span>
                    {lecture.cmeCredits > 0 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-700">
                        {lecture.cmeCredits} CME
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={`/education/lectures/${lecture.id}`}
                    className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition-colors"
                  >
                    수강하기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLectures.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <PlayIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}

        {/* Learning Path CTA */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">체계적인 학습을 원하시나요?</h3>
          <p className="mb-4">단계별 학습 과정으로 전문성을 키워보세요</p>
          <Link
            href="/education/courses"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            온라인 코스 보기
          </Link>
        </div>
      </div>
    </div>
  );
}