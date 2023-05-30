import s from "./WhyToParticipate.module.css"
import img1 from "../../images/1.png"

function WhyToParticipate() {
  const data = [
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
    {
      front:{
        img:img1,
        text:"Contacts and Networking"
      },
      back:{
        title:"Contacts and Networking",
        description:"During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
      }
      
    },
  ]
  return (
    <div className={s.participateBlock}>
      <div className={s.participateTitle}>
        <h2>Why to Participate as a Startup</h2>
      </div>
      <div className={s.participateItemsBlock}>
        {data.map((block) => {
          return (
            <div class={s.container}>
              <div class={s.flipper}>
                <div class={s.front}>
                  <div class={s.header}>
                    <img src={img1} alt="Logo" />
                  </div>
                  <p>Contacts and Networking</p>
                </div>
                <div class={s.back}>
                  <h3>Contacts and Networking</h3>
                  <p>
                    During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. 
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={s.applyBlock}>
        <button>Apply as a Startup</button>
        <p>*The distribution into  Starter and Booster is done by the SSS steering committee</p>
      </div>
    </div>
    
    
  );
}

export default WhyToParticipate;