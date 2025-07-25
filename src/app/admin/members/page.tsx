'use client';

import { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  BanknotesIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  memberType: 'doctor' | 'nurse' | 'student' | 'industry';
  status: 'active' | 'pending' | 'suspended' | 'inactive';
  joinDate: string;
  lastLogin: string;
  hospital: string;
  department: string;
  licenseNumber?: string;
  verification: 'verified' | 'pending' | 'rejected';
  paymentStatus: 'paid' | 'pending' | 'overdue';
  cmeCredits: number;
  courseCompleted: number;
  conferenceAttended: number;
  avatar?: string;
}

const mockMembers: Member[] = [
  {
    id: 1,
    name: '김철수',
    email: 'kim.cs@hospital.com',
    phone: '010-1234-5678',
    memberType: 'doctor',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-12-20',
    hospital: '서울대학교병원',
    department: '성형외과',
    licenseNumber: 'DOC-2024-001',
    verification: 'verified',
    paymentStatus: 'paid',
    cmeCredits: 15,
    courseCompleted: 3,
    conferenceAttended: 2,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: '박지영',
    email: 'park.jy@clinic.co.kr',
    phone: '010-2345-6789',
    memberType: 'doctor',
    status: 'active',
    joinDate: '2024-03-20',
    lastLogin: '2024-12-19',
    hospital: '강남 JY 클리닉',
    department: '피부과',
    licenseNumber: 'DOC-2024-045',
    verification: 'verified',
    paymentStatus: 'paid',
    cmeCredits: 12,
    courseCompleted: 2,
    conferenceAttended: 1,
    avatar: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: '이준호',
    email: 'lee.jh@medical.ac.kr',
    phone: '010-3456-7890',
    memberType: 'student',
    status: 'active',
    joinDate: '2024-09-01',
    lastLogin: '2024-12-18',
    hospital: '서울의대',
    department: '의학과 4학년',
    verification: 'verified',
    paymentStatus: 'paid',
    cmeCredits: 5,
    courseCompleted: 1,
    conferenceAttended: 1
  },
  {
    id: 4,
    name: '최윤정',
    email: 'choi.yj@pharma.com',
    phone: '010-4567-8901',
    memberType: 'industry',
    status: 'pending',
    joinDate: '2024-12-15',
    lastLogin: '2024-12-15',
    hospital: '글로벌 제약회사',
    department: '의학부',
    verification: 'pending',
    paymentStatus: 'pending',
    cmeCredits: 0,
    courseCompleted: 0,
    conferenceAttended: 0
  },
  {
    id: 5,
    name: '정민수',
    email: 'jung.ms@nurse.org',
    phone: '010-5678-9012',
    memberType: 'nurse',
    status: 'active',
    joinDate: '2024-07-10',
    lastLogin: '2024-12-17',
    hospital: '연세의료원',
    department: '수술실',
    verification: 'verified',
    paymentStatus: 'overdue',
    cmeCredits: 8,
    courseCompleted: 1,
    conferenceAttended: 1
  }
];

const memberTypes = [
  { value: 'all', label: '전체' },
  { value: 'doctor', label: '의사' },
  { value: 'nurse', label: '간호사' },
  { value: 'student', label: '학생' },
  { value: 'industry', label: '업계관계자' }
];

const statuses = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '활성' },
  { value: 'pending', label: '승인대기' },
  { value: 'suspended', label: '정지' },
  { value: 'inactive', label: '비활성' }
];

export default function AdminMembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || member.memberType === selectedType;
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectMember = (memberId: number) => {
    setSelectedMembers(prev => 
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === currentMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(currentMembers.map(member => member.id));
    }
  };

  const getMemberTypeText = (type: string) => {
    switch (type) {
      case 'doctor': return '의사';
      case 'nurse': return '간호사';
      case 'student': return '학생';
      case 'industry': return '업계관계자';
      default: return type;
    }
  };

  const getMemberTypeColor = (type: string) => {
    switch (type) {
      case 'doctor': return 'bg-primary-100 text-primary-700';
      case 'nurse': return 'bg-green-100 text-green-700';
      case 'student': return 'bg-blue-100 text-blue-700';
      case 'industry': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '활성';
      case 'pending': return '승인대기';
      case 'suspended': return '정지';
      case 'inactive': return '비활성';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'suspended': return 'bg-red-100 text-red-700';
      case 'inactive': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'overdue': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">회원 관리</h1>
              <p className="text-gray-600">전체 회원 현황을 관리하고 모니터링합니다</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
              <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
              회원 데이터 내보내기
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-soft p-4">
            <div className="flex items-center">
              <div className="p-2 bg-primary-100 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">총 회원수</p>
                <p className="text-2xl font-bold text-gray-900">{mockMembers.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">승인 대기</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockMembers.filter(m => m.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <AcademicCapIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">의사 회원</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockMembers.filter(m => m.memberType === 'doctor').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-soft p-4">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <BanknotesIcon className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">연체 회원</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockMembers.filter(m => m.paymentStatus === 'overdue').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="이름, 이메일, 병원으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="flex gap-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {memberTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedMembers.length > 0 && (
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-primary-700 font-medium">
                {selectedMembers.length}명 선택됨
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                  승인
                </button>
                <button className="px-3 py-2 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors">
                  정지
                </button>
                <button className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                  삭제
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedMembers.length === currentMembers.length && currentMembers.length > 0}
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    회원정보
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    소속
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상태
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    활동
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    작업
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => handleSelectMember(member.id)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <UserIcon className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-gray-900">{member.name}</p>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getMemberTypeColor(member.memberType)}`}>
                              {getMemberTypeText(member.memberType)}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <EnvelopeIcon className="w-4 h-4 mr-1" />
                            {member.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <PhoneIcon className="w-4 h-4 mr-1" />
                            {member.phone}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-gray-900">
                        <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                        {member.hospital}
                      </div>
                      <p className="text-sm text-gray-500">{member.department}</p>
                      {member.licenseNumber && (
                        <p className="text-xs text-gray-400">면허: {member.licenseNumber}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                          {getStatusText(member.status)}
                        </span>
                        <div className="flex items-center text-xs">
                          <span className="text-gray-500 mr-1">결제:</span>
                          <span className={`font-medium ${getPaymentStatusColor(member.paymentStatus)}`}>
                            {member.paymentStatus === 'paid' ? '완료' : 
                             member.paymentStatus === 'pending' ? '대기' : '연체'}
                          </span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-gray-500 mr-1">인증:</span>
                          <span className={`font-medium ${
                            member.verification === 'verified' ? 'text-green-600' :
                            member.verification === 'pending' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {member.verification === 'verified' ? '완료' :
                             member.verification === 'pending' ? '대기' : '거부'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="flex items-center text-gray-900">
                          <AcademicCapIcon className="w-4 h-4 mr-1" />
                          CME: {member.cmeCredits}점
                        </div>
                        <div className="text-xs text-gray-500">
                          코스 완료: {member.courseCompleted}개
                        </div>
                        <div className="text-xs text-gray-500">
                          학술대회: {member.conferenceAttended}회
                        </div>
                        <div className="text-xs text-gray-400">
                          최종 로그인: {new Date(member.lastLogin).toLocaleDateString('ko-KR')}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          title="상세보기"
                          className="p-1 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button
                          title="편집"
                          className="p-1 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          title="삭제"
                          className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  총 {filteredMembers.length}명 중 {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredMembers.length)}명 표시
                </div>
                <div className="flex space-x-2">
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
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="bg-white rounded-xl shadow-soft p-12 text-center">
            <UserGroupIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}