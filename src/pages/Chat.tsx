import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  const mockMessages = [
    {
      type: "weather",
      content: "☀️ 8:00 서울 중구\n맑음 27도\n최고 30도 / 최저 18도",
    },
    {
      type: "user",
      content: "오늘 뭐 입을까? 반팔이 좋겠지?",
    },
    {
      type: "ai",
      content:
        "응! 오늘은 정말 더운 날씨야. 햇빛도 강하고, 오후엔 열대야처럼 느껴질 수 있어. 활동량이 많다면 땀 배출 잘 되는 옷이 중요해!\n흰색 리넨 반팔 셔츠에 반바지를 매치해봐.\n신발은 통기성 좋은 슬리퍼나 샌들이 좋고!",
    },
    {
      type: "user",
      content: "내 옷장에 흰색 셔츠 있었나?",
    },
    {
      type: "ai",
      content:
        "있지! 지난주에 등록한 무지 리넨 셔츠 있잖아.\n사진 한 번 다시 보여줄까?",
      image: "/top-4.jpg",
    },
    {
      type: "user",
      content: "아 맞다. 그거 입으면 땀 안 차려나?",
    },
    {
      type: "ai",
      content:
        "리넨은 통기성 최고지. 땀이 나도 금방 마르고,\n몸에 달라붙지 않아서 여름철 최적이야.\n그리고 안에 흰색 이너티 한 겹 받쳐 입는 것도 추천!",
    },
    {
      type: "user",
      content: "신발은 뭐 신지? 운동화 신기엔 더워.",
    },
    {
      type: "ai",
      content:
        "운동화는 더울 수 있어.\n이번에 등록한 검정 샌들 기억나?\n걔가 통풍도 좋고 캐주얼해서 오늘 딱이야!",
      image: "/shoe-4.webp",
    },
    {
      type: "user",
      content: "그래서 어떻게 입으라는건데?",
    },
    {
      type: "ai",
      content: "이런 스타일 어때? 관련 상품도 참고해봐!",
      image: "/style-1.png",
      link: "https://www.moibzi.com/app/contents/1000000001",
    },
    {
      type: "user",
      content: "좋아! 그럼 오늘은 이렇게 입을게.\n고마워!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      <header className="px-4 py-6 text-start text-xl font-bold flex flex-row items-center justify-start gap-4 bg-white shadow">
        <button
          className="text-gray-500 hover:text-gray-800 transition-colors w-8 h-8 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        신형님의 옷장
      </header>

      <main className="flex-1 px-4 py-4 flex flex-col space-y-4">
        {mockMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[85%] rounded-xl p-4 shadow text-base whitespace-pre-line flex flex-col gap-2 ${
              msg.type === "user"
                ? "bg-blue-100 self-end ml-auto"
                : msg.type === "ai"
                ? "bg-white self-start"
                : "bg-yellow-100 mx-auto text-center w-full max-w-full"
            }`}
          >
            <p className="mb-1">{msg.content}</p>
            {msg.image && (
              <img
                src={msg.image}
                alt="추천 이미지"
                className="mt-2 rounded-lg object-cover max-w-96 w-full"
              />
            )}
            {msg.link && (
              <a
                href={msg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                {msg.link}
              </a>
            )}
          </div>
        ))}
        {/* Input Box */}
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <form className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-gray-700"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-black transition-colors"
            >
              보내기
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
