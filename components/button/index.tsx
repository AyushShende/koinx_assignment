import { cn } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant: 'primary' | 'secondary';
}

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded px-4 py-2 font-medium',
        {
          'bg-primary-500 text-white': variant === 'primary',
          'bg-white text-black': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
