## 🍷 WINDER 프로젝트 소개

사용자가 마셨던 와인에 대한 정보를 상세하게 기록할 수 있는 모바일 웹 서비스입니다.

🔗 **배포 링크**: [winder.vercel.app](https://winder.vercel.app)

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
  - 로그아웃
  - 회원 탈퇴

## 🛠 기술 스택

| 분야                 | 기술 스택                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend**         | <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?&style=for-the-badge&logo=tailwind%20css&logoColor=white" /> |
| **State Management** | ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) <img src="https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=yellow" />                                                                                                                                    |
| **Backend**          | <img src="https://img.shields.io/badge/firebase-%23FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=black" />                                                                                                                                                                                                                                                     |
| **Image Upload**     | <img src="https://img.shields.io/badge/cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />                                                                                                                                                                                                                                                         |
| **Chart**            | <img src="https://img.shields.io/badge/recharts-00C49F?style=for-the-badge&logo=recharts&logoColor=white" />                                                                                                                                                                                                                                                             |

## 📂 프로젝트 구조

```bash
src
 ┣ api/            # API 호출 함수
 ┣ assets/         # 이미지, 아이콘, css
 ┣ data/           # 와인/음식 데이터
 ┣ components/     # UI 컴포넌트
 ┣ lib/            # firebase 설정
 ┣ pages/          # 페이지 단위 컴포넌트
 ┣ store/          # 전역 상태 관리
 ┗ type/           # 타입 파일
```

## 🔑 환경 변수 설정

### Firebase 설정

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Cloudinary 설정

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

## 🚀 설치&실행 방법

```
git clone https://github.com/username/winder.git
cd winder
npm install
npm run dev
```

## 📌 일정

✅ 1차: 핵심 기능 (회원가입/로그인, 홈, 와인 목록/상세, 기록, 찜)

✅ 2차: 확장 기능 (기록 상세 관리, 음식 페어링)

🚧 3차: 마이페이지, 설정, 성능/접근성 개선

## 👨‍💻 팀원

Frontend: 배희정

Design & Planning: 배희정
