import React,{useState,useEffect} from "react";
import "./app.scss";
import { authService } from "./fbase";
import Loading from "./components/loading/loading";
import Approuter from "./router";
import Footer from "./components/footer/footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [init,setInit] = useState(false)
  const [userobj, setUserobj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserobj({
          displayName: user.displayName || `Visitor.${user.uid.slice(0, 3)}`,
          uid: user.uid,
          photoURL: user.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",
        })
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    })},[])
  return (
  <>
    {
        init ?<>
          <Approuter isLogin={isLogin} userobj={userobj} />
          <Footer />
          </>
      : <Loading />
      }
  </>
  );
}

export default App;
