import * as React from 'react';
import clsx from 'clsx';

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({children, className, ...rest}) => {
  return (
    <button className={clsx('h-10 rounded-md bg-gray-800 px-5 text-white sm:h-12 sm:px-8', className)} {...rest}>
      {children}
    </button>
  );
};
