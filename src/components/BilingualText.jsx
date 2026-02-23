import React from 'react';
import { useBilingualText } from '../hooks/useTranslation';

const BilingualText = ({ english, hindi, className = '' }) => {
  const displayText = useBilingualText(english, hindi);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default BilingualText;
