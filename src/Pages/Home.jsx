import Dashboard from "./Dashboard";
import Cookies from 'cookies-js';
import UserDashboard from "./UserDashboard";
import StartLoader from "../Components/Loaders/StartLoader";
import { useState } from "react";

const Home=()=>{
  const [loader, setLoader] = useState(true);
  const userToken = Cookies.get("token");
  setTimeout(() => {
      setLoader(false)
  }, 3000);
    return(
      <>
      {
        loader? <StartLoader /> :
        (
          <div className=" w-screen h-screen bg-[#0B101B]">
      {
        userToken ? (<UserDashboard/>)
        :
          <Dashboard/>
      }
       
    </div> 
        )
      }
    
    
      </>
  )
}
export default Home ;