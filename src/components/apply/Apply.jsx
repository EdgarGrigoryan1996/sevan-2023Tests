import img1 from "./images/1.png"
import arrow from "./images/arrow.png"
import "./Apply.css"
function Apply() {
  const data = [
    {
        img:img1,
        title:"— Application —",
        description:"In order to apply, you will need to fill in our application form. Please keep in mind, that provision of accurate information is important helps us to provide you the best experience"
    },
    {
        img:img1,
        title:"—  Assessment & Interview — ",
        description:"All the applied Volunteers pass a screening process and the accepted ones are interviewed"
    },
    {
        img:img1,
        title:"—  Pre-event training — ",
        description:"All the preselected candidates pass one-month training session and top applicants are selected and distributed into working groups"
    },
    {
        img:img1,
        title:"— Time to work —",
        description:"During the 7 days of the Summit you will have to support the organizers to conduct the best event ever.   "
    }
  ]
  return (
    <div className="wb-applyBlock">
        <div className="wb-applyTitle">
            <h2>How To Apply</h2>
        </div>
        <div className="wb-applyItemsBlock">
            {data.map((block,i) => {
                return (
                    <div className="wb-itemWithArrowBlock">
                        <div className="wb-itemBlock">
                            <div className="wb-imageBlock">
                                <img src={block.img} alt="Icon" />
                            </div>
                            <div className="wb-titleBlock">
                                <h3>{block.title}</h3>
                            </div>
                            <div className="wb-description">
                                <p>{block.description}</p>
                            </div>
                        </div>
                    {i !== data.length - 1 && <div className="wb-arrowBlock"><img src={arrow} alt="" /></div>}
                    </div>
                    
                )
            })}
        </div>
    </div>    
  );
}

export default Apply;