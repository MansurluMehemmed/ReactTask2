import { Address } from "./Address/Address"
import { Email } from "./Email/Email"
import { Name } from "./Name/Name"
import { Info } from "./PersonalInfo/Info"
import './Profile.css'
export const Profile = () => {
  return (
    <div className="divprofile">
        <Name/>
        <Email/>
        <Address/>
        <Info/>
    </div>
  )
}
