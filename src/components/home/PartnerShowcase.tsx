'use client';

import { useState } from 'react';

const partners = {
  platinum: [
    { id: 1, name: 'Allergan', logo: '/partners/allergan.png', category: '플래티넘' },
    { id: 2, name: 'Galderma', logo: '/partners/galderma.png', category: '플래티넘' },
    { id: 3, name: 'Merz', logo: '/partners/merz.png', category: '플래티넘' },
  ],
  gold: [
    { id: 4, name: 'Hugel', logo: '/partners/hugel.png', category: '골드' },
    { id: 5, name: 'Medytox', logo: '/partners/medytox.png', category: '골드' },
    { id: 6, name: 'Daewoong', logo: '/partners/daewoong.png', category: '골드' },
    { id: 7, name: 'LG Chem', logo: '/partners/lgchem.png', category: '골드' },
  ],
  silver: [
    { id: 8, name: 'Jetema', logo: '/partners/jetema.png', category: '실버' },
    { id: 9, name: 'Huons', logo: '/partners/huons.png', category: '실버' },
    { id: 10, name: 'Ildong', logo: '/partners/ildong.png', category: '실버' },
    { id: 11, name: 'Pharma Research', logo: '/partners/pharma.png', category: '실버' },
  ],
};

export default function PartnerShowcase() {
  const [activeTab, setActiveTab] = useState<'platinum' | 'gold' | 'silver'>('platinum');

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            파트너사
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대한필러학회와 함께하는 믿을 수 있는 파트너사들을 소개합니다
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('platinum')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'platinum'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              플래티넘
            </button>
            <button
              onClick={() => setActiveTab('gold')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'gold'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              골드
            </button>
            <button
              onClick={() => setActiveTab('silver')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'silver'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              실버
            </button>
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners[activeTab].map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-medium transition-all duration-300 group cursor-pointer"
            >
              {/* 실제 로고 이미지가 없으므로 텍스트로 대체 */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{partner.category} 파트너</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            대한필러학회의 파트너가 되어 함께 성장하세요
          </p>
          <a
            href="/sponsor/guide"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all"
          >
            파트너십 안내
          </a>
        </div>
      </div>
    </section>
  );
}