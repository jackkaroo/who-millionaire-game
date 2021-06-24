import React from 'react';
import './index.css';
import hand from '../../images/hand.png';
import Button from '../Button';

function Page({
  href, buttonText, isStart, score,
}) {
  return (
    <div className={isStart ? 'page_wrapper start' : 'page_wrapper'}>
      <div className="page_image">
        <img src={hand} alt="page-hand" />
      </div>
      <div className="page_text">
        {isStart
          ? <h1 className="page_title">Who wants to be a millionaire?</h1>
          : (
            <div>
              <div className="page_subtitle">Total score:</div>
              <h1 className="page_title">
                $
                {score}
                {' '}
                earned
              </h1>
            </div>
          )}

        <Button text={buttonText} href={href} />
      </div>
    </div>
  );
}

export default Page;
