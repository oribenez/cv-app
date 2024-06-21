import { AnimateCC, GetAnimationObjectParameter } from 'react-adobe-animate'
import { $RocketWrap, $Rocket2Wrap, $AppWrap } from './App.styled'
import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax'
import { useLockBodyScroll } from './hooks/useLockBodyScroll'
import { ReactNebula } from '@flodlc/nebula'
import ProfileImg from './assets/images/profile.jpg'
import MoonImg from './assets/images/moon.svg'
import SunImg from './assets/images/sun.svg'
import EarthImg from './assets/images/earth6.svg'
import CVFile from './assets/files/cv-ori_ben_ezra.pdf'
import Projects from './containers/Projects'
import WhatsAppSender from './components/WhatsappSender'
import { MdAlternateEmail } from 'react-icons/md'

function App() {
  const [_, getAnimationObject] = useState<GetAnimationObjectParameter | null>(null)
  const [__, getAnimationObjectRocket] = useState<GetAnimationObjectParameter | null>(null)
  const [isScrollLocked, setIsScrollLocked] = useState<Boolean>(true)
  // const { lockBodyScroll, unlockBodyScroll } = useLockBodyScroll(isScrollLocked)

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight })
  }

  useEffect(() => {
    scrollToBottom()

    let lock = true
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      // Reverse the scroll direction
      if (!isScrollLocked) {
        window.scrollBy(0, -event.deltaY)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    window.addEventListener(
      'videoEnded',
      function () {
        setIsScrollLocked(false)
        scrollToBottom()
      },
      false
    )
  }, [isScrollLocked])

  const parallaxMoon = useParallax<HTMLDivElement>({
    rotateZ: [-30, 30]
  })
  const parallaxSun = useParallax<HTMLDivElement>({
    rotateZ: [-30, 30]
  })

  return (
    <$AppWrap>
      {isScrollLocked ? (
        <$RocketWrap>
          <AnimateCC
            animationName="cvanimation"
            getAnimationObject={getAnimationObject}
            composition="206C97A9C21A40D081ADF95D0641F137"
          />
        </$RocketWrap>
      ) : (
        <$Rocket2Wrap>
          <AnimateCC
            animationName="rocket2"
            getAnimationObject={getAnimationObjectRocket}
            composition="69A91F9B681E44A686F2E3FACBB2C424"
          />
        </$Rocket2Wrap>
      )}

      <div className="space">
        <ReactNebula
          config={{
            starsCount: 250,
            starsRotationSpeed: 3,
            nebulasIntensity: 8
          }}
        />
      </div>
      <div className="bgStackWrap">
        <div className="floating">
          <Projects />

          <div className="sunWrap">
            <h3>sun</h3>
            <div ref={parallaxSun.ref}>
              <img src={SunImg} width="250rem" />
            </div>
          </div>

          <div className="techWrap">
            <h1>🧠 technologies</h1>
            <ul>
              <li>
                <p>
                  I am <b>proficient</b> in the following technologies and programming languages
                </p>
                <p>
                  <i>
                    Typescript, Javascript, React, React Query, Redux, Node, Express, MongoDB, CSS, HTML, SQL, OOP,
                    Java, C#, C/C++, Python, ASP.NET
                  </i>
                </p>
              </li>

              <li>
                <p>
                  I have gained <b>massive experience</b> with these useful tools{' '}
                </p>
                <p>
                  <i>Photoshop, Illustartor, Animate CC, Figma, Canva, Excel, Git, VSCode...etc.</i> <br />
                  By creating Illustartions, Videos Animations, Mockups, Calculations and more..
                </p>
              </li>

              <li>
                <p>It is notable to say that I've worked with</p>
                <p>
                  <i>Email Campaigns, Computer Vision, Deep Learning, Shopify API, AWS S3</i>
                </p>
              </li>
            </ul>
          </div>

          <div className="moonWrap">
            <h3>moon</h3>
            <div ref={parallaxMoon.ref}>
              <img src={MoonImg} width="200rem" />
            </div>
          </div>

          <div className="about">
            <div className="profileImgWrap">
              <img src={ProfileImg} height="400rem" />
            </div>
            <div>
              <h1>about</h1>
              <p>I am living in Herzliya 🏡, Israel. I Love my family, coffee and coding.</p>
              <p>
                My interest in coding stems from a fascination with the dynamic nature of technology and a desire to
                implement new ideas that will yield the next breakthrough. I'm <b>eager</b> to expand my knowledge and
                to investigate new technologies.
              </p>
              <p>Hope you’ll like my work.</p>
              <div className="links">
                <a href={CVFile} style={{ marginTop: '-5px' }}>
                  <button>Download CV</button>
                </a>
                <a href="https://www.linkedin.com/in/oribenezra" target="_blank">
                  <div className="socialIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <defs>
                        <style></style>
                      </defs>
                      <title>Linkedin</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <g id="Text_Container" data-name="Text Container">
                            <g id="About_Container" data-name="About Container">
                              <path d="M26.94,0H3.06A3.06,3.06,0,0,0,0,3.06V26.94A3.06,3.06,0,0,0,3.06,30H26.94A3.06,3.06,0,0,0,30,26.94V3.06A3.06,3.06,0,0,0,26.94,0ZM9.3,24.29h-4v-13h4Zm-2-14.55a2,2,0,0,1-2.09-2,2,2,0,0,1,2.15-2,2,2,0,1,1-.06,4ZM24.83,24.29h-4V17.11c0-1.67-.58-2.81-2-2.81a2.21,2.21,0,0,0-2.06,1.51,2.77,2.77,0,0,0-.14,1v7.47h-4V15.46c0-1.61-.06-3-.11-4.13h3.5l.18,1.8h.08a4.65,4.65,0,0,1,4-2.09c2.65,0,4.64,1.77,4.64,5.59v7.66Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="https://github.com/oribenez" target="_blank">
                  <div className="socialIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 31">
                      <defs></defs>
                      <title>Github</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <g id="Text_Container" data-name="Text Container">
                            <g id="About_Container" data-name="About Container">
                              <path d="M15.89,0a15.89,15.89,0,0,0-5,31c.79.15,1.08-.34,1.08-.76s0-1.63,0-3c-4.42,1-5.35-1.88-5.35-1.88a4.24,4.24,0,0,0-1.77-2.32c-1.44-1,.11-1,.11-1a3.34,3.34,0,0,1,2.44,1.64A3.37,3.37,0,0,0,12,25a3.43,3.43,0,0,1,1-2.12c-3.53-.4-7.24-1.77-7.24-7.86A6.13,6.13,0,0,1,7.39,10.8a5.76,5.76,0,0,1,.15-4.21s1.34-.43,4.37,1.63a15.21,15.21,0,0,1,8,0c3-2.06,4.37-1.63,4.37-1.63a5.72,5.72,0,0,1,.16,4.21A6.16,6.16,0,0,1,26,15.06c0,6.11-3.72,7.45-7.26,7.85a3.79,3.79,0,0,1,1.08,2.94c0,2.12,0,3.83,0,4.36s.29.92,1.09.76a15.89,15.89,0,0,0-5-31Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
                <WhatsAppSender phoneNumber="+972548321468" message="Hi Ori, I saw your CV website, let's talk!" />
                <a href="mailto:oriben467@gmail.com">
                  <div className="socialIcon">
                    <MdAlternateEmail size={50} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollGestureWrap">
          <div>
            <div className="mouse"></div>
            <p>Scroll</p>
          </div>

          <h2>
            Hi there 👋, <br />
            I'm <b>Ori Ben Ezra</b>, a software developer <i>{'< />'}</i>
          </h2>
        </div>

        <div className="earthWrap">
          <img src={EarthImg} />
        </div>
      </div>
    </$AppWrap>
  )
}

export default App
