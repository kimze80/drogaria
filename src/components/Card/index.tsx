/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { MouseEventHandler, useState, useCallback } from 'react';
import { CardContainer, CardContent, CardHeader } from './styles';

interface CardProp {
  imgSrc: string;
  headerText: string;
  backgroundColor: string;
  contentText: string;
  btnText: string;
  scrollMoreText?: string;
  btnAction?: MouseEventHandler;
}

const Card: React.FC<CardProp> = ({
  imgSrc,
  backgroundColor,
  headerText,
  contentText,
  btnText,
  scrollMoreText,
  btnAction,
}) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [expand, setExpand] = useState(false);

  const toggleMoreText = useCallback(() => {
    setExpand(!expand);
    if (expand === true) {
      setShowMoreText(!showMoreText);
    } else {
      setTimeout(() => {
        setShowMoreText(!showMoreText);
      }, 160);
    }
  }, [showMoreText, expand]);

  return (
    <CardContainer>
      <CardHeader backgroundColor={backgroundColor}>
        <div>
          <img src={imgSrc} alt="" />
        </div>
        <h3>{headerText}</h3>
      </CardHeader>
      <CardContent
        backgroundColor={backgroundColor}
        scrollMoreText={scrollMoreText}
        expand={expand}
      >
        <p>{contentText}</p>
        {showMoreText && (
          <div className="toScroll">
            <p>{contentText}</p>
          </div>
        )}

        <div className="button">
          <button
            onClick={scrollMoreText ? toggleMoreText : btnAction}
            type="button"
          >
            {btnText}
          </button>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
