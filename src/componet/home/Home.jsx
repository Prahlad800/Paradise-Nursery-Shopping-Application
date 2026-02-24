import React from 'react'
import "./home.css"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div id='main'>
        <div id='com-name' className='main_div'>
            <p>Paradise Nursery Shopping Applicaton</p>
            <button >
                <Link to={"/product"}  className='link_btm'>
                 Show detail
                </Link>
               
            </button>
        </div>
        <div id='paira' className='main_div'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et nobis, molestias dignissimos consectetur blanditiis non minima qui exercitationem iure nostrum. Atque delectus fugiat quibusdam molestiae suscipit.   <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dicta,minima architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, qui praesentium vitae doloremque fugit autem sit architecto distinctio aut perferendis veritatis facilis error neque,<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; esse exercitationem. Quis facilis sunt odio voluptas adipisci hic.  Velit ipsam dolorem vel, quas consequuntur qui hic minus, quasi labore unde veniam eum, doloribus illum.</p>
        </div>
      
    </div>
  )
}

export default Home
