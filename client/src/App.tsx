import { useEffect, useState } from "react";
import Desc from "./components/Desc";
import ProfileImage from "./components/ProfileImage";
import Loading from "./components/Loading";
import "animate.css/animate.min.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="con">
        <ProfileImage />
        <Desc />
      </div>
    </>
  );
};

export default App;
