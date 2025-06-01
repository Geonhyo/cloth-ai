import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const posts = [
  { id: 1, title: "이 신상 좋더라..", date: "2025.06.05", comments: 2 },
  {
    id: 2,
    title: "충무로에 옷 가게 추천해줘",
    date: "2025.06.05",
    comments: 5,
  },
  { id: 3, title: "이번 주 날씨 공유", date: "2025.06.05", comments: 1 },
  { id: 4, title: "패션 소품 추천해주세요", date: "2025.06.05", comments: 7 },
  { id: 5, title: "운동복 어디서 사시나요?", date: "2025.06.05", comments: 3 },
  {
    id: 6,
    title: "여름 옷 쇼핑 같이 하실 분?",
    date: "2025.06.05",
    comments: 0,
  },
  { id: 7, title: "요즘 날씨에 뭐 입으세요?", date: "2025.06.05", comments: 4 },
  { id: 8, title: "신발 추천 받아요", date: "2025.06.05", comments: 6 },
  { id: 9, title: "빈티지 숍 후기 공유", date: "2025.06.05", comments: 2 },
  {
    id: 10,
    title: "이번 주말 벼룩시장 정보",
    date: "2025.06.05",
    comments: 5,
  },
];

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      {/* Header */}
      <header className="px-4 py-6 text-start text-xl font-bold flex flex-row items-center justify-between">
        커뮤니티
        <Link
          to="/community/new"
          className="text-sm text-white bg-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
        >
          새 글 쓰기
        </Link>
      </header>

      {/* List */}
      <main className="flex-1 px-4 divide-y overflow-y-auto pb-28">
        {posts.map((post) => (
          <div key={post.id} className="py-4 flex justify-between items-start">
            <div>
              <div className="text-base font-medium mb-1">{post.title}</div>
              <div className="text-sm text-gray-400">{post.date}</div>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap mt-1">
              댓글 {post.comments}
            </div>
          </div>
        ))}
      </main>
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
