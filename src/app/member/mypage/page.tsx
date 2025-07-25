'use client';

import { useState } from 'react';
import { 
  UserCircleIcon,
  PencilIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone: string;
  memberType: 'general' | 'doctor' | 'industry';
  status: 'active' | 'pending' | 'suspended';
  joinDate: string;
  // 의사회원 정보
  medicalLicense?: string;
  hospital?: string;
  department?: string;
  specialization?: string;
  // 업계관계자 정보
  company?: string;
  position?: string;
  businessType?: string;
  // 활동 정보
  attendedConferences: number;
  completedLectures: number;
  earnedCredits: number;
}

const mockUserProfile: UserProfile = {
  id: '1',
  email: 'doctor.kim@example.com',
  name: '김민수',
  phone: '010-1234-5678',
  memberType: 'doctor',
  status: 'active',
  joinDate: '2023-03-15',
  medicalLicense: 'MD-2023-001234',
  hospital: '서울대학교병원',
  department: '성형외과',
  specialization: '필러, 보톡스',
  attendedConferences: 8,
  completedLectures: 24,
  earnedCredits: 36,
};

const recentActivities = [
  {
    id: 1,
    type: 'conference',
    title: '2024 동계 학술대회 참가',
    date: '2024-12-10',
    status: 'completed',
    credits: 6,
  },
  {
    id: 2,
    type: 'lecture',
    title: '필러 합병증 관리 온라인 강의',
    date: '2024-11-28',
    status: 'completed',
    credits: 3,
  },
  {
    id: 3,
    type: 'lecture',
    title: '코 필러 시술의 A to Z',
    date: '2024-11-15',
    status: 'in_progress',
    progress: 75,
  },
];

const downloadableDocuments = [
  {
    id: 1,
    title: '2024 동계 학술대회 초록집',
    type: 'PDF',
    size: '15.2MB',
    date: '2024-12-10',
  },
  {
    id: 2,
    title: '필러 시술 가이드라인 v2.1',
    type: 'PDF',
    size: '8.7MB',
    date: '2024-11-20',
  },
  {
    id: 3,
    title: '합병증 관리 프로토콜',
    type: 'PDF',
    size: '5.4MB',
    date: '2024-10-15',
  },
];

export default function MyPageLayout() {
  const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'activities' | 'documents'>('overview');
  const [userProfile] = useState<UserProfile>(mockUserProfile);
  const [isEditing, setIsEditing] = useState(false);

  const getMemberTypeLabel = (type: string) => {
    switch (type) {
      case 'doctor': return '의사회원';
      case 'industry': return '업계관계자';
      default: return '일반회원';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircleIcon className="w-4 h-4 mr-1" />
          활성
        </span>;
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <ClockIcon className="w-4 h-4 mr-1" />
          승인 대기
        </span>;
      case 'suspended':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
          정지
        </span>;
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'overview', name: '개요', icon: UserCircleIcon },
    { id: 'profile', name: '프로필 관리', icon: PencilIcon },
    { id: 'activities', name: '활동 내역', icon: AcademicCapIcon },
    { id: 'documents', name: '자료실', icon: DocumentTextIcon },
  ];

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {userProfile.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">{getMemberTypeLabel(userProfile.memberType)}</span>
                  {getStatusBadge(userProfile.status)}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  가입일: {new Date(userProfile.joinDate).toLocaleDateString('ko-KR')}
                </p>
              </div>
            </div>
            
            {userProfile.memberType === 'doctor' && (
              <div className="mt-4 md:mt-0 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary-600">{userProfile.attendedConferences}</p>
                  <p className="text-xs text-gray-500">참석 학술대회</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-600">{userProfile.completedLectures}</p>
                  <p className="text-xs text-gray-500">수강 강의</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-green">{userProfile.earnedCredits}</p>
                  <p className="text-xs text-gray-500">취득 학점</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-soft mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">계정 개요</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">기본 정보</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">이메일</dt>
                      <dd className="text-sm text-gray-900">{userProfile.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">연락처</dt>
                      <dd className="text-sm text-gray-900">{userProfile.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">회원 유형</dt>
                      <dd className="text-sm text-gray-900">{getMemberTypeLabel(userProfile.memberType)}</dd>
                    </div>
                  </dl>
                </div>

                {userProfile.memberType === 'doctor' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">의사 정보</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">면허번호</dt>
                        <dd className="text-sm text-gray-900">{userProfile.medicalLicense}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">근무처</dt>
                        <dd className="text-sm text-gray-900">{userProfile.hospital}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">진료과</dt>
                        <dd className="text-sm text-gray-900">{userProfile.department}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">전문분야</dt>
                        <dd className="text-sm text-gray-900">{userProfile.specialization}</dd>
                      </div>
                    </dl>
                  </div>
                )}

                {userProfile.memberType === 'industry' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">회사 정보</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">회사명</dt>
                        <dd className="text-sm text-gray-900">{userProfile.company}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">직책</dt>
                        <dd className="text-sm text-gray-900">{userProfile.position}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">업종</dt>
                        <dd className="text-sm text-gray-900">{userProfile.businessType}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">프로필 관리</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
                >
                  <PencilIcon className="w-4 h-4 mr-2" />
                  {isEditing ? '저장' : '편집'}
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      이름
                    </label>
                    <input
                      type="text"
                      value={userProfile.name}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      연락처
                    </label>
                    <input
                      type="tel"
                      value={userProfile.phone}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                {userProfile.memberType === 'doctor' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        근무처
                      </label>
                      <input
                        type="text"
                        value={userProfile.hospital}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        전문분야
                      </label>
                      <input
                        type="text"
                        value={userProfile.specialization}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">활동 내역</h2>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                          activity.type === 'conference' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                        }`}>
                          {activity.type === 'conference' ? (
                            <AcademicCapIcon className="w-5 h-5" />
                          ) : (
                            <DocumentTextIcon className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{activity.title}</h3>
                          <p className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString('ko-KR')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {activity.status === 'completed' && activity.credits && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <StarIcon className="w-3 h-3 mr-1" />
                            {activity.credits}학점
                          </span>
                        )}
                        
                        {activity.status === 'in_progress' && activity.progress && (
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-primary-600 h-2 rounded-full" 
                                style={{ width: `${activity.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{activity.progress}%</span>
                          </div>
                        )}
                        
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          activity.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {activity.status === 'completed' ? '완료' : '진행중'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">다운로드 가능한 자료</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {downloadableDocuments.map((doc) => (
                  <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-medium transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <DocumentTextIcon className="w-8 h-8 text-red-500 flex-shrink-0" />
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {doc.type}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{doc.size}</span>
                      <span>{new Date(doc.date).toLocaleDateString('ko-KR')}</span>
                    </div>
                    
                    <button className="w-full bg-primary-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                      다운로드
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}