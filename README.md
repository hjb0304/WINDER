## 🍷 Winder

와인을 기록하고 추천받는 와인 매니저 서비스  
Firebase + React + Vite 기반 프로젝트

---

## ✨ 주요 기능

- 🔐 회원가입 & 로그인 (Firebase Auth)
- 🏠 홈
  - 오늘의 추천 와인
  - 최근 기록 카드
- 🍷 와인 목록
  - 전체 DB 조회
  - 필터/검색 기능
- 📊 와인 상세
  - 맛 프로필 차트
  - 찜하기 / 기록하기 버튼
- 📝 기록
  - 기록 목록 (카드/리스트 전환, 필터 & 검색)
  - 기록 작성 (사진 첨부, 맛 평가, 메모 저장)
  - 기록 상세 (수정/삭제, 날짜 표시)
- 💖 찜 목록
  - 찜 추가/해제
  - 기록하기 연동
- 🍽 음식 페어링
  - 음식 선택 → 추천 와인 표시
  - 와인 선택 → 추천 음식 표시
- 🙋 마이페이지
  - 프로필 수정
  - 기록 통계 차트
  - 데이터 백업/복원
- ⚙️ 설정
  - 다크모드
  - 알림 토글
  - 계정 관리 (로그인/로그아웃)

---

## 🛠 기술 스택

- **Frontend**: React, TypeScript, Vite
- **State Management**: React Query / Zustand
- **Backend**: Firebase (Auth, Firestore, Functions)
- **Image Upload**: Cloudinary
- **Chart**: Chart.js / Recharts

---

## 📂 프로젝트 구조

```bash
src
 ┣ components/     # UI 컴포넌트
 ┣ pages/          # 페이지 단위 컴포넌트
 ┣ hooks/          # 커스텀 훅
 ┣ lib/            # Firebase, API 등 외부 라이브러리
 ┣ store/          # 전역 상태 관리
 ┣ styles/         # 전역 스타일
 ┗ utils/          # 유틸 함수
```

---

## 🔑 환경 변수 설정

### Firebase 설정

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

### Cloudinary 설정

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset

---

## 🚀 실행 방법

### 패키지 설치

npm install

### 개발 서버 실행

npm run dev

### 빌드

npm run build

---

## 📌 향후 계획

✅ 1차: 핵심 기능 (회원가입/로그인, 홈, 와인 목록/상세, 기록, 찜)

✅ 2차: 확장 기능 (기록 상세 관리, 음식 페어링)

🚧 3차: 마이페이지, 설정, 통계, 다크모드

---

👨‍💻 팀원

Frontend: 배희정

Design & Planning: 배희정
