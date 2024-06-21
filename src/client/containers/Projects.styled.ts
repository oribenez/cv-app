import styled from 'styled-components'

export const $Container = styled.div`
  .btnSlideShow {
    background-color: #fff;
    color: #1a1a1a;
    border-radius: 5rem;
    display: flex;
    text-align: center;
    margin: 0.5rem;
    transition: 0.1s ease-in-out background-color;
    &:hover {
      background-color: #ddd;
    }
  }

  h1 {
    text-align: center;
    padding-top: 4rem;
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 2rem;
    margin-right: 5rem;

    .projectWrap {
      padding: 1rem 4rem;
      /* background-color: rgba(255, 255, 255, 0.6); */
      border-radius: 1rem;
      border-left: 4px solid rgba(255, 255, 255, 0.1);
      border-top: 2px solid rgba(255, 255, 255, 0.1);

      /* box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6) inset; */

      p.info {
        background-color: #333;
        padding: 1rem;
        border-radius: 1rem;
      }
      .projectInnerWrap {
        display: flex;
        gap: 2rem;

        @media screen and (max-width: 1200px) {
          flex-direction: column;
        }

        .videoWrap {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .videoWrap video {
          width: 30rem;
        }
      }
    }
  }
`
