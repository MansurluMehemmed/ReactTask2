import { useEffect, useState } from "react";
import './Employees.css'
export const Employees = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);
  const array = state.map((employee) => 
  <div className="card"  key={employee.id}>
    <div>Name: {employee.name}</div>
    <div>Department: {employee.department}</div>
    <div>Role: {employee.role}</div>
  </div>

);
  return <div className="divcard" >{array}</div>;
};
