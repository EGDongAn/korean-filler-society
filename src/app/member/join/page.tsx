'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  UserIcon, 
  UserCircleIcon, 
  BuildingOfficeIcon,
  CheckCircleIcon,
  DocumentArrowUpIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

type MemberType = 'general' | 'doctor' | 'industry';

interface FormData {
  memberType: MemberType;
  // 기본 정보
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  // 의사회원 추가 정보
  medicalLicense?: string;
  hospital?: string;
  department?: string;
  specialization?: string;
  licenseFile?: File;
  // 업계관계자 추가 정보
  company?: string;
  position?: string;
  businessType?: string;
}

const memberTypes = [
  {
    id: 'general' as MemberType,
    name: '일반회원',
    description: '기본 정보 열람 및 제한적 학술대회 참가',
    icon: UserIcon,
    color: 'border-gray-300 text-gray-700',
    selectedColor: 'border-primary-500 bg-primary-50 text-primary-700',
  },
  {
    id: 'doctor' as MemberType,
    name: '의사회원',
    description: '모든 학술대회 참가, 강의 등록, 강의록 제출 가능',
    icon: UserCircleIcon,
    color: 'border-gray-300 text-gray-700',
    selectedColor: 'border-primary-500 bg-primary-50 text-primary-700',
  },
  {
    id: 'industry' as MemberType,
    name: '업계관계자',
    description: '제약회사, 의료기기 회사, 유통업체 관계자',
    icon: BuildingOfficeIcon,
    color: 'border-gray-300 text-gray-700',
    selectedColor: 'border-primary-500 bg-primary-50 text-primary-700',
  },
];

const departments = [
  '성형외과', '피부과', '일반의', '가정의학과', '내과', '외과', '기타'
];

const businessTypes = [
  '제약회사', '의료기기 회사', '유통업체', '마케팅/세일즈', '컨설턴트', '기타'
];

export default function MemberJoinPage() {
  const [formData, setFormData] = useState<FormData>({
    memberType: 'general',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | File) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // 기본 정보 검증
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.phone) {
      newErrors.phone = '전화번호를 입력해주세요.';
    }

    // 의사회원 추가 검증
    if (formData.memberType === 'doctor') {
      if (!formData.medicalLicense) {
        newErrors.medicalLicense = '의사면허번호를 입력해주세요.';
      }
      if (!formData.hospital) {
        newErrors.hospital = '근무 병원/클리닉을 입력해주세요.';
      }
      if (!formData.department) {
        newErrors.department = '진료과목을 선택해주세요.';
      }
    }

    // 업계관계자 추가 검증
    if (formData.memberType === 'industry') {
      if (!formData.company) {
        newErrors.company = '회사명을 입력해주세요.';
      }
      if (!formData.businessType) {
        newErrors.businessType = '업종을 선택해주세요.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: API 호출로 회원가입 처리
      console.log('회원가입 데이터:', formData);
      
      // 임시 성공 처리
      alert('회원가입이 완료되었습니다. 의사회원의 경우 관리자 승인 후 활성화됩니다.');
      
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">회원가입</h1>
          <p className="text-gray-600">대한필러학회 회원이 되어 다양한 혜택을 누리세요</p>
        </div>

        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {/* 회원 유형 선택 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">회원 유형 선택</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {memberTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.memberType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleInputChange('memberType', type.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        isSelected ? type.selectedColor : type.color
                      } hover:border-primary-300`}
                    >
                      <div className="flex items-center mb-2">
                        <Icon className="h-6 w-6 mr-2" />
                        <span className="font-medium">{type.name}</span>
                        {isSelected && <CheckCircleIcon className="h-5 w-5 ml-auto text-primary-600" />}
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 기본 정보 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">기본 정보</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름 *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="홍길동"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호 *
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="8자 이상 입력"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호 확인 *
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="비밀번호 재입력"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* 의사회원 추가 정보 */}
            {formData.memberType === 'doctor' && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">의사회원 추가 정보</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      의사면허번호 *
                    </label>
                    <input
                      type="text"
                      value={formData.medicalLicense || ''}
                      onChange={(e) => handleInputChange('medicalLicense', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.medicalLicense ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="면허번호 입력"
                    />
                    {errors.medicalLicense && <p className="text-red-500 text-sm mt-1">{errors.medicalLicense}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      근무 병원/클리닉 *
                    </label>
                    <input
                      type="text"
                      value={formData.hospital || ''}
                      onChange={(e) => handleInputChange('hospital', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.hospital ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="병원명 입력"
                    />
                    {errors.hospital && <p className="text-red-500 text-sm mt-1">{errors.hospital}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      진료과목 *
                    </label>
                    <select
                      value={formData.department || ''}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.department ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">진료과목 선택</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      전문 분야 (선택)
                    </label>
                    <input
                      type="text"
                      value={formData.specialization || ''}
                      onChange={(e) => handleInputChange('specialization', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="예: 필러, 보톡스, 레이저"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      의사면허증 (관리자 승인용)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary-300 transition-colors">
                      <div className="space-y-1 text-center">
                        <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500">
                            <span>파일 업로드</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleInputChange('licenseFile', file);
                              }}
                            />
                          </label>
                          <p className="pl-1">또는 드래그 앤 드롭</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (최대 10MB)</p>
                      </div>
                    </div>
                    {formData.licenseFile && (
                      <p className="mt-2 text-sm text-green-600 flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-1" />
                        {formData.licenseFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 업계관계자 추가 정보 */}
            {formData.memberType === 'industry' && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">업계관계자 추가 정보</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      value={formData.company || ''}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.company ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="회사명 입력"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      직책 (선택)
                    </label>
                    <input
                      type="text"
                      value={formData.position || ''}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="직책 입력"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      업종 *
                    </label>
                    <select
                      value={formData.businessType || ''}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.businessType ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">업종 선택</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* 약관 동의 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">약관 동의</h2>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" required />
                  <span className="text-sm text-gray-700">
                    <Link href="/policy/terms" className="text-primary-600 hover:underline">
                      이용약관
                    </Link>에 동의합니다. (필수)
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" required />
                  <span className="text-sm text-gray-700">
                    <Link href="/policy/privacy" className="text-primary-600 hover:underline">
                      개인정보처리방침
                    </Link>에 동의합니다. (필수)
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-700">
                    마케팅 정보 수신에 동의합니다. (선택)
                  </span>
                </label>
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link
                href="/member/login"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                이미 계정이 있으신가요?
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? '처리 중...' : '회원가입'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}