import { memo } from 'react';
import s from './modal.module.scss';

interface ModalProps {}

const Modal: React.FC<ModalProps> = props => {
  return <div className={s.modal}>Modal</div>;
};
export default memo(Modal);
