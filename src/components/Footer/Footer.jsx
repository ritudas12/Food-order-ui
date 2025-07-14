import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo2} alt="" />
        <p>Made with ❤️ and lots of good food!  
Serving happiness one meal at a time.  
© 2025 QuickCrave | Let's eat together 🍔🍕🥗
</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-345-9876</li>
                <li>contact@QuickCrave.com</li>
            </ul>
        </div>
       
      </div>
      <hr />
     
      <p className="footer-copyright">
        copyright 2024 @ QuickCrave.com - All Right Reserved. 
      </p>
    </div>
  )
}

export default Footer
