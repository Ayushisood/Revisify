import React from "react";
import { CardWrapper } from "./styles";

export const Card = ({ title, level, index }) => {
  return (
    <CardWrapper>
      <div className="card-content">
        <div className="card-content__left">
          {index && <span>{index}</span>}
          <div>{title}</div>
        </div>
        {level && <div className="card-content__right">{level}</div>}
      </div>
    </CardWrapper>
  );
};
