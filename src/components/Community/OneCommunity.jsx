import './OneCommunity.css'
import logo from '../../assets/logo.png'

const OneCommunity = (props) => {
  return (
    <>
        <div className="community">
            <div className="group-img"><img src={logo} alt="" /></div>
            <div className="group-details">
                <div className="group-name">{props?.name}</div>
                <div className="view-all" style={{color:'#7A3EFB'}}>{props?.link} </div>
            </div>
        </div>
    </>
  )
}

export default OneCommunity