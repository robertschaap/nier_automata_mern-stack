import * as React from 'react';
import styles from './AilmentsPanel.scss';

const AilmentsPanel: React.FunctionComponent = () => {
  // TODO: replace with actual ailments
  const ailments = Array(11).fill(0).map((el, index) => (
    <div key={index} className={styles.ailment} />
  ));

  return (
    <div className={styles.component}>
      {ailments}
    </div>
  );
};

export default AilmentsPanel;