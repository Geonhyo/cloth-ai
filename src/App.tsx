import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Chat from "./pages/Chat";
import Closet from "./pages/Closet";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function AppRoutes() {
  const location = useLocation();
  const tabRoutes = ["/", "/community", "/profile", "/closet"];

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>

      {/* {tabRoutes.includes(location.pathname) && <BottomNav />} */}
    </>
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
