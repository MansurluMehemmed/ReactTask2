
import { useEffect, useState } from 'react'
import './App.css'
import { Dice } from './companents/Lesson5Task/Dice/Dice'
import { UserInfo } from './companents/Lesson6Task/Form/UserInfo'
import { Profile } from './companents/Profile/Profile'
import { Form } from './companents/UserLogin/Form/Form'
import { fetchClients } from './companents/Lesson8Task/TaskSlide/Fetch'
import ClientCard from './companents/Lesson8Task/TaskSlide/Client'
function App() {
  const [state,setState] = useState(null)

  useEffect(()=>{
    fetchClients().then((client) => {
      setState(client);
    });
  },[])
  
  return ( <>
  {
    state?  <ClientCard {...state}/>:"Loading..."
  }
 
      {/* <Profile/> */}
      {/* <Form/> */}
      {/* <Dice/> */}
      {/* <UserInfo/> */}</>
  )
}

export default App
