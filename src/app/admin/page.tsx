'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon,
  UsersIcon,
  CalendarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  ArrowRightIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface RecentActivity {
  id: number;
  type: 'member' | 'conference' | 'post' | 'payment';
  title: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
}

interface PendingApproval {
  id: number;
  type: 'member' | 'post' | 'conference';
  title: string;
  requester: string;
  requestDate: string;
  priority: 'high' | 'medium' | 'low';
}

const dashboardStats: DashboardStats[] = [
  {
    label: '총 회원수',
    value: 2847,
    change: 12.5,
    changeType: 'increase',
    icon: UsersIcon,
    color: 'bg-primary-500'
  },
  {
    label: '이번 달 신규 회원',
    value: 156,
    change: 23.4,
    changeType: 'increase',
    icon: ArrowTrendingUpIcon,
    color: 'bg-green-500'
  },
  {
    label: '진행 중인 학술대회',
    value: 3,
    change: 0,
    changeType: 'neutral',
    icon: CalendarIcon,
    color: 'bg-blue-500'
  },
  {
    label: '미승인 게시물',
    value: 8,
    change: -2,
    changeType: 'decrease',
    icon: DocumentTextIcon,
    color: 'bg-orange-500'
  },
  {
    label: '온라인 강의 수강률',
    value: '87%',
    change: 5.2,
    changeType: 'increase',
    icon: AcademicCapIcon,
    color: 'bg-purple-500'
  },
  {
    label: '시스템 알림',
    value: 4,
    change: 1,
    changeType: 'increase',
    icon: ExclamationTriangleIcon,
    color: 'bg-red-500'
  }
];

const recentActivities: RecentActivity[] = [
  {
    id: 1,
    type: 'member',
    title: '새 회원 가입',
    description: '김철수 (의사회원) - 서울대학교병원',
    timestamp: '10분 전',
    status: 'completed'
  },
  {
    id: 2,
    type: 'conference',
    title: '학술대회 등록',
    description: '2025 춘계 학술대회 - 새로운 참가자 등록',
    timestamp: '25분 전',
    status: 'completed'
  },
  {
    id: 3,
    type: 'post',
    title: '블로그 게시물 작성',
    description: '필러 합병증 관리 - 박지영 전문의',
    timestamp: '1시간 전',
    status: 'pending'
  },
  {
    id: 4,
    type: 'payment',
    title: '결제 처리 완료',
    description: '온라인 강의 결제 - ₩150,000',
    timestamp: '2시간 전',
    status: 'completed'
  },
  {
    id: 5,
    type: 'member',
    title: '회원 정보 업데이트',
    description: '이영희 회원 - 프로필 사진 변경',
    timestamp: '3시간 전',
    status: 'completed'
  }
];

const pendingApprovals: PendingApproval[] = [
  {
    id: 1,
    type: 'member',
    title: '의사회원 자격 승인 요청',
    requester: '정태호',
    requestDate: '2024-12-20',
    priority: 'high'
  },
  {
    id: 2,
    type: 'post',
    title: '학술 블로그 게시물 승인',
    requester: '김민수',
    requestDate: '2024-12-19',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'conference',
    title: '워크샵 추가 승인 요청',
    requester: '박지영',
    requestDate: '2024-12-18',
    priority: 'medium'
  },
  {
    id: 4,
    type: 'member',
    title: '업계관계자 회원 승인',
    requester: '최윤정',
    requestDate: '2024-12-17',
    priority: 'low'
  }
];

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('7days');

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'member': return UsersIcon;
      case 'conference': return CalendarIcon;
      case 'post': return DocumentTextIcon;
      case 'payment': return ChartBarIcon;
      default: return DocumentTextIcon;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'member': return 'bg-primary-100 text-primary-600';
      case 'conference': return 'bg-blue-100 text-blue-600';
      case 'post': return 'bg-green-100 text-green-600';
      case 'payment': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircleIcon;
      case 'pending': return ClockIcon;
      case 'failed': return XCircleIcon;
      default: return ClockIcon;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'pending': return 'text-yellow-500';
      case 'failed': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return '높음';
      case 'medium': return '보통';
      case 'low': return '낮음';
      default: return priority;
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">관리자 대시보드</h1>
          <p className="text-gray-600 mt-2">대한필러학회 시스템 현황을 한눈에 확인하세요</p>
        </div>

        {/* Time Range Selector */}
        <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">시스템 현황</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="24hours">최근 24시간</option>
              <option value="7days">최근 7일</option>
              <option value="30days">최근 30일</option>
              <option value="90days">최근 90일</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardStats.map((stat, index) => {
            const IconComponent = stat.icon;
            const TrendIcon = stat.changeType === 'increase' ? ArrowTrendingUpIcon : 
                            stat.changeType === 'decrease' ? ArrowTrendingDownIcon : null;

            return (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value.toLocaleString()}</p>
                    {stat.change !== 0 && (
                      <div className="flex items-center mt-2">
                        {TrendIcon && (
                          <TrendIcon className={`w-4 h-4 mr-1 ${
                            stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                          }`} />
                        )}
                        <span className={`text-sm font-medium ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.changeType === 'increase' ? '+' : ''}{stat.change}%
                        </span>
                        <span className="text-sm text-gray-500 ml-1">vs 이전 기간</span>
                      </div>
                    )}
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">최근 활동</h3>
              <Link
                href="/admin/activities"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
              >
                전체 보기
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                const StatusIcon = getStatusIcon(activity.status);

                return (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`flex-shrink-0 p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                      <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                    </div>
                    <StatusIcon className={`w-5 h-5 ${getStatusColor(activity.status)}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">승인 대기</h3>
              <Link
                href="/admin/approvals"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
              >
                전체 보기
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{approval.title}</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(approval.priority)}`}>
                      {getPriorityText(approval.priority)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">요청자: {approval.requester}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(approval.requestDate).toLocaleDateString('ko-KR')}
                    </span>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">
                        승인
                      </button>
                      <button className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">
                        거부
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">빠른 작업</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/admin/members"
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <UsersIcon className="w-8 h-8 text-gray-600 group-hover:text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">회원 관리</span>
            </Link>
            <Link
              href="/admin/conferences"
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <CalendarIcon className="w-8 h-8 text-gray-600 group-hover:text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">학술대회</span>
            </Link>
            <Link
              href="/admin/content"
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <DocumentTextIcon className="w-8 h-8 text-gray-600 group-hover:text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">콘텐츠</span>
            </Link>
            <Link
              href="/admin/analytics"
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <ChartBarIcon className="w-8 h-8 text-gray-600 group-hover:text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">분석</span>
            </Link>
          </div>
        </div>

        {/* System Health */}
        <div className="mt-8 bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">시스템 상태</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">웹 서버</h4>
              <p className="text-sm text-green-600">정상 운영</p>
              <p className="text-xs text-gray-500">99.9% 가동률</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">데이터베이스</h4>
              <p className="text-sm text-green-600">정상 운영</p>
              <p className="text-xs text-gray-500">평균 응답시간 12ms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ClockIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-medium text-gray-900">백업 시스템</h4>
              <p className="text-sm text-yellow-600">진행 중</p>
              <p className="text-xs text-gray-500">마지막 백업: 2시간 전</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}