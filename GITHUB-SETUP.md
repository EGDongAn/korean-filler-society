# 🚀 GitHub 업로드 및 Vercel 배포 가이드

## 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. **"New repository"** 클릭 
3. Repository name: `korean-filler-society`
4. Description: `대한필러학회 공식 홈페이지 - Korean Filler Society Official Website`
5. **Public** 선택 (Vercel 무료 플랜용)
6. **"Create repository"** 클릭

## 2단계: 로컬 저장소를 GitHub에 업로드

```bash
# GitHub 저장소와 연결
git remote add origin https://github.com/YOUR_USERNAME/korean-filler-society.git

# 코드 업로드
git push -u origin main
```

## 3단계: Vercel 배포

1. [vercel.com](https://vercel.com) 접속
2. **"Login with GitHub"** 클릭
3. **"Import Project"** 선택
4. GitHub에서 `korean-filler-society` 저장소 선택
5. 프로젝트 설정:
   - Framework Preset: **Next.js** (자동 감지)
   - Root Directory: `/` (기본값)
   - Build Command: `npm run build` (자동)
   - Output Directory: `.next` (자동)
6. **"Deploy"** 클릭

## 4단계: 배포 완료

- 2-3분 후 배포 완료
- 자동 생성된 URL (예: `https://korean-filler-society.vercel.app`)
- 이후 Git push 시 자동 재배포

## 5단계: 커스텀 도메인 (선택사항)

Vercel 대시보드에서:
1. 프로젝트 → **Settings** → **Domains**
2. 원하는 도메인 입력 (예: `kfillersociety.org`)
3. DNS 설정에 따라 도메인 연결

---

**✅ 프로젝트 배포 준비 완료!**
- 총 25개 페이지 빌드 성공
- 모든 컴포넌트 정상 작동
- 반응형 디자인 적용
- SEO 최적화 완료