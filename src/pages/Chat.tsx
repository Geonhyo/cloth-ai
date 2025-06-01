import { useNavigate, useParams } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();

  const mockData: Record<
    string,
    { type: string; content?: string; image?: string; link?: string }[]
  > = {
    new: [
      {
        type: "user",
        content: "내일 제주도 여행 가는데, 날씨가 어떨까?",
      },
      {
        type: "ai",
        content: "잠시만 기다려 줘. 날씨 정보를 확인해볼게.",
      },
      {
        type: "weather",
        content: "🌤️ 25/06/13 제주\n맑음 27도\n최고 30도 / 최저 18도",
      },
      {
        type: "user",
        content: "그럼 뭐 입을까? 반팔이 좋겠지?",
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
          "리넨은 통기성 최고지. 땀이 나도 금방 마르고, 몸에 달라붙지 않아서 여름철 최적이야.\n\n그리고 안에 흰색 이너티 한 겹 받쳐 입는 것도 추천!",
      },
      {
        type: "user",
        content: "신발은 뭐 신지? 운동화 신기엔 더울까?",
      },
      {
        type: "ai",
        content:
          "운동화는 더울 수 있어.\n이번에 등록한 검정 샌들 기억나?\n걔가 통풍도 좋고 캐주얼해서 안성맞춤이야!\n\n전체 코디도 추천해줄까?",
        image: "/shoe-4.webp",
      },
      {
        type: "user",
        content: "응! 전체 코디 보여줘.",
      },
      {
        type: "ai",
        content: "이런 스타일 어때? 하의는 아래 제품으로 추천할게.",
        image: "/style-1.png",
        link: "https://www.moibzi.com/app/contents/1000000001",
      },
      {
        type: "user",
        content: "좋아! 그럼 이렇게 준비해야겠다.\n고마워!",
      },
    ],
    "250612-weather": [
      {
        type: "ai",
        content: `오늘은 오전에 가볍게 비가 내리고 기온이 20도 내외로 낮아. 그래서 평소보다는 조금 더 따뜻한 옷을 입는 게 좋겠어. 네 옷장에 있는 아이템 중에서 다음과 같은 조합을 추천할게.
          
          1. 상의: 얇은 맨투맨
          2. 하의: 긴바지
          3. 신발: 샌들, 통기성 좋은 운동화,
          4. 기타: 우산, 가벼운 바람막이`,
        image: "/250612-weather.png",
      },
      {
        type: "ai",
        content:
          "원하는 스타일이나 아이템이 있으면 말해줘. 더 구체적으로 추천해줄게!",
      },
    ],
    "250612-work": [
      {
        type: "ai",
        content: `내 출근룩 : Day 35
        
        어제는 흰색 셔츠를 입었으니 오늘은 다른 스타일로 추천할게. 평소에 하늘색 셔츠가 반응이 좋았으니, 오늘은 하늘색 셔츠에 어두운 청바지를 매치해보는 건 어때? 신발은 검정색 로퍼나 스니커즈가 잘 어울릴 것 같아.

        1. 상의: 하늘색 셔츠
        2. 하의: 검정 슬랙스
        3. 신발: 흰색 스니커즈
        4. 기타: 검정 뿔테 안경, 백팩
        
        이 조합은 깔끔하면서도 세련된 느낌을 줄 수 있어. 오늘 하루도 멋지게 출근해봐!`,
        image: "/250612-work.jpeg",
      },
      {
        type: "ai",
        content:
          "원하는 스타일이나 아이템이 있으면 말해줘. 더 구체적으로 추천해줄게!",
      },
    ],
    "250612-today": [
      {
        type: "ai",
        content: `오늘은 너가 좋아할 것 같은 인기 스타일을 가져왔어.

        최근에는 편안하면서도 세련된 느낌의 조합이 인기를 끌고 있어. 얇은 니트와 슬랙스를 매치해보는 건 어때? 

        신발은 로퍼를 추천할게. 이 조합은 깔끔하면서도 편안한 느낌을 줄 수 있어.
        
        1. 상의: 얇은 니트
        2. 하의: 슬랙스
        3. 신발: 로퍼
        4. 기타: 가벼운 재킷

        이 조합은 다양한 상황에서 잘 어울려. 이 스타일이 마음에 든다면 옷장에 넣을 아이템을 추천해줄까?`,
        image: "/250612-today.png",
      },
      {
        type: "ai",
        content:
          "원하는 스타일이나 아이템이 있으면 알려줘. 더 구체적인 코디와 함께 추천해줄게!",
      },
    ],
  };

  const mockMessages = id ? mockData[id] : [];

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
        김동국님의 옷장
      </header>

      <main className="flex-1 px-4 py-4 flex flex-col space-y-4">
        {mockMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[85%] rounded-xl p-4 shadow text-base whitespace-pre-line break-all flex flex-col gap-2 ${
              msg.type === "user"
                ? "bg-blue-100 self-end ml-auto"
                : msg.type === "ai"
                ? "bg-white self-start"
                : "bg-yellow-100 mx-auto text-center w-full max-w-full"
            }`}
          >
            {msg.content && <p className="mb-1">{msg.content}</p>}
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
                className="text-blue-500"
              >
                {msg.link}
              </a>
            )}
          </div>
        ))}
        {/* Input Box */}
        <div className="fixed w-full max-w-screen-sm bottom-0 left-1/2 -translate-x-1/2 bg-white p-4 shadow-lg">
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
