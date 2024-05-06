import { useEffect, useState } from "react";
import "./App.css";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { Dice } from "./companents/Lesson5Task/Dice/Dice";
import { UserInfo } from "./companents/Lesson6Task/Form/UserInfo";
import { Profile } from "./companents/Profile/Profile";
import { Form } from "./companents/UserLogin/Form/Form";
import { fetchClients } from "./companents/Lesson8Task/TaskSlide/Fetch";
import ClientCard from "./companents/Lesson8Task/TaskSlide/Client";
import { Employees } from "./companents/Lesson9Task/Employees/Employees";
import { Qardasliq } from "./companents/Lesson9Task/Task2/Qardasliq";
import { Qalery } from "./companents/Lesson9Task/Task3/Qalery";
function App() {
  // const [state,setState] = useState(null)

  // useEffect(()=>{
  //   fetchClients().then((client) => {
  //     setState(client);
  //   });
  // },[])
  return (
    <>
    <Qalery/>
    {/* <Qardasliq/> */}
  {/* <Employees/> */}
      {/* {state.map((item) => {
        <Employees {...item} />;
      })} */}

      {/* {
    state?  <ClientCard {...state}/>:"Loading..."
  } */}

      {/* <Profile/> */}
      {/* <Form/> */}
      {/* <Dice/> */}
      {/* <UserInfo/> */}
    </>
  );
}

export default App;
