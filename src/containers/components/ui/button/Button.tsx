import { memo } from 'react';
import s from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button onClick={props.onClick} style={{ width: props?.width, height: props?.height, fontSize: props.fontSize }} className={s.button}>
      {props.icon && props.icon}
      {props.children}
    </button>
  );
};
export default memo(Button);
