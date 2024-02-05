import { memo } from 'react';
import s from './modal.module.scss';
import { Button, Close } from '../..';

interface ModalProps {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
}

const Modal: React.FC<ModalProps> = props => {
  return (
    <div className={s.modal}>
      <div className={s.modal_container}>
        <div className={s.modal_header}>
          <div className={s.modal_header__title}>{props.title}</div>
          <div onClick={props.onClose} className={s.modal_header__close}>
            <Close />
          </div>
        </div>
        <div className={s.modal_body}>
          <div className={s.modal_body__left}>left</div>
          <div className={s.modal_body__right}>right</div>
        </div>
        <div className={s.modal_footer}>
          <Button onClick={props.onSubmit} fontSize="12px" width="100px" height="35px">
            {props.btnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default memo(Modal);
