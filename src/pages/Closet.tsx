import { useState } from "react";
import BottomNav from "../components/BottomNav";

type Tab = "아우터" | "상의" | "하의" | "신발" | "기타";

export default function Closet() {
  const [activeTab, setActiveTab] = useState<Tab>("상의");

  const outerItems = ["/outer-1.jpg", "/outer-2.jpg", "/outer-3.jpg"];
  const topItems = ["/top-1.jpg", "/top-2.jpg", "/top-3.jpg", "/top-4.jpg"];
  const bottomItems = ["/bottom-1.jpg", "/bottom-2.jpg", "/bottom-3.webp"];
  const shoeItems = [
    "/shoe-1.jpg",
    "/shoe-2.jpeg",
    "/shoe-3.webp",
    "/shoe-4.webp",
  ];
  const otherItems = ["/other-1.webp", "/other-2.jpg", "/other-3.jpg"];

  const items = {
    아우터: outerItems,
    상의: topItems,
    하의: bottomItems,
    신발: shoeItems,
    기타: otherItems,
  } as Record<Tab, string[]>;

  return (
    <div className="min-h-screen pb-16">
      <header className="px-4 py-6 text-start text-xl font-bold flex flex-row items-center justify-between">
        내 옷장
        <div className="cursor-pointer text-sm text-white bg-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
          + 아이템 등록
        </div>
      </header>

      {/* Tabs */}
      <div className="w-full flex flex-row items-center border-b mb-4 overflow-x-auto">
        {Object.keys(items).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as Tab)}
            className={`w-24 flex-shrink-0 py-2 px-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid View */}
      <main className="px-4 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {items[activeTab].map((item, index) => (
            <div
              key={item}
              className="aspect-square bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={item}
                alt={`${activeTab} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
