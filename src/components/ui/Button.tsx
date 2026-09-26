import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'right',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080A] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 tech-mono',
      md: 'text-sm px-5 py-2.5 gap-2 tech-mono',
      lg: 'text-base px-6 py-3.5 gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-[#00E5FF] text-[#07080A] font-semibold hover:bg-[#38BDF8] active:translate-y-0.5 shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_28px_rgba(0,229,255,0.4)]',
      secondary:
        'bg-[#121824] text-[#F8FAFC] border border-[#273448] hover:border-[#00E5FF] hover:bg-[#182232] active:translate-y-0.5',
      outline:
        'border border-[#273448] text-[#F8FAFC] hover:border-[#00E5FF] hover:text-[#00E5FF] hover:bg-[#00E5FF]/5 active:translate-y-0.5',
      ghost:
        'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#121824] active:translate-y-0.5',
    };

    const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
