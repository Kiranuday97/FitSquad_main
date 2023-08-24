import { Link } from "react-router-dom"
import Image from "../images/header.png"
import "../pages/home/Home"


const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main__header-container">
          <div className="main__header-left">
             <h4>Enhance Your Workout</h4>
             <h1>Your One-Stop Shop for Gym Accessories</h1>
             <p>"Experience the next level of fitness with our top-quality gym accessories designed to enhance your performance and help you achieve your goals."</p>
             <Link to="" className="btn lg">Explore</Link>
          </div>
          <div className="main__header-right">
              <div className="main__header-circle">
                <div className="main__header-image">
                  <img src={Image} alt="Main Header Image" />
                </div>
              </div>
          </div>
      </div>
      
 </header>
  )
}

export default MainHeader
