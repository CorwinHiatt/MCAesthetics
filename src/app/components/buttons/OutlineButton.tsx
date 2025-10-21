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
  // Fix: Trim and ensure consistent spacing
  const combinedClassName = `${styles.mcaOutlineButton}${className ? ' ' + className : ''}`.trim();

  const buttonContent = (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      type="button" // IMPORTANT: Always include type
    >
      {text}
    </button>
  );

  if (href) {
    return (
      <Link href={href} passHref target={target} rel={rel}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default OutlineButton;
