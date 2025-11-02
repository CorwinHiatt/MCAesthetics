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

  // If href is provided, render as Link with button styling
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        aria-label={ariaLabel || text}
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }

  // Otherwise render as button
  return (
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
};

export default SecondaryButton;