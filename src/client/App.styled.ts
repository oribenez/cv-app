import styled from 'styled-components'

export const $AppWrap = styled.div<{}>`
  position: relative;
  background-color: #190e22;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;

  .space {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0;
  }

  .bgStackWrap {
    width: 100vw;
    position: absolute;
    z-index: 3;
    color: white;

    .floating {
      /* width: 80vw; */
      h1 {
        margin: 0;
      }

      .sunWrap {
        display: flex;
        text-align: center;
        flex-direction: column;
        margin: 4rem 0;
        h3 {
          font-weight: 500;
        }
        img {
          margin: 0 auto;
          -webkit-filter: drop-shadow(7px 0px 20px rgb(255 139 42 / 70%));
          filter: drop-shadow(7px 0px 20px rgb(255 139 42 / 70%));
        }
      }

      .techWrap {
        padding-left: 3rem;
        width: 80vw;
      }

      .moonWrap {
        display: flex;
        text-align: center;
        flex-direction: column;
        margin: 10rem 0;
        h3 {
          font-weight: 500;
        }
        img {
          margin: 0 auto;
          -webkit-filter: drop-shadow(7px 0px 20px rgba(255, 255, 255, 0.7));
          filter: drop-shadow(7px 0px 20px rgba(255, 255, 255, 0.7));
        }
      }

      .about {
        display: flex;
        gap: 2em;
        padding-left: 3em;
        width: 80vw;
        .profileImgWrap {
          img {
            border-radius: 300em;
          }
        }

        .links {
          display: flex;
          align-items: center;
          .socialIcon {
            width: 3rem;
            margin: 0.5rem;
            fill: #666;
            color: #666;
            transition: all 0.6s ease;
            display: inline-block;
          }
          .socialIcon:hover {
            fill: #eee;
            color: #eee;
          }
        }
      }
    }

    .scrollGestureWrap {
      text-align: center;
      padding-top: 2em;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h2 {
        margin: 3rem 3rem;
        text-align: left;
        @media screen and (min-width: 769px) and (max-width: 950px) {
          margin-right: 7rem;
        }
      }
      p {
        margin: 0;
      }
      .mouse {
        margin: 0 auto;
        width: 30px;
        height: 60px;
        border: 2px solid #ddd;
        border-radius: 60px;
        position: relative;
        &::before {
          content: '';
          width: 9px;
          height: 9px;
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ddd;
          border-radius: 50%;
          opacity: 1;
          animation: wheel 2s infinite;
          -webkit-animation: wheel 2s infinite;
        }
      }

      @keyframes wheel {
        to {
          opacity: 0;
          top: 4px;
        }
      }

      @-webkit-keyframes wheel {
        to {
          opacity: 0;
          top: 4px;
        }
      }
    }

    .earthWrap {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      height: 50vh;
      display: flex;

      img {
        margin: 0 auto;
        width: 60vw;
        object-fit: cover;
        object-position: top;

        @media screen and (min-width: 769px) and (max-width: 950px) {
          width: 100%;
        }
        @media screen and (min-width: 480px) and (max-width: 768px) {
        }
      }
    }
  }
`

export const $RocketWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: #333;
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column-reverse;
    canvas {
      /* height: 100vh; */
      width: 100vw;
    }
  }
  @media screen and (max-width: 768px) {
    width: unset;
    canvas {
      /* height: 100vh; */
      width: unset !important;

      height: 100vh;
    }
  }
`

export const $Rocket2Wrap = styled.div`
  position: fixed;
  right: 2rem;
  z-index: 10;
  width: 5rem;
  top: calc(50vh - 10rem);

  @media screen and (max-width: 950px) {
    width: 4rem;
    bottom: 2rem;
    top: unset;
  }
`
