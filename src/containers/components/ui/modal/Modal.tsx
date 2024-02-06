import { PropsWithChildren, memo } from 'react';
import { Button, Close } from '../..';
import s from './modal.module.scss';

interface ModalProps extends PropsWithChildren {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
  isActive?: boolean;
  typeButton?: 'button' | 'submit' | 'reset' | undefined;
}

const Modal: React.FC<ModalProps> = ({ typeButton = 'button', ...props }) => {
  return (
    <div
      onClick={e => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      }}
      id="modal"
      className={`${s.modal} ${!props.isActive && s.modal__deactivated}`}>
      <div id="modal_container" className={`${s.modal_container} ${!props.isActive && s.modal_container__deactivated}`}>
        <div className={s.modal_header}>
          <div className={s.modal_header__title}>{props.title}</div>
          <div onClick={() => props.onClose()} className={s.modal_header__close}>
            <Close />
          </div>
        </div>
        <div className={s.modal_body}>{props.children}</div>
        <div className={s.modal_footer}>
          <Button type={typeButton} onClick={() => props.onSubmit()} fontSize="12px" width="100px" height="35px">
            {props.btnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default memo(Modal);
