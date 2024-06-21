import { useRef } from 'react'
import { $Container } from './Projects.styled'
import { Slide, SlideshowRef } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import ReactPlayer from 'react-player'
import ShopifyAppButton from '../assets/images/download-app.svg'
import MateIcon from '../assets/images/mate-icon.svg'
import LazyVideo from '../components/LazyVideo'
import MateVideo from '../assets/files/mate-video-compressed.mp4'
import MatePoster from '../assets/images/mate-video-poster.png'
import GiventakeIcon from '../assets/images/giventake-icon.png'
import GiventakeVideo from '../assets/files/giventake-video-compressed.mp4'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import FontDetect from '../assets/images/font-detect.png'
const Projects = () => {
  const slideRef = useRef<SlideshowRef | null>(null)

  const onNextSlide = () => {
    if (slideRef.current !== null) {
      slideRef.current.goNext()
    }
  }

  const onPrevSlide = () => {
    if (slideRef.current !== null) {
      slideRef.current.goBack()
    }
  }

  return (
    <$Container>
      {/* <Slide
        transitionDuration={400}
        indicators
        ref={slideRef}
        autoplay={false}
        prevArrow={
          <div onClick={onPrevSlide} className="btnSlideShow">
            <MdNavigateBefore size={50} />
          </div>
        }
        nextArrow={
          <div onClick={onNextSlide} className="btnSlideShow">
            <MdNavigateNext size={50} />
          </div>
        }> */}
      {/* Font detector: Deep Learning */}

      <div className="projects">
        <div className="projectWrap">
          <h2>Font Recognizer: deep learning</h2>
          <p>
            Deep learning model for font detection of text in images
            <br />
            <i>Technologies: Python, Computer vision, deep learning, kaggle</i>
          </p>
          <div className="projectInnerWrap">
            <div>
              <p>
                The goal is therefore to identify the font of each character in an image to be one of the fonts from the
                list.
              </p>
              <p>
                The training dataset consists of 829 natural images and a total of 22,085 characters. Each image has
                several words rendered on top of it with one of 7 different fonts.
              </p>
              <b>Procedure:</b>
              <ol>
                <li>Data loading</li>
                <li>Data Pre processing: Pixel normalizing, Reducing image resolution, Homography</li>
                <li>Training & Classification</li>
                <li>Prediction</li>
              </ol>
              <p className="info">
                <u>Conclusion: </u>
                I’ve had a score of prediction 95.567% with the test data which is pretty impressive according to others
                work results.
              </p>
            </div>
            <div className="videoWrap">
              <img src={FontDetect} width="400rem" />
              <a href="https://github.com/oribenez/font-detect">
                <button>Github repo</button>
              </a>
            </div>
          </div>
        </div>

        {/* giventake */}
        <div className="projectWrap">
          <h2>
            <img
              height="25rem"
              src={GiventakeIcon}
              style={{ marginRight: '1rem', border: '2px solid rgb(181 255 224)' }}
            />
            given'take
          </h2>
          <p>
            An app for connecting between people who need help and those are willing to give voulunteerly <br />
            <i>Tech stack: JS, React, Node, Express, MongoDB, AWS S3, Socket.io, Resend API...</i>
          </p>
          <div className="projectInnerWrap">
            <div>
              <p>
                Given’take focuses on getting real-world help. It's like having a helping hand in your pocket, anytime
                you need it.
              </p>
              <b>Key Features:</b>
              <ol>
                <li>Create and share posts looking for help.</li>
                <li>Live Chat with people who would like to volunteer</li>
                <li>Gain repuation by helping others and getting reviews on your work</li>
                <li>All data is tested and checked by moderators and reports.</li>
              </ol>
            </div>
            <div className="videoWrap">
              <LazyVideo src={GiventakeVideo} />
              <a href="http://giventake.org">
                <button>
                  Go to <u>giventake.org</u>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Mate: back in stock alerts */}
        <div className="projectWrap">
          <h2>
            <img height="25rem" src={MateIcon} style={{ marginRight: '1rem', border: '2px solid #b27dd9' }} />
            Mate: back in stock alerts
          </h2>
          <p>
            An E2E SaaS appliction for ECommerce Stores. <br />
            <i>
              Tech stack: Javascript, React, Node, Express, MongoDB, Shopify API, Postmark API, designing skills, and
              planning.
            </i>
          </p>
          <div className="projectInnerWrap">
            <div>
              <h3>A leading app for managing stock and price notifications. </h3>
              <ol>
                <li>Application built for Shopify merchants to increase sales by retrieving lost customers.</li>
                <li>
                  <b>The app adds a button “Notify me” for every product page.</b>
                </li>
                <li>
                  Customers sign up to the app service to get notified when the product they want is back in stock or
                  price drop.
                </li>
              </ol>
            </div>
            <div className="videoWrap">
              <LazyVideo src={MateVideo} poster={MatePoster} />
              <a href="https://apps.shopify.com/notify-mate-price-drop-alerts">
                <img src={ShopifyAppButton} height={60} />
              </a>
            </div>
          </div>
        </div>
        {/* </Slide> */}
      </div>

      <h1>
        <MdKeyboardDoubleArrowUp />
        projects
        <MdKeyboardDoubleArrowUp />
      </h1>
    </$Container>
  )
}

export default Projects
