'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface OutlineButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
  disabled = false,
  target,
  rel,
}) => {
  // Safely combine class names to prevent hydration errors
  const combinedClassName = [styles.mcaOutlineButton, className]
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
        aria-label={text}
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
      aria-label={text}
      type="button"
    >
      {text}
    </button>
  );
};

export default OutlineButton;
