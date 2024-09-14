import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { autoReLogin } from "./api/api";
import { setUser } from "./slices/userSlice";
import Room from "./pages/Room/Room";
import Profile from "./pages/Profile/Profile";
import NotFound from "./components/NotFound";
import { GoogleOAuthProvider } from "@react-oauth/google"


// function AuthHandler({ isAuth, user }) {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const navigateFunc = () => {
//       if (isAuth && user?.activated) {
//         navigate(`/rooms`);
//       } else if (isAuth) {
//         if (!user?.activated) {
//           navigate(`/activate`);
//         }
//       }
//     };
//     navigateFunc();
//   }, [navigate, isAuth, user?.activated, user?.id]);

//   return null;
// }

function App() {
  const { isAuth, user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["user-login"],
    queryFn: () => autoReLogin(),
    enabled: false
  })
  useEffect(() => {
    if (!user?.userName) {
      refetch()
    }
  }, [])

  useEffect(() => {
    if (data?.data?.userData) {
      dispatch(setUser(data?.data?.userData))
    }
  }, [isSuccess])

  const GoogleAuthWrapper = ({ children }) => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        {children}
      </GoogleOAuthProvider>
    )
  }
  return (
    <Router>
      <Navigation />
      {/* <AuthHandler isAuth={isAuth} user={user} /> This component handles the navigation logic */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<GoogleAuthWrapper>
          <Register />
        </GoogleAuthWrapper>} />
        <Route path="/login" element={<GoogleAuthWrapper>
          <Login />
        </GoogleAuthWrapper>} />
        <Route
          path="/activate"
          element={<Activate />}
        />
        <Route
          path="/rooms"
          element={<Rooms />}
        />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
