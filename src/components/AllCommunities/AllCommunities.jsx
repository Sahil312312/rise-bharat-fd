import React from 'react'
import OneCommunity from '../Community/OneCommunity'
import Popup from '../PopUp/Popup'

const AllCommunities = () => {
  const items = [{name: "Hire Candidates"},{name:"Create a new community"}]
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

export default AllCommunities