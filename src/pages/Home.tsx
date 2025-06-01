import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      {/* Header */}
      <header className="px-4 py-6 text-start text-xl font-bold">
        내일 뭐 입지?
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 py-2 space-y-4">
        <div className="flex-1 grid grid-cols-[1fr_2fr] grid-rows-[1fr_2fr]  gap-4">
          {/* 날씨 */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between row-span-1 col-span-1">
            <div>
              <div className="text-sm text-gray-500">서울특별시</div>
              <div className="text-2xl font-bold">17°</div>
              <div className="text-gray-600">비</div>
            </div>
            <div className="text-3xl">☔️</div> {/* 우산 아이콘 */}
          </div>

          {/* 출근 준비 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center gap-1 row-start-2 col-start-1">
            <div className="text-base font-semibold text-gray-500">
              출근 준비
            </div>
            <img src="/work-outfit.png" alt="출근 준비" className="w-full" />
          </div>

          {/* 오늘의 추천 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center gap-1 row-span-2 col-start-2 row-start-1">
            <div className="text-lg font-semibold text-gray-500">
              오늘의 추천
            </div>
            <img
              src="/recommend-outfit.png"
              alt="오늘의 추천"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* 옷장과 대화 버튼 */}
        <Link
          to="/chat"
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
