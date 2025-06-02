import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      {/* Header */}
      <header className="px-4 py-6 text-start text-xl font-bold">
        OutfitChat
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 py-2 space-y-4">
        <div className="flex flex-row gap-2 items-stretch">
          <div className="flex flex-col gap-2 w-full items-stretch">
            {/* 날씨 */}
            <Link
              className="bg-white rounded-xl shadow p-4 flex items-center justify-between row-span-1 col-span-1"
              to="/chat/250612-weather"
            >
              <div>
                <div className="text-sm text-gray-500">서울특별시</div>
                <div className="text-2xl font-bold">20°</div>
                <div className="text-gray-600">비</div>
              </div>
              <div className="text-3xl">☔️</div> {/* 우산 아이콘 */}
            </Link>
            {/* 출근 준비 */}
            <Link
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center gap-4"
              to="/chat/250612-work"
            >
              <div className="text-base font-semibold text-gray-500">
                내 출근룩
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl shadow overflow-hidden">
                <img
                  src="/250612-work.jpeg"
                  alt="출근 준비"
                  className="w-full object-cover"
                />
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-2 w-full items-stretch justify-center">
            {/* 오늘의 추천 */}
            <Link
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center gap-4"
              to="/chat/250612-today"
            >
              <div className="text-base font-semibold text-gray-500">
                오늘의 추천
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl shadow overflow-hidden">
                <img
                  src="/250612-today.png"
                  alt="오늘의 추천"
                  className="w-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* 옷장과 대화 버튼 */}
        <Link
          to="/chat/new"
          className="block w-full bg-black text-white text-center py-3 rounded-xl font-semibold"
        >
          옷장과 대화하러 가기
        </Link>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
