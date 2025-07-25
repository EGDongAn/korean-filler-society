'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  DocumentArrowDownIcon,
  PhotoIcon,
  VideoCameraIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

interface ConferenceArchive {
  id: number;
  year: number;
  season: 'spring' | 'fall';
  title: string;
  theme: string;
  date: string;
  location: string;
  attendees: number;
  sessions: number;
  speakers: number;
  cmeCredits: number;
  isHighlighted: boolean;
  materials: {
    photos: number;
    videos: number;
    presentations: number;
    papers: number;
  };
  downloads: number;
  posterImage: string;
  summary: string;
  keyTopics: string[];
}

const archiveData: ConferenceArchive[] = [
  {
    id: 1,
    year: 2024,
    season: 'fall',
    title: '2024 추계 학술대회',
    theme: 'Future of Filler Technology: AI & Precision Medicine',
    date: '2024-11-15 ~ 2024-11-16',
    location: '부산 벡스코',
    attendees: 650,
    sessions: 42,
    speakers: 38,
    cmeCredits: 15,
    isHighlighted: true,
    materials: {
      photos: 180,
      videos: 25,
      presentations: 38,
      papers: 15
    },
    downloads: 2847,
    posterImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    summary: 'AI 기술과 정밀의학이 접목된 차세대 필러 기술에 대한 심도 있는 논의가 이루어진 획기적인 학술대회였습니다.',
    keyTopics: ['AI 진단', '정밀주입', '개인맞춤형 치료', '디지털 헬스케어']
  },
  {
    id: 2,
    year: 2024,
    season: 'spring',
    title: '2024 춘계 학술대회',
    theme: 'Safe & Natural: Evidence-Based Filler Practice',
    date: '2024-03-20 ~ 2024-03-21',
    location: '서울 코엑스',
    attendees: 580,
    sessions: 36,
    speakers: 32,
    cmeCredits: 12,
    isHighlighted: false,
    materials: {
      photos: 156,
      videos: 20,
      presentations: 32,
      papers: 12
    },
    downloads: 3124,
    posterImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
    summary: '근거 기반의 안전한 필러 시술법과 자연스러운 결과 도출을 위한 최신 연구 동향을 공유했습니다.',
    keyTopics: ['안전성 프로토콜', '자연스러운 결과', '근거 기반 치료', '합병증 예방']
  },
  {
    id: 3,
    year: 2023,
    season: 'fall',
    title: '2023 추계 학술대회',
    theme: 'Innovation in Injection: New Techniques & Technologies',
    date: '2023-10-14 ~ 2023-10-15',
    location: '대구 엑스코',
    attendees: 520,
    sessions: 32,
    speakers: 28,
    cmeCredits: 11,
    isHighlighted: true,
    materials: {
      photos: 142,
      videos: 18,
      presentations: 28,
      papers: 10
    },
    downloads: 2756,
    posterImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    summary: '혁신적인 주입 기법과 최신 기술 동향을 중심으로 한 미래 지향적 학술대회였습니다.',
    keyTopics: ['혁신 기법', '신기술 동향', '마이크로 캐뉼라', '3D 시뮬레이션']
  },
  {
    id: 4,
    year: 2023,
    season: 'spring',
    title: '2023 춘계 학술대회',
    theme: 'Mastering Filler Complications: Prevention & Management',
    date: '2023-03-18 ~ 2023-03-19',
    location: '서울 코엑스',
    attendees: 495,
    sessions: 30,
    speakers: 26,
    cmeCredits: 10,
    isHighlighted: false,
    materials: {
      photos: 128,
      videos: 15,
      presentations: 26,
      papers: 8
    },
    downloads: 2943,
    posterImage: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop',
    summary: '필러 합병증의 예방과 관리에 집중한 실무 중심의 교육 프로그램이 운영되었습니다.',
    keyTopics: ['합병증 관리', '응급 처치', '예방 프로토콜', '환자 안전']
  },
  {
    id: 5,
    year: 2022,
    season: 'fall',
    title: '2022 추계 학술대회',
    theme: 'Global Standards in Filler Practice',
    date: '2022-11-12 ~ 2022-11-13',
    location: '제주 ICC',
    attendees: 450,
    sessions: 28,
    speakers: 24,
    cmeCredits: 9,
    isHighlighted: false,
    materials: {
      photos: 115,
      videos: 12,
      presentations: 24,
      papers: 7
    },
    downloads: 2387,
    posterImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    summary: '국제적 표준과 가이드라인을 바탕으로 한 글로벌 수준의 필러 시술 표준화 논의가 진행되었습니다.',
    keyTopics: ['글로벌 표준', '가이드라인', '표준화', '국제 협력']
  },
  {
    id: 6,
    year: 2022,
    season: 'spring',
    title: '2022 춘계 학술대회',
    theme: 'Personalized Filler Therapy: Precision & Art',
    date: '2022-03-19 ~ 2022-03-20',
    location: '서울 코엑스',
    attendees: 420,
    sessions: 26,
    speakers: 22,
    cmeCredits: 8,
    isHighlighted: false,
    materials: {
      photos: 108,
      videos: 10,
      presentations: 22,
      papers: 6
    },
    downloads: 2156,
    posterImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    summary: '개인 맞춤형 필러 치료의 정밀성과 예술성을 조화시킨 치료법에 대해 깊이 있게 다뤘습니다.',
    keyTopics: ['개인맞춤형', '정밀의학', '미학적 접근', '개별화 치료']
  }
];

const years = [...new Set(archiveData.map(item => item.year))].sort((a, b) => b - a);
const seasons = ['all', 'spring', 'fall'];

export default function ConferenceArchivePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [showOnlyHighlighted, setShowOnlyHighlighted] = useState(false);

  const filteredArchives = archiveData.filter(archive => {
    const matchesSearch = archive.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         archive.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         archive.keyTopics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesYear = selectedYear === 'all' || archive.year.toString() === selectedYear;
    const matchesSeason = selectedSeason === 'all' || archive.season === selectedSeason;
    const matchesHighlighted = !showOnlyHighlighted || archive.isHighlighted;

    return matchesSearch && matchesYear && matchesSeason && matchesHighlighted;
  });

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">학술대회 아카이브</h1>
            <p className="text-lg text-gray-600 mb-4">
              지난 학술대회의 소중한 자료들을 다시 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                {years.length}년간의 기록
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                총 {archiveData.reduce((sum, archive) => sum + archive.attendees, 0).toLocaleString()}명 참가
              </div>
              <div className="flex items-center">
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                {archiveData.reduce((sum, archive) => sum + archive.downloads, 0).toLocaleString()}회 다운로드
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <PresentationChartLineIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {archiveData.reduce((sum, archive) => sum + archive.sessions, 0)}
            </p>
            <p className="text-sm text-gray-500">총 세션</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <UserGroupIcon className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {archiveData.reduce((sum, archive) => sum + archive.speakers, 0)}
            </p>
            <p className="text-sm text-gray-500">총 연자</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <VideoCameraIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {archiveData.reduce((sum, archive) => sum + archive.materials.videos, 0)}
            </p>
            <p className="text-sm text-gray-500">강의 영상</p>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4 text-center">
            <StarIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {archiveData.reduce((sum, archive) => sum + archive.cmeCredits, 0)}
            </p>
            <p className="text-sm text-gray-500">총 CME 점수</p>
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
                placeholder="학술대회명, 주제, 키워드로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">모든 연도</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}년</option>
                ))}
              </select>

              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">전체</option>
                <option value="spring">춘계</option>
                <option value="fall">추계</option>
              </select>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyHighlighted}
                  onChange={(e) => setShowOnlyHighlighted(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">주요 대회만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Archive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArchives.map((archive) => (
            <div key={archive.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
              <div className="relative">
                <img
                  src={archive.posterImage}
                  alt={archive.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                    {archive.year}년 {archive.season === 'spring' ? '춘계' : '추계'}
                  </span>
                  {archive.isHighlighted && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      <StarIcon className="w-4 h-4 mr-1" />
                      주요
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center px-2 py-1 rounded-full bg-black/50 text-white text-sm">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    {archive.downloads.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{archive.title}</h3>
                <p className="text-primary-600 font-medium text-sm mb-2">{archive.theme}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {archive.date.split(' ~ ')[0].slice(5).replace('-', '.')}
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {archive.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{archive.summary}</p>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mb-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-gray-900">{archive.attendees}</p>
                    <p className="text-xs text-gray-500">참가자</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{archive.sessions}</p>
                    <p className="text-xs text-gray-500">세션</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{archive.speakers}</p>
                    <p className="text-xs text-gray-500">연자</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{archive.cmeCredits}</p>
                    <p className="text-xs text-gray-500">CME</p>
                  </div>
                </div>

                {/* Key Topics */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {archive.keyTopics.slice(0, 3).map((topic) => (
                    <span key={topic} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Materials */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <PhotoIcon className="w-4 h-4 mr-1" />
                      {archive.materials.photos}
                    </div>
                    <div className="flex items-center">
                      <VideoCameraIcon className="w-4 h-4 mr-1" />
                      {archive.materials.videos}
                    </div>
                    <div className="flex items-center">
                      <DocumentArrowDownIcon className="w-4 h-4 mr-1" />
                      {archive.materials.presentations}
                    </div>
                  </div>
                  
                  <Link
                    href={`/conference/archive/${archive.id}`}
                    className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition-colors"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                    자료보기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArchives.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}

        {/* Download Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <DocumentArrowDownIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">자료 이용 안내</h3>
              <ul className="space-y-1 text-blue-800 text-sm">
                <li>• 강의 자료는 학회 회원에게만 제공됩니다.</li>
                <li>• 영상 자료는 CME 점수 취득 목적으로만 사용 가능합니다.</li>
                <li>• 상업적 이용이나 무단 배포는 금지됩니다.</li>
                <li>• 자료 이용 시 출처를 명시해 주시기 바랍니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}