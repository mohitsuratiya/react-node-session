import React from 'react'
import "./Baba.css"

export default function Page() {
    return (
        
            <div className="container">
                <div className="header">
                    <div className="text">signup</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    <div className="input">
                        <img src="{user_icon}" alt="" />
                        <input type="text" placeholder='userName'/>
                    </div>
 
                    <div className="input">
                        <img src="{email_icon}" alt="" />
                        <input type="email" placeholder='email Id' />
                    </div>

                    <div className="input">
                        <img src="{password_icon}" alt="" />
                        <input type="password" placeholder='password' />
                    </div>
                </div>
            <div className="forget-password">lost password? <span>click hear</span></div>
            <div className="submit-conatiner">
                <div className="submit">sing up</div>
                <div className="submit">login</div>
            </div>
       </div>
        
    )
}


