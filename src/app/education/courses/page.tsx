'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  PlayIcon,
  CheckCircleIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    hospital: string;
    avatar: string;
  };
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // total hours
  lectures: number;
  enrolled: number;
  rating: number;
  ratingCount: number;
  price: number;
  originalPrice?: number;
  isPopular: boolean;
  isNew: boolean;
  isCertified: boolean;
  category: string;
  skills: string[];
  thumbnail: string;
  previewVideo?: string;
  completionRate: number;
  cmeCredits: number;
  startDate?: string;
  endDate?: string;
  syllabus: {
    week: number;
    title: string;
    lectures: number;
    duration: number;
  }[];
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: '필러 시술 완전 정복 코스',
    subtitle: '기초부터 고급까지 단계별 마스터',
    description: '필러 시술의 기초 이론부터 고급 테크닉까지 체계적으로 학습할 수 있는 종합 과정입니다. 실제 케이스를 통한 실습과 합병증 관리까지 포함되어 있습니다.',
    instructor: {
      name: '박민수',
      title: '성형외과 전문의',
      hospital: '서울대학교병원',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
    },
    level: 'beginner',
    duration: 20,
    lectures: 15,
    enrolled: 847,
    rating: 4.9,
    ratingCount: 156,
    price: 590000,
    originalPrice: 790000,
    isPopular: true,
    isNew: false,
    isCertified: true,
    category: '종합 과정',
    skills: ['해부학', '주입기법', '합병증관리', '환자상담'],
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=300&fit=crop',
    completionRate: 94,
    cmeCredits: 15,
    startDate: '2025-01-15',
    endDate: '2025-03-15',
    syllabus: [
      { week: 1, title: '필러의 기초 이론과 해부학', lectures: 3, duration: 3 },
      { week: 2, title: '안전한 주입 기법', lectures: 3, duration: 4 },
      { week: 3, title: '부위별 시술법', lectures: 3, duration: 4 },
      { week: 4, title: '고급 테크닉', lectures: 3, duration: 5 },
      { week: 5, title: '합병증 관리', lectures: 3, duration: 4 }
    ]
  },
  {
    id: 2,
    title: '합병증 관리 전문가 과정',
    subtitle: '응급상황 대처와 예방법',
    description: '필러 시술 시 발생할 수 있는 다양한 합병증의 예방과 치료에 특화된 전문 과정입니다. 실제 응급상황 시뮬레이션을 통한 실무 교육을 제공합니다.',
    instructor: {
      name: '김지영',
      title: '피부과 전문의',
      hospital: '강남 JY 클리닉',
      avatar: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=100&h=100&fit=crop&crop=face'
    },
    level: 'advanced',
    duration: 12,
    lectures: 10,
    enrolled: 298,
    rating: 4.8,
    ratingCount: 87,
    price: 450000,
    isPopular: false,
    isNew: true,
    isCertified: true,
    category: '전문 과정',
    skills: ['혈관합병증', '응급처치', '예방프로토콜', '법적대응'],
    thumbnail: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=500&h=300&fit=crop',
    completionRate: 89,
    cmeCredits: 10,
    startDate: '2025-02-01',
    endDate: '2025-03-01',
    syllabus: [
      { week: 1, title: '합병증의 이해와 분류', lectures: 2, duration: 2.5 },
      { week: 2, title: '혈관 관련 합병증', lectures: 2, duration: 3 },
      { week: 3, title: '감염과 알레르기 반응', lectures: 2, duration: 2.5 },
      { week: 4, title: '응급 대처 프로토콜', lectures: 2, duration: 2 },
      { week: 5, title: '법적 대응과 예방', lectures: 2, duration: 2 }
    ]
  },
  {
    id: 3,
    title: '아시아인 특화 필러 테크닉',
    subtitle: '동양인 얼굴 특성에 맞춘 시술법',
    description: '아시아인의 독특한 안면 해부학적 특징을 고려한 맞춤형 필러 시술법을 학습합니다. 서구인과 다른 접근법과 주의사항을 중점적으로 다룹니다.',
    instructor: {
      name: '이준호',
      title: '성형외과 원장',
      hospital: '청담 미학 클리닉',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face'
    },
    level: 'intermediate',
    duration: 8,
    lectures: 8,
    enrolled: 423,
    rating: 4.7,
    ratingCount: 112,
    price: 280000,
    isPopular: true,
    isNew: false,
    isCertified: false,
    category: '특화 과정',
    skills: ['아시아인해부학', '민족별차이', '문화적고려', '자연스러움'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
    completionRate: 91,
    cmeCredits: 6,
    startDate: '2025-01-20',
    endDate: '2025-02-20',
    syllabus: [
      { week: 1, title: '아시아인 안면 해부학', lectures: 2, duration: 2 },
      { week: 2, title: '민족별 특성 분석', lectures: 2, duration: 2 },
      { week: 3, title: '자연스러운 볼륨 연출', lectures: 2, duration: 2 },
      { week: 4, title: '문화적 미적 기준', lectures: 2, duration: 2 }
    ]
  }
];

const categories = ['전체', '종합 과정', '전문 과정', '특화 과정'];
const levels = ['전체', 'beginner', 'intermediate', 'advanced'];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedLevel, setSelectedLevel] = useState('전체');
  const [showOnlyCertified, setShowOnlyCertified] = useState(false);

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '전체' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === '전체' || course.level === selectedLevel;
    const matchesCertified = !showOnlyCertified || course.isCertified;

    return matchesSearch && matchesCategory && matchesLevel && matchesCertified;
  });

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">온라인 코스</h1>
            <p className="text-lg text-gray-600 mb-4">
              체계적인 커리큘럼으로 전문성을 쌓아가세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <BookOpenIcon className="w-5 h-5 mr-2" />
                총 {mockCourses.length}개 코스
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                {mockCourses.reduce((sum, course) => sum + course.enrolled, 0).toLocaleString()}명 수강
              </div>
              <div className="flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2" />
                수료증 발급
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <BookOpenIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{mockCourses.length}</p>
            <p className="text-sm text-gray-500">운영 중인 코스</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <ClockIcon className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {mockCourses.reduce((sum, course) => sum + course.duration, 0)}
            </p>
            <p className="text-sm text-gray-500">총 학습 시간</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <StarIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {(mockCourses.reduce((sum, course) => sum + course.rating, 0) / mockCourses.length).toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">평균 평점</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <CheckCircleIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(mockCourses.reduce((sum, course) => sum + course.completionRate, 0) / mockCourses.length)}%
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
                placeholder="코스명, 내용, 스킬로 검색..."
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
                  checked={showOnlyCertified}
                  onChange={(e) => setShowOnlyCertified(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">수료증 과정만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="space-y-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
              <div className="lg:flex">
                {/* Thumbnail */}
                <div className="lg:w-1/3 relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {course.isNew && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        NEW
                      </span>
                    )}
                    {course.isPopular && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        인기
                      </span>
                    )}
                    {course.isCertified && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        <TrophyIcon className="w-3 h-3 mr-1" />
                        수료증
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="flex items-center justify-center w-16 h-16 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <PlayIcon className="w-8 h-8 text-primary-600 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                      {course.category}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {getLevelText(course.level)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-lg text-primary-600 font-medium mb-3">{course.subtitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  {/* Instructor */}
                  <div className="flex items-center mb-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{course.instructor.name}</p>
                      <p className="text-sm text-gray-500">{course.instructor.title}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <ClockIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{course.duration}시간</p>
                      <p className="text-xs text-gray-500">총 학습시간</p>
                    </div>
                    <div className="text-center">
                      <PlayIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{course.lectures}개</p>
                      <p className="text-xs text-gray-500">강의</p>
                    </div>
                    <div className="text-center">
                      <UserGroupIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{course.enrolled.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">수강생</p>
                    </div>
                    <div className="text-center">
                      <StarIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{course.rating}</p>
                      <p className="text-xs text-gray-500">평점</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary-600">
                          ₩{course.price.toLocaleString()}
                        </span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ₩{course.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{course.cmeCredits} CME 점수</span>
                        {course.startDate && (
                          <span>
                            <CalendarIcon className="w-4 h-4 inline mr-1" />
                            {new Date(course.startDate).toLocaleDateString('ko-KR')} 시작
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        href={`/education/courses/${course.id}`}
                        className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        자세히 보기
                      </Link>
                      <Link
                        href={`/education/courses/${course.id}/enroll`}
                        className="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        수강 신청
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">온라인 코스의 장점</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">자유로운 학습</h4>
              <p className="text-gray-600">언제 어디서나 원하는 시간에 학습할 수 있습니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">수료증 발급</h4>
              <p className="text-gray-600">과정 완료 시 공식 수료증을 발급해드립니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">학습 추적</h4>
              <p className="text-gray-600">진도율과 성취도를 실시간으로 확인할 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}