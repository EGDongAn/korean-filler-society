'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: '학회소개',
    href: '/about',
    icon: AcademicCapIcon,
    submenu: [
      { name: '학회개요', href: '/about/overview' },
      { name: '조직도 및 임원진', href: '/about/organization' },
      { name: '연혁', href: '/about/history' },
      { name: '찾아오시는 길', href: '/about/location' },
    ],
  },
  {
    name: '학술대회',
    href: '/conference',
    icon: CalendarDaysIcon,
    submenu: [
      { name: '대회소개', href: '/conference/introduction' },
      { name: '프로그램', href: '/conference/program' },
      { name: '연자소개', href: '/conference/speakers' },
      { name: '참가등록', href: '/conference/registration' },
      { name: '역대대회', href: '/conference/archive' },
    ],
  },
  {
    name: '교육/자료',
    href: '/education',
    icon: BookOpenIcon,
    submenu: [
      { name: '강의록 다운로드', href: '/education/lectures' },
      { name: '온라인 강의', href: '/education/online' },
      { name: '학술자료', href: '/education/resources' },
      { name: '가이드라인', href: '/education/guidelines' },
    ],
  },
  {
    name: '회원서비스',
    href: '/member',
    icon: UserGroupIcon,
    submenu: [
      { name: '회원가입', href: '/member/join' },
      { name: '마이페이지', href: '/member/mypage' },
      { name: '회원혜택', href: '/member/benefits' },
      { name: '회비납부', href: '/member/payment' },
    ],
  },
  {
    name: '스폰서/파트너',
    href: '/sponsor',
    icon: BuildingOfficeIcon,
    submenu: [
      { name: '스폰서 안내', href: '/sponsor/guide' },
      { name: '후원사 등록', href: '/sponsor/register' },
      { name: '광고 및 홍보', href: '/sponsor/advertisement' },
      { name: '협력업체', href: '/sponsor/partners' },
    ],
  },
  {
    name: '커뮤니티',
    href: '/community',
    icon: ChatBubbleLeftRightIcon,
    submenu: [
      { name: '공지사항', href: '/community/notice' },
      { name: '학술블로그', href: '/community/blog' },
      { name: 'Q&A', href: '/community/qna' },
      { name: '갤러리', href: '/community/gallery' },
    ],
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">KFS</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">대한필러학회</h1>
                <p className="text-xs text-gray-500">Korean Filler Society</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-large py-2 animate-slide-down">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <Link
              href="/member/login"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/member/join"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              회원가입
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <span className="flex items-center">
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-10 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 space-y-3">
              <Link
                href="/member/login"
                className="block text-center px-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                로그인
              </Link>
              <Link
                href="/member/join"
                className="block text-center px-4 py-2 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}