import {MdAttachEmail, MdPhoneInTalk} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {FaRegCopyright} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <p className="home-description">
          I believe that all women are pretty without makeup, but the right
          makeup can be pretty powerful.
        </p>
        <div className="button-container">
          <div className="mr-5 mt-5">
            <button type="button" className="shop-now-button">
              Order Now
            </button>
          </div>
          <div className=" mt-5">
            <button type="button" className="shop-now-button">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          >
            .
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            .
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">
            .
          </li>
        </ol>
        <div className="carousel-inner image-slides">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src="https://img.freepik.com/free-photo/beauty-close-up-attractive-woman-looking-mirror-using-brush-apply-make-up-smiling-pleased-camera-standing-against-blue-background_1258-70465.jpg?w=1380&t=st=1708699561~exp=1708700161~hmac=029fafb4c4a4fbfa2a3f748d4219a33b485f8af8dc5694031c14a1df37e15fd6"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/portrait-young-caucasian-woman-her-beauty-day-skin-hair-care-routine_155003-19149.jpg?w=1380&t=st=1708699731~exp=1708700331~hmac=6450e8614456c800d946f23e57b517ad1c1eb2328a5b9ca912a9d56155cdbe2e"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/cosmetics-beauty-products-makeup-sale-banner-with-glowing-neon-background-pink-sparkles_33099-1429.jpg?w=1380&t=st=1708699706~exp=1708700306~hmac=52a9387c8c376997b06e2813c2d3500394339db1edad64ca0b9997803c18d653"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            .
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            .
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="bottom-section">
      <div className="icon-container text-icon">
        <div>
          <MdAttachEmail className="icon" />
          <p>nxtwave@gmail.com</p>
        </div>
        <div>
          <MdPhoneInTalk className="icon" />
          <p className="text-icon">1234567891</p>
        </div>
        <div>
          <BsTwitter className="icon" />
          <p className="text-icon">@Beautyproducts</p>
        </div>
      </div>
      <hr className="line" />
      <div className="text-center">
        <p>Copyright</p>
        <FaRegCopyright className="icon-copy" />
        <p>2024 Sowndharya Beauty Products. All rights reserved.</p>
      </div>
    </div>
  </>
)

export default Home
