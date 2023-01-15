import React from "react";
import './contact.scss'
import contactImage from './images (2).jpg'
import {Send} from '@material-ui/icons'
export default function Contact() {
  return <div className='contact'>
    <div className="heading">
        <span>Contact</span> Us
    </div>
    <div className="underline">

    </div>
    <div className="container">
        <div className="imgContainer">
            <img src={contactImage} alt="" />
        </div>

    
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="field">
                <label htmlFor="massege">Massege</label>
                <input type="text" name="massege" className="massege"/>
            </div>
            <div className="send">
                <span>Send</span>
                <Send className="icon"/>
            </div>
            
        </form>
    </div>
  </div>;
}
