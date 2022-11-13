import styled from "@emotion/styled";

export const Appcontainer = styled.div`
margin-top: 60px;
   width: 500px;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;

  .result {
    text-align: center;

    button {
      font-weight: bold;
      font-family: 'Nunito', sans-serif;
      border-radius: 30px;
      border: 0;
      padding: 15px 30px;
      font-size: 20px;
      background-color: darken(#ff006e, 3%);
      color: #fff;
      margin-top: 20px;
      cursor: pointer;
    }

    h2 {
      margin-bottom: 0;
    }

    img {
      width: 150px;
    }
  }

  .progress {
    height: 10px;
    border-radius: 30px;
    background-color: rgb(232, 232, 232);
    margin-bottom: 25px;

    &__inner {
      height: 100%;
      border-radius: 30px;
      width: 80%;
      background: rgb(18, 231, 48);
      transition: all 0.3s ease-in-out;
      background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
    }
  }

  &:before,
  &:after {
    content: '';
    display: block;
    height: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    width: 95%;
    bottom: -10px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  &:after {
    width: 90%;
    bottom: -20px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  h1 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 15px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        border: 2px solid rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export const Results = styled.div`
  text-align: center;

  .button {
    font-weight: bold;
    font-family: "Nunito", sans-serif;
    border-radius: 30px;
    border: 0;
    padding: 15px 30px;
    font-size: 20px;
    background-color: darken(#ff006e, 3%);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }

  .h2 {
    margin-bottom: 0;
  }

  .img {
    width: 150px;
  }
`;

export const Progress = styled.div`
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  margin-bottom: 25px;

  .inner {
    height: 100%;
    border-radius: 30px;
    width: 80%;
    background: rgb(18, 231, 48);
    transition: all 0.3s ease-in-out;
    background: linear-gradient(
      90deg,
      rgba(18, 231, 48, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;
