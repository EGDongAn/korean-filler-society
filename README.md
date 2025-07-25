# 대한필러학회 홈페이지

## 로컬 테스트 방법

### 1. 개발 서버 실행
```bash
cd /root/projects/homepage/korean-filler-society/
npm run dev
```
→ `http://localhost:3000`에서 확인

### 2. 프로덕션 빌드 테스트 
```bash
npm run build    # 빌드 생성
npm run start    # 프로덕션 모드로 실행
```

## 배포 시 꼬이지 않는 이유

Next.js는 **환경별 자동 최적화**를 지원합니다:

### 개발 환경
- Hot reload, 디버깅 모드
- 실시간 코드 변경 반영

### 프로덕션 환경  
- 코드 압축 및 최적화
- 정적 파일 생성
- 성능 최적화

## 배포 옵션

### 🚀 Vercel (가장 쉬움)
1. GitHub에 코드 업로드
2. Vercel 계정 연결
3. 자동 배포 완료

### 🌐 Netlify
1. GitHub 연결
2. Build 설정: `npm run build`
3. 배포 완료

### 🖥️ 직접 서버
```bash
npm run build
pm2 start npm --name "kfs" -- start
```

## 주요 특징
- ✅ 환경별 자동 설정 분리
- ✅ 이미지 최적화
- ✅ SEO 친화적
- ✅ 모바일 반응형
- ✅ TypeScript 타입 안전성

**결론**: 로컬에서 잘 작동하면 배포에서도 문제없이 작동합니다! Next.js가 모든 환경 차이를 자동으로 처리해줍니다.