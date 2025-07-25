'use client';

import { useState } from 'react';
import { 
  CalendarIcon,
  MapPinIcon,
  CreditCardIcon,
  UserGroupIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface RegistrationForm {
  // 참가자 정보
  memberType: 'doctor' | 'nurse' | 'student' | 'industry';
  registrationType: 'early' | 'regular' | 'onsite';
  
  // 선택 사항
  sessions: string[];
  meals: {
    lunch1: boolean;
    lunch2: boolean;
    dinner: boolean;
  };
  accommodation: 'none' | 'single' | 'double';
  
  // 결제 정보
  paymentMethod: 'card' | 'transfer' | 'corporate';
  
  // 추가 정보
  dietaryRestrictions: string;
  specialRequests: string;
}

const conferenceInfo = {
  title: '2025 대한필러학회 춘계 학술대회',
  subtitle: 'Advanced Filler Techniques: Innovation & Safety',
  date: '2025년 3월 15일(토) - 16일(일)',
  location: '서울 코엑스 그랜드볼룸',
  earlyBirdDeadline: '2025년 2월 15일',
};

const registrationFees = {
  doctor: {
    early: 150000,
    regular: 200000,
    onsite: 250000,
  },
  nurse: {
    early: 80000,
    regular: 100000,
    onsite: 120000,
  },
  student: {
    early: 50000,
    regular: 70000,
    onsite: 90000,
  },
  industry: {
    early: 250000,
    regular: 300000,
    onsite: 350000,
  },
};

const additionalOptions = {
  lunch: 25000,
  dinner: 55000,
  accommodation: {
    single: 120000,
    double: 80000,
  },
};

const sessions = [
  { id: 'basic', name: '기초 필러 시술 과정', duration: '3시간', fee: 50000 },
  { id: 'advanced', name: '고급 필러 테크닉', duration: '4시간', fee: 80000 },
  { id: 'complications', name: '합병증 관리 워크샵', duration: '2시간', fee: 40000 },
  { id: 'products', name: '신제품 소개 세미나', duration: '1시간', fee: 0 },
];

export default function ConferenceRegistrationPage() {
  const [formData, setFormData] = useState<RegistrationForm>({
    memberType: 'doctor',
    registrationType: 'early',
    sessions: [],
    meals: {
      lunch1: false,
      lunch2: false,
      dinner: false,
    },
    accommodation: 'none',
    paymentMethod: 'card',
    dietaryRestrictions: '',
    specialRequests: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateTotal = () => {
    let total = registrationFees[formData.memberType][formData.registrationType];
    
    // 세션 비용 추가
    formData.sessions.forEach(sessionId => {
      const session = sessions.find(s => s.id === sessionId);
      if (session) total += session.fee;
    });
    
    // 식사 비용 추가
    if (formData.meals.lunch1 || formData.meals.lunch2) {
      total += additionalOptions.lunch * (formData.meals.lunch1 ? 1 : 0) + 
              additionalOptions.lunch * (formData.meals.lunch2 ? 1 : 0);
    }
    if (formData.meals.dinner) total += additionalOptions.dinner;
    
    // 숙박 비용 추가
    if (formData.accommodation !== 'none') {
      total += additionalOptions.accommodation[formData.accommodation];
    }
    
    return total;
  };

  const handleSessionToggle = (sessionId: string) => {
    setFormData(prev => ({
      ...prev,
      sessions: prev.sessions.includes(sessionId)
        ? prev.sessions.filter(id => id !== sessionId)
        : [...prev.sessions, sessionId]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // TODO: API 호출로 결제 처리
      console.log('등록 데이터:', formData);
      console.log('총 비용:', calculateTotal());
      
      // 성공 처리
      alert('등록이 완료되었습니다! 확인 이메일을 발송해드렸습니다.');
      
    } catch (error) {
      console.error('등록 오류:', error);
      alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {conferenceInfo.title}
            </h1>
            <p className="text-xl text-primary-600 font-medium mb-4">
              {conferenceInfo.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                {conferenceInfo.date}
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                {conferenceInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Early Bird Notice */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <p className="font-medium text-orange-800">
                Early Bird 할인 마감: {conferenceInfo.earlyBirdDeadline}
              </p>
              <p className="text-sm text-orange-600">
                지금 등록하시면 최대 30% 할인 혜택을 받으실 수 있습니다!
              </p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: '참가자 정보' },
              { step: 2, title: '프로그램 선택' },
              { step: 3, title: '부가 서비스' },
              { step: 4, title: '결제' },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= item.step 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > item.step ? (
                    <CheckCircleIcon className="w-5 h-5" />
                  ) : (
                    item.step
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= item.step ? 'text-primary-600' : 'text-gray-500'
                }`}>
                  {item.title}
                </span>
                {index < 3 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > item.step ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          {/* Step 1: 참가자 정보 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">참가자 정보</h2>
              
              {/* Member Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  참가자 유형
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries({
                    doctor: { name: '의사', desc: '전문의, 일반의' },
                    nurse: { name: '간호사', desc: '간호사, 코디네이터' },
                    student: { name: '학생', desc: '의과대학생, 간호대학생' },
                    industry: { name: '업계관계자', desc: '제약회사, 의료기기회사' },
                  }).map(([key, value]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, memberType: key as any }))}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.memberType === key
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{value.name}</div>
                      <div className="text-sm text-gray-500">{value.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Registration Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  등록 유형
                </label>
                <div className="space-y-3">
                  {Object.entries({
                    early: { name: 'Early Bird', desc: '2025년 2월 15일까지', discount: '30% 할인' },
                    regular: { name: '정규 등록', desc: '2025년 3월 10일까지', discount: '' },
                    onsite: { name: '현장 등록', desc: '당일 등록', discount: '추가 비용' },
                  }).map(([key, value]) => (
                    <div
                      key={key}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.registrationType === key
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, registrationType: key as any }))}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-900">{value.name}</div>
                          <div className="text-sm text-gray-500">{value.desc}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">
                            ₩{registrationFees[formData.memberType][key as keyof typeof registrationFees.doctor].toLocaleString()}
                          </div>
                          {value.discount && (
                            <div className="text-sm text-primary-600">{value.discount}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  다음 단계
                </button>
              </div>
            </div>
          )}

          {/* Step 2: 프로그램 선택 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">프로그램 선택</h2>
              
              <div className="space-y-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.sessions.includes(session.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleSessionToggle(session.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{session.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">소요시간: {session.duration}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-bold text-lg text-gray-900">
                          {session.fee === 0 ? '무료' : `₩${session.fee.toLocaleString()}`}
                        </div>
                        {formData.sessions.includes(session.id) && (
                          <CheckCircleIcon className="w-5 h-5 text-primary-600 mt-1 ml-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  이전 단계
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  다음 단계
                </button>
              </div>
            </div>
          )}

          {/* Step 3: 부가 서비스 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">부가 서비스</h2>
              
              {/* Meals */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">식사 옵션</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.meals.lunch1}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        meals: { ...prev.meals, lunch1: e.target.checked }
                      }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span>3월 15일 점심 (₩{additionalOptions.lunch.toLocaleString()})</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.meals.lunch2}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        meals: { ...prev.meals, lunch2: e.target.checked }
                      }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span>3월 16일 점심 (₩{additionalOptions.lunch.toLocaleString()})</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.meals.dinner}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        meals: { ...prev.meals, dinner: e.target.checked }
                      }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span>3월 15일 만찬 (₩{additionalOptions.dinner.toLocaleString()})</span>
                  </label>
                </div>
              </div>

              {/* Accommodation */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">숙박 옵션</h3>
                <div className="space-y-3">
                  {Object.entries({
                    none: { name: '숙박 불필요', fee: 0 },
                    single: { name: '싱글룸 (1박)', fee: additionalOptions.accommodation.single },
                    double: { name: '더블룸 (1박)', fee: additionalOptions.accommodation.double },
                  }).map(([key, value]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="radio"
                        name="accommodation"
                        value={key}
                        checked={formData.accommodation === key}
                        onChange={() => setFormData(prev => ({ ...prev, accommodation: key as any }))}
                        className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span>
                        {value.name} 
                        {value.fee > 0 && ` (₩${value.fee.toLocaleString()})`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  식이 제한사항 (선택)
                </label>
                <input
                  type="text"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="예: 채식주의자, 견과류 알레르기 등"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  기타 요청사항 (선택)
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="기타 요청사항이 있으시면 입력해 주세요"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  이전 단계
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  결제하기
                </button>
              </div>
            </div>
          )}

          {/* Step 4: 결제 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">결제 정보</h2>
              
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">주문 요약</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>기본 등록비 ({formData.memberType} - {formData.registrationType})</span>
                    <span>₩{registrationFees[formData.memberType][formData.registrationType].toLocaleString()}</span>
                  </div>
                  
                  {formData.sessions.map(sessionId => {
                    const session = sessions.find(s => s.id === sessionId);
                    return session && (
                      <div key={sessionId} className="flex justify-between">
                        <span>{session.name}</span>
                        <span>₩{session.fee.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  
                  {(formData.meals.lunch1 || formData.meals.lunch2 || formData.meals.dinner) && (
                    <div className="border-t pt-2 mt-2">
                      {formData.meals.lunch1 && (
                        <div className="flex justify-between">
                          <span>3월 15일 점심</span>
                          <span>₩{additionalOptions.lunch.toLocaleString()}</span>
                        </div>
                      )}
                      {formData.meals.lunch2 && (
                        <div className="flex justify-between">
                          <span>3월 16일 점심</span>
                          <span>₩{additionalOptions.lunch.toLocaleString()}</span>
                        </div>
                      )}
                      {formData.meals.dinner && (
                        <div className="flex justify-between">
                          <span>3월 15일 만찬</span>
                          <span>₩{additionalOptions.dinner.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {formData.accommodation !== 'none' && (
                    <div className="flex justify-between">
                      <span>숙박 ({formData.accommodation})</span>
                      <span>₩{additionalOptions.accommodation[formData.accommodation].toLocaleString()}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>총 결제 금액</span>
                    <span className="text-primary-600">₩{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">결제 방법</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <CreditCardIcon className="w-5 h-5 mr-2" />
                    <span>신용카드</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={() => setFormData(prev => ({ ...prev, paymentMethod: 'transfer' }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span>계좌이체</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="corporate"
                      checked={formData.paymentMethod === 'corporate'}
                      onChange={() => setFormData(prev => ({ ...prev, paymentMethod: 'corporate' }))}
                      className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span>법인카드/세금계산서</span>
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <InformationCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-2">환불 정책</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>학술대회 7일 전까지: 100% 환불</li>
                      <li>학술대회 3-7일 전: 50% 환불</li>
                      <li>학술대회 3일 전 이후: 환불 불가</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
                <span className="text-sm text-gray-700">
                  위 환불 정책을 확인하였으며 동의합니다.
                </span>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  이전 단계
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? '처리 중...' : `₩${calculateTotal().toLocaleString()} 결제하기`}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}