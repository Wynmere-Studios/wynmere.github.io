import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-plum-700 text-white hover:bg-plum-700/80 focus:ring-plum-400',
    secondary: 'bg-white/5 text-white border border-white/15 hover:bg-white/10 focus:ring-plum-400',
    outline: 'bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={combinedClasses}
        onClick={(e) => {
          if (href.startsWith('#') && onClick) {
            e.preventDefault();
            onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
          }
        }}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
