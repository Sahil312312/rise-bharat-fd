import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate =  useNavigate();
  return (
    <>
        <div className="not-found">
            <div className="not-found-img">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" alt="404 Pgae"
                height={300} width={350} style={{marginTop:"14rem" ,marginLeft:"2rem"}}  />
                {
                  setTimeout(() => {
                    navigate("/")
                  }, 3000)
                }
            </div>
        </div>
    </>
  )
}

export default NotFound