import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface SecondaryButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  href,
  onClick,
  disabled = false,
  className = '',
  ariaLabel = text,
}) => {
  const buttonContent = (
    <button
      className={`${styles.mcaSecondaryButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );

  return href ? (
    <Link href={href} passHref>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default SecondaryButton;
