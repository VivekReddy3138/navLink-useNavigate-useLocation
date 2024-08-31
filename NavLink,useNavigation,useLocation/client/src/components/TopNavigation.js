import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigation() {

  let highlightActiveLink = (obj)=>{
    if(obj.isActive == true){
      return{
    backgroundColor:"blue",
      color:"whitesmoke"
    }
  }
  }

  return (
    <div>
      <nav>
        <NavLink to="/dashboard"
        style={(obj)=>{
        return highlightActiveLink(obj);
        }}
        >Dashboard</NavLink>
        <NavLink to="/tasks" 
        style={(obj)=>{
          console.log(obj);
          return highlightActiveLink(obj);
        }}
        >Tasks</NavLink>
        <NavLink to="/leaves"
        style={(obj)=>{
          return highlightActiveLink(obj);
        }}
        >Leaves</NavLink>
        <NavLink to="/">Signout</NavLink>
      </nav>
    </div>
  )
}

export default TopNavigation
