import "./App.css";
import BlogPage from "./components/blogPage";
import UserInfoContext from "./context/UserInfoContext";

function App() {
  const userInfo = { username: "admin", isAdmin: true };
  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage />
    </UserInfoContext.Provider>
  );
}

export default App;
