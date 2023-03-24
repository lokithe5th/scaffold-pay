// components/FallingDollarBills.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/fallingDollarBills.module.css';

interface DollarProps {
  left: number;
  duration: number;
}

const Dollar: React.FC<DollarProps> = ({ left, duration }) => {
  return (
    <span
      className={styles.dollar}
      style={{
        left: `${left}%`,
        animationDuration: `${duration}s`,
      }}
    >
      💵
    </span>
  );
};

const FallingDollarBills: React.FC = () => {
  const [dollars, setDollars] = useState<DollarProps[]>([]);

  useEffect(() => {
    const generateDollars = () => {
      const newDollars: DollarProps[] = [];
      for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        newDollars.push({ left, duration });
      }
      setDollars(newDollars);
    };

    generateDollars();
  }, []);

  return (
    <div className={styles.background}>
      {dollars.map((dollar, index) => (
        <Dollar key={index} left={dollar.left} duration={dollar.duration} />
      ))}
    </div>
  );
};

export default FallingDollarBills;