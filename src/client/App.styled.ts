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
    top: 0;
    left: 0;
    z-index: 1;
  }

  .overlay {
    position: sticky;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    .floating {
      overflow-y: auto;
      width: 100%;
      height: 100%;
      h1 {
        margin: 0;
      }

      footer {
        padding: 0.5rem;
        background-color: #382c6f;
        border-radius: 0.7rem;
        margin: 2rem;
        color: #b5a5fd;
        border: 3px solid #5b4d9c;
        text-align: center;
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
        padding-right: 7em;
        padding-left: 2rem;

        @media screen and (max-width: 950px) {
          padding: 0 2rem;
        }
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
        padding-right: 7em;
        padding-left: 2rem;

        @media screen and (max-width: 950px) {
          padding: 0 2rem;
        }

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
        margin: 3rem;
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
          width: 80%;
        }
        @media screen and (max-width: 768px) {
          width: 90%;
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
    /* width: unset; */
    canvas {
      /* width: unset !important;
      height: 100vh; */
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
