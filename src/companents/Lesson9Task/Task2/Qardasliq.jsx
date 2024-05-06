import React, { useEffect, useState } from 'react'
import './Qardasliq.css'
export const Qardasliq = () => {
    const state = [
            {
            "id": 1,
            "name": "Frodo Baggins",
            "department": "Management",
            "role": "CEO",
            'alive':true
            },
            {
            "id": 2,
            "name": "Samwise Gamgee",
            "department": "Management",
            "role": "CTO",
            'alive':true
            },
            {
            "id": 3,
            "name": "Gandalf the Gray",
            "department": "Recruitment",
            "role": "Lead-recruiter",
            'alive':false
            },
            {
            "id": 4,
            "name": "Aragorn",
            "department": "Security",
            "role": "Security officer",
            'alive':false
            },
            {
            "id": 5,
            "name": "Legolas",
            "department": "Management",
            "role": "Office manager",
            'alive':true
            }
            
    ];

  return (
    <div className='divFlex'>
        TRUE:
        <div className="divtrue">
        {state.filter(item=>item.alive===true).map(user=>
        <div className="card"  key={user.id}>
        <div>Name: {user.name}</div>
        <div>Department: {user.department}</div>
        <div>Role: {user.role}</div>
      </div>)}
        </div>
        False: 
      <div className="divfalse">
      {state.filter(item=>item.alive===false).map(user=>
        <div className="card"  key={user.id}>
        <div>Name: {user.name}</div>
        <div>Department: {user.department}</div>
        <div>Role: {user.role}</div>
      </div>)}
      </div>
      
    </div>
  )
}
