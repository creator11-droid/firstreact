import React from 'react'
import mel from '../assets/mel.jpg'

const handlechange = (name) =>{
        alert(`hello ${name}`)
}
const Profile = (props) => {
  return (
    <div>
        <h2>
            My name is {props.name}
        </h2>
        <h4> I am {props.age} years of age</h4>
        <img src={mel} alt='#'></img>
        <div>
            {handlechange(props.name)}
        </div>
    </div>
  )
}


export default Profile