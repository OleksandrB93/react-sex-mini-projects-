import React from "react";
import { SuccessBox } from "./UsersApp.styled";
import { GiCheckMark } from "react-icons/gi";
import { CheckIcon } from "./UsersApp.styled";

export const Success = ({ count }) => {
  return (
    <SuccessBox>
      <CheckIcon>
        <GiCheckMark size={200} />
      </CheckIcon>
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()}>Назад</button>
    </SuccessBox>
  );
};
