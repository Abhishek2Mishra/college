import React from 'react'
import './Nav.css';
import { CiLight} from "react-icons/ci";
import { BiSearch} from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {CgProfile} from "react-icons/cg"
const Nav = () => {
  return (
    <>
      <nav>
        <div>
            <CiLight/>
        </div>
        <div className='mid-sec'>
            <div>
                <ul className='list'>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Get Involved</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='icons'>
                <div>
                    <BiSearch/>
                </div>
                <div>
                    <IoIosNotificationsOutline/>
                </div>
                <div>
                    <CgProfile/>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
