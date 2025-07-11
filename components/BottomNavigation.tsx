'use client'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface FloatingButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const FloatingBottomButton = ({
  href,
  onClick,
  icon: Icon = Sparkles,
  size = 'sm',
  className,
  children
}: FloatingButtonProps) => {
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  const buttonClasses = cn(
    sizeClasses[size],
    "fixed bottom-6 right-6 rounded-full flex items-center justify-center",
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    "transition-all duration-300 ease-out",
    "hover:scale-110 active:scale-95",
    "animate-in slide-in-from-bottom-4 fade-in-0 duration-500",
    "z-50 group",
    className
  );

  const content = (
    <>
      <Icon className={cn(iconSizes[size], "transition-transform duration-200 group-hover:rotate-12")} />
      {children}
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-current opacity-20 scale-0 group-hover:scale-100 group-hover:opacity-10 transition-all duration-300" />
      
      {/* Blue Glow effect */}
      <div className="absolute inset-0 rounded-full bg-blue-600 opacity-50 blur-lg scale-75 group-hover:scale-100 transition-all duration-300" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

// Pre-built AI Analytics Button
export const AIAnalyticsButton = () => (
  <FloatingBottomButton 
    href="/ai-chat"
    icon={Sparkles}
    size="sm"
  />
);

export default FloatingBottomButton;
