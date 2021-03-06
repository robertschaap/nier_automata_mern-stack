import React from 'react';

import * as S from './background-circle.styles';

interface BackgroundCircleProps {
  size: number;
}

export const BackgroundCircle: React.FC<BackgroundCircleProps> = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <S.Circle />
    </svg>
  );
};
