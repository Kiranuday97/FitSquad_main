import { Link } from "react-router-dom"
import "../pages/home/Home.css"
import Logo from '../images/logo.png'
import{FaLinkedin} from 'react-icons/fa'
import{FaFacebookF} from 'react-icons/fa'
import{AiOutlineTwitter} from 'react-icons/ai'
import{AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="" />
                </Link>

                    <p>
                    Discover the best selection of high-quality gym accessories at Gym Accessories. We are dedicated to providing top-notch products to help you achieve your fitness goals. Connect with us on social media and explore our website to find the perfect accessories for your workout routine.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    </div>
            </article>
            
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">xxx</Link>
                <Link to="/">xxx</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/">Blog</Link>
                <Link to="/">Case</Link>
                <Link to="/">Events</Link>
                <Link to="/">Communities</Link>
                <Link to="/">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/s">Support</Link>
            </article>
        </div>
      <div className="footer__copyright">
        <small>2023 Equiniox &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
