import { memo } from 'react';
import s from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={s.button}>
      {props.icon && props.icon}
      {props.children}
    </button>
  );
};
export default memo(Button);
