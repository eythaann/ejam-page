import React, { CSSProperties, useState } from 'react';

import classnames from './index.module.scss';

interface Props {
  name: string;
  size?: number;
  sizeText?: string;
}

export const Icon = ({ name, size = 12, sizeText }: Props) => {
  const [error, setError] = useState(false);

  if (error) {
    return <div>!!</div>;
  }

  const style: CSSProperties = {
    height: sizeText || `${size}px`,
    width: sizeText || `${size}px`,
  };

  return <img
    style={style}
    className={classnames.icon}
    src={`/assets/icons/${name}.svg`}
    onError={() => setError(true)}
  />;
};