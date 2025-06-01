import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 z-10">
      <Link to="/" className="flex flex-col items-center text-sm">
        <span>🏠</span>
        <span>홈</span>
      </Link>
      <Link to="/closet" className="flex flex-col items-center text-sm">
        <span>📁</span>
        <span>옷장</span>
      </Link>
      <Link to="/community" className="flex flex-col items-center text-sm">
        <span>👥</span>
        <span>커뮤니티</span>
      </Link>
      {/* <Link to="/chat" className="flex flex-col items-center text-sm">
        <span>💬</span>
        <span>대화</span>
      </Link> */}
      <Link to="/profile" className="flex flex-col items-center text-sm">
        <span>👤</span>
        <span>내 정보</span>
      </Link>
    </nav>
  );
}
