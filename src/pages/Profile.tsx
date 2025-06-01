import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      {/* Header */}
      <header className="px-4 py-6 text-start text-xl font-bold">
        내 정보
      </header>

      {/* Profile Section */}
      <main className="flex-1 px-4 py-2 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center mb-4 overflow-clip rounded-full">
            <img
              src="/profile.png"
              alt="홍길동 프로필 사진"
              className="w-full aspect-square object-cover"
            />
          </div>
          <h2 className="text-lg font-bold mb-1">홍길동</h2>
          <p className="text-sm text-gray-500 mb-2">hong@outfitchat.kr</p>
          <div className="w-full border-t pt-4 space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">나이:</span> 29세
            </p>
            <p>
              <span className="font-medium">키:</span> 175cm
            </p>
            <p>
              <span className="font-medium">몸무게:</span> 70kg
            </p>
          </div>
          <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded-xl text-sm font-semibold hover:bg-gray-700">
            내 정보 수정하기
          </button>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-2xl shadow-md divide-y text-sm text-gray-700 overflow-hidden">
          <button className="w-full text-left px-6 py-4 hover:bg-gray-50">
            내 옷장 설정
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-50">
            스타일 선호도 설정
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-50">
            앱 알림 설정
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-50">
            자주 묻는 질문
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-50">
            문의하기
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
