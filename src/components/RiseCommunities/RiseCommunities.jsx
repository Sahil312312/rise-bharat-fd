import OneCommunity from '../Community/OneCommunity'
import Popup from '../PopUp/Popup'

const RiseCommunities = () => {
    const items = [{name: "Join a new community"}]
  return (
    <>
    <div className='top-heading'>Rise Communities</div>
    <OneCommunity link={"View   ➝"}/>
    <OneCommunity link={"View   ➝"}/>
    <OneCommunity link={"View   ➝"}/>
    <Popup items={items}/>
</>
  )
}

export default RiseCommunities