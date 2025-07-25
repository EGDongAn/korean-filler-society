'use client';

import { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  StarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface Speaker {
  id: number;
  name: string;
  title: string;
  hospital: string;
  country: string;
  specialization: string[];
  bio: string;
  image: string;
  isKeynote: boolean;
  isFeatured: boolean;
  sessions: string[];
  credentials: string[];
  researchAreas: string[];
  publications?: number;
  experience?: number;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Jean-Michel Mazer',
    title: 'AMWC Scientific Director',
    hospital: 'Monaco Anti-Aging Medicine',
    country: 'Monaco',
    specialization: ['Anti-aging Medicine', 'Aesthetic Surgery', 'Regenerative Medicine'],
    bio: 'AMWC(세계미용의학학회)의 과학이사로 20년 이상 미용의학 분야를 선도해온 세계적 권위자입니다. 재생의학과 필러 기술의 융합 연구를 통해 차세대 치료법을 개발하고 있습니다.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    isKeynote: true,
    isFeatured: true,
    sessions: ['Opening Keynote', 'Future of Aesthetic Medicine'],
    credentials: ['MD', 'PhD', 'AMWC Scientific Director'],
    researchAreas: ['Regenerative Medicine', 'Biocompatible Fillers', 'Longevity Research'],
    publications: 150,
    experience: 25
  },
  {
    id: 2,
    name: 'Dr. Sung Min Park',
    title: '성형외과 교수',
    hospital: '서울대학교병원',
    country: 'Korea',
    specialization: ['Facial Plastic Surgery', 'Asian Facial Anatomy', 'Minimally Invasive Procedures'],
    bio: '서울대학교 성형외과 교수로 아시아인 안면 해부학 연구의 선구자입니다. 안전하고 자연스러운 필러 시술법 개발에 20년간 매진해 왔으며, 국내외 다수의 가이드라인 제정에 참여했습니다.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    isKeynote: false,
    isFeatured: true,
    sessions: ['Asian Facial Anatomy', 'Safe Injection Techniques'],
    credentials: ['MD', 'PhD', '성형외과 전문의'],
    researchAreas: ['Asian Facial Anatomy', 'Filler Safety', 'Injection Techniques'],
    publications: 89,
    experience: 20
  },
  {
    id: 3,
    name: 'Dr. Lisa Chen',
    title: '피부과 부과장',
    hospital: 'Singapore General Hospital',
    country: 'Singapore',
    specialization: ['Dermatology', 'Aesthetic Medicine', 'Complication Management'],
    bio: '싱가포르 종합병원의 피부과 부과장으로 필러 합병증 관리 분야의 아시아 최고 전문가입니다. 혈관 합병증 예방과 치료에 대한 혁신적인 프로토콜을 개발했습니다.',
    image: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=300&h=300&fit=crop&crop=face',
    isKeynote: false,
    isFeatured: true,
    sessions: ['Complication Management', 'Vascular Safety'],
    credentials: ['MD', 'MBBS', 'Dermatology Board Certified'],
    researchAreas: ['Complication Management', 'Vascular Safety', 'Emergency Protocols'],
    publications: 67,
    experience: 15
  },
  {
    id: 4,
    name: 'Dr. Michael Rodriguez',
    title: '미용의학센터 원장',
    hospital: 'Miami Aesthetic Institute',
    country: 'USA',
    specialization: ['Aesthetic Medicine', 'Injectable Treatments', 'Advanced Techniques'],
    bio: '마이애미 미용의학연구소의 원장으로 라틴 아메리카 필러 시술의 표준을 정립한 전문가입니다. 혁신적인 주입 기법과 환자 안전성 프로토콜 개발로 유명합니다.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    isKeynote: false,
    isFeatured: false,
    sessions: ['Advanced Injection Techniques', 'Patient Safety Protocols'],
    credentials: ['MD', 'Board Certified Plastic Surgeon'],
    researchAreas: ['Injectable Techniques', 'Patient Safety', 'Aesthetic Innovation'],
    publications: 45,
    experience: 18
  },
  {
    id: 5,
    name: 'Dr. Sarah Johnson',
    title: '재생의학과 교수',
    hospital: 'Harvard Medical School',
    country: 'USA',
    specialization: ['Regenerative Medicine', 'Stem Cell Research', 'Bioengineering'],
    bio: '하버드 의과대학 재생의학과 교수로 줄기세포와 필러의 융합 치료법을 개발하고 있습니다. 차세대 생체재료 연구의 선구자로 인정받고 있습니다.',
    image: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=300&h=300&fit=crop&crop=face',
    isKeynote: true,
    isFeatured: true,
    sessions: ['Future Technologies', 'Regenerative Fillers'],
    credentials: ['MD', 'PhD', 'Harvard Medical School Professor'],
    researchAreas: ['Regenerative Medicine', 'Biomaterials', 'Tissue Engineering'],
    publications: 120,
    experience: 22
  },
  {
    id: 6,
    name: 'Dr. Hiroshi Tanaka',
    title: '미용외과 과장',
    hospital: 'Tokyo Medical University',
    country: 'Japan',
    specialization: ['Cosmetic Surgery', 'Facial Contouring', 'Non-surgical Procedures'],
    bio: '도쿄의과대학 미용외과 과장으로 일본 필러 시술의 안전성 가이드라인 제정을 주도했습니다. 동양인 특화 시술법 개발에 기여하고 있습니다.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    isKeynote: false,
    isFeatured: false,
    sessions: ['Japanese Guidelines', 'East Asian Techniques'],
    credentials: ['MD', 'PhD', '성형외과 전문의'],
    researchAreas: ['Safety Guidelines', 'Asian Techniques', 'Regulatory Standards'],
    publications: 78,
    experience: 19
  }
];

const countries = ['All', 'Korea', 'USA', 'Monaco', 'Singapore', 'Japan'];
const specializations = ['All', 'Aesthetic Medicine', 'Plastic Surgery', 'Dermatology', 'Regenerative Medicine'];

export default function ConferenceSpeakersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const filteredSpeakers = speakers.filter(speaker => {
    const matchesSearch = speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         speaker.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         speaker.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCountry = selectedCountry === 'All' || speaker.country === selectedCountry;
    const matchesSpecialization = selectedSpecialization === 'All' || 
                                 speaker.specialization.some(spec => spec.includes(selectedSpecialization));
    const matchesFeatured = !showOnlyFeatured || speaker.isFeatured;

    return matchesSearch && matchesCountry && matchesSpecialization && matchesFeatured;
  });

  const keynoteSpeakers = filteredSpeakers.filter(speaker => speaker.isKeynote);
  const regularSpeakers = filteredSpeakers.filter(speaker => !speaker.isKeynote);

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">연자 소개</h1>
            <p className="text-lg text-gray-600 mb-4">
              세계적으로 인정받는 필러 전문가들을 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                총 {speakers.length}명의 연자
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2" />
                {new Set(speakers.map(s => s.country)).size}개국 참여
              </div>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 mr-2" />
                {keynoteSpeakers.length}명의 기조연설자
              </div>
            </div>
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
                placeholder="연자명, 병원, 전문분야로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country === 'All' ? '모든 국가' : country}</option>
                ))}
              </select>

              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec === 'All' ? '모든 분야' : spec}</option>
                ))}
              </select>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyFeatured}
                  onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                  className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">주요 연자만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Keynote Speakers */}
        {keynoteSpeakers.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <StarIcon className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">기조연설자</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keynoteSpeakers.map((speaker) => (
                <div key={speaker.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                        <StarIcon className="w-4 h-4 mr-1" />
                        기조연설
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                        {speaker.country}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">{speaker.title}</p>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                      {speaker.hospital}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{speaker.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {speaker.specialization.slice(0, 2).map((spec) => (
                        <span key={spec} className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary-100 text-primary-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{speaker.experience}년 경력</span>
                        <span>논문 {speaker.publications}편</span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        자세히 보기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Speakers */}
        {regularSpeakers.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <AcademicCapIcon className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">세션 연자</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSpeakers.map((speaker) => (
                <div key={speaker.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                        {speaker.country}
                      </span>
                    </div>
                    {speaker.isFeatured && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          추천
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mb-1">{speaker.title}</p>
                    <div className="flex items-center text-gray-600 text-xs mb-3">
                      <BuildingOfficeIcon className="w-3 h-3 mr-1" />
                      {speaker.hospital}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{speaker.bio}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {speaker.specialization.slice(0, 1).map((spec) => (
                        <span key={spec} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div className="text-xs text-gray-500">
                        {speaker.experience}년 · {speaker.publications}편
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-xs">
                        상세정보
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredSpeakers.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <UserGroupIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">이 모든 전문가들의 강연을 놓치지 마세요!</h3>
            <p className="mb-4">지금 등록하고 Early Bird 할인 혜택까지 받아보세요</p>
            <a
              href="/conference/registration"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              학술대회 등록하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}