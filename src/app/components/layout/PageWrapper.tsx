import React from 'react';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: React.ReactNode;
  variant?: 'default' | 'tight' | 'loose' | 'none';
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  return (
    <main className={`${styles.pageWrapper} ${styles[variant]} ${className}`}>
      {children}
    </main>
  );
};

export default PageWrapper;
