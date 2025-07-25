'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  TagIcon,
  CalendarIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    hospital: string;
    avatar?: string;
  };
  date: string;
  readTime: number;
  likes: number;
  comments: number;
  tags: string[];
  featured: boolean;
  image?: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: '필러 시술 후 나타날 수 있는 합병증과 대처법',
    excerpt: '필러 시술은 비교적 안전한 시술이지만, 드물게 합병증이 발생할 수 있습니다. 주요 합병증의 종류와 적절한 대처 방법을 알아보겠습니다.',
    content: '필러 시술 후 발생할 수 있는 합병증에는...',
    category: '임상 경험',
    author: {
      name: '김민수',
      role: '성형외과 전문의',
      hospital: '서울대학교병원',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
    },
    date: '2024-12-15',
    readTime: 8,
    likes: 47,
    comments: 12,
    tags: ['합병증', '안전성', '대처법'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    title: '코 필러의 최신 트렌드: 자연스러운 볼륨감 연출하기',
    excerpt: '최근 코 필러 시술에서 주목받고 있는 자연스러운 볼륨감 연출 기법에 대해 실제 시술 경험을 바탕으로 설명드립니다.',
    content: '코 필러 시술의 최신 트렌드는...',
    category: '시술 기법',
    author: {
      name: '박지영',
      role: '피부과 전문의',
      hospital: '강남 JY 피부과',
      avatar: 'https://images.unsplash.com/photo-1594824706995-0ad52be4f6a1?w=100&h=100&fit=crop&crop=face',
    },
    date: '2024-12-12',
    readTime: 6,
    likes: 32,
    comments: 8,
    tags: ['코필러', '시술기법', '자연스러움'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    title: '필러 제품별 특성 비교: 어떤 제품을 선택해야 할까?',
    excerpt: '시중에 출시된 다양한 필러 제품들의 특성을 비교하고, 부위별 적합한 제품 선택 가이드를 제공합니다.',
    content: '필러 제품 선택 시 고려사항은...',
    category: '제품 리뷰',
    author: {
      name: '이준호',
      role: '성형외과 원장',
      hospital: '청담 미학 클리닉',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face',
    },
    date: '2024-12-10',
    readTime: 12,
    likes: 58,
    comments: 15,
    tags: ['제품비교', '선택가이드', '특성분석'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=400&fit=crop',
  },
];

const categories = ['전체', '임상 경험', '시술 기법', '제품 리뷰', '연구 논문', '케이스 스터디'];
const popularTags = ['필러안전성', '시술기법', '합병증관리', '제품비교', '임상경험', '환자상담'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === '전체' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">학술 블로그</h1>
              <p className="text-gray-600">전문의들의 임상 경험과 최신 연구 동향을 공유합니다</p>
            </div>
            <Link
              href="/community/blog/write"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              글 작성하기
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative flex-1 lg:max-w-80">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="제목이나 내용으로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FireIcon className="w-5 h-5 text-orange-500" />
                  <h2 className="text-xl font-semibold text-gray-900">추천 포스트</h2>
                </div>
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                      <div className="md:flex">
                        {post.image && (
                          <div className="md:w-1/3">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              <FireIcon className="w-3 h-3 mr-1" />
                              추천
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                              {post.category}
                            </span>
                          </div>
                          
                          <Link href={`/community/blog/${post.id}`}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                              {post.title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {post.author.avatar ? (
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full mr-3"
                                />
                              ) : (
                                <UserCircleIcon className="w-8 h-8 text-gray-400 mr-3" />
                              )}
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                <p className="text-xs text-gray-500">{post.author.role}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-1" />
                                {new Date(post.date).toLocaleDateString('ko-KR')}
                              </span>
                              <span>{post.readTime}분 읽기</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                    </div>
                    
                    <Link href={`/community/blog/${post.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {post.author.avatar ? (
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                        ) : (
                          <UserCircleIcon className="w-6 h-6 text-gray-400 mr-2" />
                        )}
                        <div>
                          <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('ko-KR')}</p>
                        </div>
                      </div>
                      
                      <span className="text-xs text-gray-500">{post.readTime}분</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                            <TagIcon className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
                        >
                          {likedPosts.includes(post.id) ? (
                            <HeartSolidIcon className="w-4 h-4 text-red-500" />
                          ) : (
                            <HeartIcon className="w-4 h-4" />
                          )}
                          {post.likes}
                        </button>
                        
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <ChatBubbleLeftIcon className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">인기 태그</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    <TagIcon className="w-3 h-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Write CTA */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                경험을 나누어 주세요
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                귀하의 소중한 임상 경험을 다른 전문의들과 공유해 보세요
              </p>
              <Link
                href="/community/blog/write"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                글 작성하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}