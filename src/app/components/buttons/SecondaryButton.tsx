"use client";

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
  target?: string;
  rel?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  href,
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
  target,
  rel,
}) => {
  // Safely combine class names to prevent hydration errors
  const combinedClassName = [styles.mcaSecondaryButton, className]
    .filter(Boolean)
    .join(' ')
    .trim();

  const buttonContent = (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      type="button"
    >
      {text}
    </button>
  );

  return href ? (
    <Link href={href} passHref target={target} rel={rel}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default SecondaryButton;