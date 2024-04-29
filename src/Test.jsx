import React from "react";
export default class Department extends React.Component{
    
        getData = ()=>{
            fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/development').then(res=>res.json()).then(data=>{
                console.log(this.data)
            })
        }
    
    componentDidCatch(){
        this.getData();
    }
    render(){
        return(
            <>
                <p></p>
            </>
        )
    }
   
}