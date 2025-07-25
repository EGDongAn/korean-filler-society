'use client';

import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const footerLinks = {
  학회소개: [
    { name: '학회개요', href: '/about/overview' },
    { name: '조직도 및 임원진', href: '/about/organization' },
    { name: '연혁', href: '/about/history' },
    { name: '찾아오시는 길', href: '/about/location' },
  ],
  학술활동: [
    { name: '학술대회', href: '/conference' },
    { name: '온라인 강의', href: '/education/online' },
    { name: '학술자료', href: '/education/resources' },
    { name: '가이드라인', href: '/education/guidelines' },
  ],
  회원서비스: [
    { name: '회원가입', href: '/member/join' },
    { name: '회원혜택', href: '/member/benefits' },
    { name: '회비납부', href: '/member/payment' },
    { name: '마이페이지', href: '/member/mypage' },
  ],
  고객지원: [
    { name: '공지사항', href: '/community/notice' },
    { name: '자주 묻는 질문', href: '/support/faq' },
    { name: '문의하기', href: '/support/contact' },
    { name: '개인정보처리방침', href: '/policy/privacy' },
  ],
};

const socialLinks = [
  { name: 'YouTube', href: '#', icon: 'youtube' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">대한필러학회</h3>
              <p className="text-gray-400 text-sm">Korean Filler Society</p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              대한민국 필러 의학의 발전을 위해 노력하는 전문 의료진의 학술 단체입니다. 
              안전하고 효과적인 필러 시술을 위한 교육과 연구에 앞장서고 있습니다.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  서울특별시 강남구 테헤란로 123<br />
                  메디컬타워 15층
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-gray-400">02-555-1234</p>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-gray-400">info@kfillersociety.org</p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-gray-400">평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold mb-2">뉴스레터 구독</h4>
              <p className="text-sm text-gray-400">
                학회 소식과 최신 교육 정보를 이메일로 받아보세요
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 대한필러학회. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label={social.name}
              >
                {/* 실제 아이콘 대신 텍스트로 표시 */}
                <span className="text-xs font-medium">{social.icon[0].toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/policy/privacy" className="text-gray-400 hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/policy/terms" className="text-gray-400 hover:text-white transition-colors">
              이용약관
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}