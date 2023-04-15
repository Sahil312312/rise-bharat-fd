import Popup from '../PopUp/Popup'

const Home = () => {
  const items = [{name: "Hire Candidates"},{name:"Create a new community"}]
  return (
    <>
      <div className="top-heading">Rise Communities</div>
      <Popup items={items}/>
    </>
  )
}

export default Home