import styled from "@emotion/styled";

export const UsersAppContainer = styled.div`
  width: 400px;
  height: 600px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding: 40px;
`;

export const Search = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 15px;
  border-radius: 15px;
  width: 80%;
  font-size: 16px;
  padding-left: 50px;
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 17px;
  left: 20px;
  opacity: 0.3;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  height: calc(100% - 130px);
  margin-top: 30px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    & > div {
      display: flex;
    }

    img.avatar {
      border-radius: 30px;
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    .action {
      width: 28px;
      height: 28px;
      opacity: 0.3;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    h3 {
      margin: 0;
      font-weight: 900;
      font-family: "Merriweather", serif;
      margin-left: 15px;
      margin-top: 5px;
      margin-left: 0;
      color: #182170;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin: 0;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 3px;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 4px;

        path {
          fill: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

export const SkeletonList = styled.div`
  height: calc(100% - 130px);
  margin-top: 30px;

  svg {
    margin-bottom: 15px;
  }
`;

export const InviteBtn = styled.button`
  background-color: rgb(251, 80, 0);
  padding: 16px 15px;
  border-radius: 15px;
  font-size: 16px;
  color: #fff;
  width: 100%;
  border: 0;
  outline: none;
  box-shadow: 0 7px 10px rgba(251, 80, 0, 0.4);
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: rgb(255, 97, 24);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  animation: success-show 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);

  img {
    width: 120px;
    height: 120px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 0;
    margin-top: 10px;
  }

  p {
    text-align: center;
    margin-bottom: 30px;
  }

  button {
    width: 200px;
    height: 60px;
    background-color: transparent;
    border: none;
    background-color: #ff9500;
    border-radius: 15px;
    font-size: 24px;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgb(255, 117, 4) 0px 2px 14px -1px;
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const CheckIcon = styled.div`
  color: green;
`;

export const ButtonUser = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;

  transition: transform 100ms ease-in-out;
  color: orange;

  &:hover {
    transform: translateY(-2px);
  }
`;
