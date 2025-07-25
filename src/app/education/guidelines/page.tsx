'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  DocumentTextIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowDownTrayIcon as DownloadIcon,
  MagnifyingGlassIcon,
  TagIcon,
  CalendarIcon,
  UserGroupIcon,
  StarIcon,
  EyeIcon,
  CheckCircleIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

interface Guideline {
  id: number;
  title: string;
  description: string;
  category: string;
  version: string;
  publishDate: string;
  updateDate: string;
  author: string;
  organization: string;
  type: 'safety' | 'procedure' | 'regulation' | 'education';
  level: 'basic' | 'intermediate' | 'advanced';
  fileSize: string;
  downloadCount: number;
  isNew: boolean;
  isRecommended: boolean;
  tags: string[];
  summary: string;
  keyPoints: string[];
  thumbnail: string;
}

const mockGuidelines: Guideline[] = [
  {
    id: 1,
    title: '필러 시술 안전성 가이드라인 v3.0',
    description: '필러 시술의 안전한 수행을 위한 포괄적인 가이드라인입니다. 국제 표준에 맞춘 최신 안전 기준과 프로토콜을 제시합니다.',
    category: '안전성',
    version: '3.0',
    publishDate: '2024-12-01',
    updateDate: '2024-12-01',
    author: '안전위원회',
    organization: '대한필러학회',
    type: 'safety',
    level: 'basic',
    fileSize: '2.8MB',
    downloadCount: 3456,
    isNew: true,
    isRecommended: true,
    tags: ['안전성', '프로토콜', '국제표준', '필수'],
    summary: '필러 시술 시 준수해야 할 기본 안전 원칙과 단계별 프로토콜을 상세히 기술한 필수 가이드라인',
    keyPoints: [
      '시술 전 환자 평가 체크리스트',
      '멸균 및 무균 시술 프로토콜',
      '응급상황 대응 매뉴얼',
      '합병증 예방 및 관리 방법'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: '부위별 필러 시술 표준 가이드라인',
    description: '얼굴 각 부위별 필러 시술의 표준화된 기법과 주의사항을 제시한 실무 중심의 가이드라인입니다.',
    category: '시술 기법',
    version: '2.1',
    publishDate: '2024-10-15',
    updateDate: '2024-11-20',
    author: '기술위원회',
    organization: '대한필러학회',
    type: 'procedure',
    level: 'intermediate',
    fileSize: '4.2MB',
    downloadCount: 2847,
    isNew: false,
    isRecommended: true,
    tags: ['부위별', '표준기법', '실무', '주의사항'],
    summary: '이마, 눈가, 코, 입술, 턱 등 각 부위별 최적의 시술법과 해부학적 고려사항을 상세 설명',
    keyPoints: [
      '부위별 해부학적 특징',
      '적정 주입량과 깊이',
      '기법별 장단점 비교',
      '부위별 합병증 위험도'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: '혈관 합병증 예방 및 치료 프로토콜',
    description: '필러 시술 시 발생할 수 있는 혈관 관련 합병증의 예방과 응급 치료 방법을 다룬 전문 가이드라인입니다.',
    category: '합병증 관리',
    version: '1.5',
    publishDate: '2024-09-30',
    updateDate: '2024-11-10',
    author: '응급의학위원회',
    organization: '대한필러학회',
    type: 'safety',
    level: 'advanced',
    fileSize: '1.9MB',
    downloadCount: 1923,
    isNew: false,
    isRecommended: true,
    tags: ['혈관합병증', '응급처치', '치료', '예방'],
    summary: '혈관 폐색, 색전증 등 혈관 관련 심각한 합병증의 인식, 예방, 치료에 대한 전문 지침',
    keyPoints: [
      '혈관 해부학적 위험 부위',
      '합병증 조기 인식법',
      '응급 치료 프로토콜',
      '하이알루로니다제 사용법'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=300&h=200&fit=crop'
  },
  {
    id: 4,
    title: '필러 제품 선택 및 사용 가이드',
    description: '시중에 유통되는 다양한 필러 제품의 특성과 적절한 선택 기준을 제시한 실용적 가이드입니다.',
    category: '제품 정보',
    version: '2.3',
    publishDate: '2024-08-20',
    updateDate: '2024-10-05',
    author: '제품평가위원회',
    organization: '대한필러학회',
    type: 'education',
    level: 'intermediate',
    fileSize: '3.1MB',
    downloadCount: 2134,
    isNew: false,
    isRecommended: false,
    tags: ['제품선택', '특성비교', '사용법', '실용'],
    summary: 'FDA 승인 필러 제품들의 특성 비교와 환자별, 부위별 최적 제품 선택 가이드',
    keyPoints: [
      '제품별 특성 및 지속기간',
      '부위별 권장 제품',
      '환자 연령별 고려사항',
      '제품 보관 및 취급법'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop'
  },
  {
    id: 5,
    title: '환자 동의서 및 법적 고려사항',
    description: '필러 시술 시 필요한 법적 문서와 의사의 책임 범위에 대한 법무 가이드라인입니다.',
    category: '법무',
    version: '1.2',
    publishDate: '2024-07-10',
    updateDate: '2024-09-15',
    author: '법무위원회',
    organization: '대한의사협회',
    type: 'regulation',
    level: 'basic',
    fileSize: '1.5MB',
    downloadCount: 1567,
    isNew: false,
    isRecommended: false,
    tags: ['법무', '동의서', '책임', '문서'],
    summary: '의료분쟁 예방을 위한 적절한 동의서 작성법과 의사의 법적 의무사항 안내',
    keyPoints: [
      '동의서 필수 포함 내용',
      '설명의무 범위',
      '의료사고 시 대응법',
      '보험 및 배상 책임'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop'
  },
  {
    id: 6,
    title: '필러 시술 교육 커리큘럼 가이드',
    description: '의료진 교육을 위한 체계적인 필러 시술 교육 과정과 평가 기준을 제시한 교육 가이드라인입니다.',
    category: '교육',
    version: '1.0',
    publishDate: '2024-06-01',
    updateDate: '2024-08-20',
    author: '교육위원회',
    organization: '대한필러학회',
    type: 'education',
    level: 'basic',
    fileSize: '2.2MB',
    downloadCount: 987,
    isNew: false,
    isRecommended: false,
    tags: ['교육', '커리큘럼', '평가', '의료진'],
    summary: '초보자부터 전문가까지 단계별 필러 시술 교육 프로그램 구성 및 운영 방안',
    keyPoints: [
      '단계별 학습 목표',
      '실습 교육 프로토콜',
      '평가 및 인증 기준',
      '지속 교육 계획'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop'
  }
];

const categories = ['전체', '안전성', '시술 기법', '합병증 관리', '제품 정보', '법무', '교육'];
const types = ['전체', 'safety', 'procedure', 'regulation', 'education'];
const levels = ['전체', 'basic', 'intermediate', 'advanced'];

const typeConfig = {
  safety: { label: '안전', color: 'bg-red-100 text-red-700', icon: ShieldCheckIcon },
  procedure: { label: '시술', color: 'bg-primary-100 text-primary-700', icon: BookOpenIcon },
  regulation: { label: '규정', color: 'bg-yellow-100 text-yellow-700', icon: ExclamationTriangleIcon },
  education: { label: '교육', color: 'bg-green-100 text-green-700', icon: UserGroupIcon }
};

export default function GuidelinesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedType, setSelectedType] = useState('전체');
  const [selectedLevel, setSelectedLevel] = useState('전체');
  const [showOnlyRecommended, setShowOnlyRecommended] = useState(false);

  const filteredGuidelines = mockGuidelines.filter(guideline => {
    const matchesSearch = guideline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guideline.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guideline.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '전체' || guideline.category === selectedCategory;
    const matchesType = selectedType === '전체' || guideline.type === selectedType;
    const matchesLevel = selectedLevel === '전체' || guideline.level === selectedLevel;
    const matchesRecommended = !showOnlyRecommended || guideline.isRecommended;

    return matchesSearch && matchesCategory && matchesType && matchesLevel && matchesRecommended;
  });

  const getLevelText = (level: string) => {
    switch (level) {
      case 'basic': return '기초';
      case 'intermediate': return '중급';
      case 'advanced': return '고급';
      default: return level;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-green-100 text-green-700';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">가이드라인</h1>
            <p className="text-lg text-gray-600 mb-4">
              필러 시술의 표준화된 지침과 프로토콜
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                총 {mockGuidelines.length}개 가이드라인
              </div>
              <div className="flex items-center">
                <DownloadIcon className="w-5 h-5 mr-2" />
                {mockGuidelines.reduce((sum, guideline) => sum + guideline.downloadCount, 0).toLocaleString()}회 다운로드
              </div>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 mr-2" />
                {mockGuidelines.filter(g => g.isRecommended).length}개 추천 문서
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <ShieldCheckIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {mockGuidelines.filter(g => g.type === 'safety').length}
            </p>
            <p className="text-sm text-gray-500">안전 가이드</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <BookOpenIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {mockGuidelines.filter(g => g.type === 'procedure').length}
            </p>
            <p className="text-sm text-gray-500">시술 가이드</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {mockGuidelines.filter(g => g.type === 'regulation').length}
            </p>
            <p className="text-sm text-gray-500">규정 문서</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <UserGroupIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {mockGuidelines.filter(g => g.type === 'education').length}
            </p>
            <p className="text-sm text-gray-500">교육 자료</p>
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
                placeholder="가이드라인명, 내용, 태그로 검색..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="전체">전체 유형</option>
                {types.slice(1).map(type => (
                  <option key={type} value={type}>{typeConfig[type as keyof typeof typeConfig].label}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="전체">전체 수준</option>
                {levels.slice(1).map(level => (
                  <option key={level} value={level}>{getLevelText(level)}</option>
                ))}
              </select>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyRecommended}
                  onChange={(e) => setShowOnlyRecommended(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">추천 문서만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredGuidelines.map((guideline) => {
            const typeConf = typeConfig[guideline.type as keyof typeof typeConfig];
            const IconComponent = typeConf.icon;

            return (
              <div key={guideline.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeConf.color}`}>
                        <IconComponent className="w-4 h-4 mr-1" />
                        {typeConf.label}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(guideline.level)}`}>
                        {getLevelText(guideline.level)}
                      </span>
                      {guideline.isNew && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          NEW
                        </span>
                      )}
                      {guideline.isRecommended && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <StarIcon className="w-3 h-3 mr-1" />
                          추천
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">v{guideline.version}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guideline.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{guideline.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">{guideline.summary}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {guideline.keyPoints.slice(0, 3).map((point, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {guideline.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(guideline.publishDate).toLocaleDateString('ko-KR')}
                      </div>
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {guideline.downloadCount.toLocaleString()}
                      </div>
                    </div>
                    <span>{guideline.fileSize}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{guideline.author}</p>
                      <p className="text-xs text-gray-500">{guideline.organization}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/education/guidelines/${guideline.id}`}
                        className="inline-flex items-center px-3 py-2 border border-primary-600 text-primary-600 text-sm font-medium rounded hover:bg-primary-50 transition-colors"
                      >
                        자세히 보기
                      </Link>
                      <button className="inline-flex items-center px-3 py-2 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition-colors">
                        <DownloadIcon className="w-4 h-4 mr-1" />
                        다운로드
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredGuidelines.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">가이드라인 사용 안내</h3>
              <ul className="space-y-1 text-yellow-800 text-sm">
                <li>• 모든 가이드라인은 학회 회원에게 무료로 제공됩니다.</li>
                <li>• 정기적으로 업데이트되므로 최신 버전을 확인해 주세요.</li>
                <li>• 임상에 적용 시 개별 환자의 상황을 고려해야 합니다.</li>
                <li>• 가이드라인에 대한 문의는 해당 위원회로 연락 바랍니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}