import React from 'react';
import './index.scss';

function Button({ text, href }) {
  return (
    <a className="button" type="submit" href={href}>
      {text}
    </a>
  );
}

export default Button;
