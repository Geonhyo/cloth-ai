import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Closet from "./pages/Closet";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function AppRoutes() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="bg-gray-100 min-h-screen w-full max-w-screen-sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
