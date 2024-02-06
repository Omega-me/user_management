import { FieldErrors, UseFormRegister } from 'react-hook-form';
import s from './input.module.scss';
import { getValueByChainedKeys } from '@/common/utils';

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'number' | 'email';
  required?: boolean | string;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  field?: string;
  checkbox?: {
    label: string;
    name: string;
    id?: string;
  };
}

const Input: React.FC<InputProps> = ({ type = 'text', ...props }) => {
  return (
    <div className={s.input}>
      <div className={s.input_label}>
        <label htmlFor={props.id}>{props.label}</label>
        {props?.checkbox && (
          <div className={s.input_checkbox}>
            <label htmlFor={props?.checkbox.id}>
              <input {...props.register(props?.checkbox.name)} id={props?.checkbox.id} type="checkbox" />
              <span className={s.input_checkbox__mark}></span>
              {props?.checkbox?.label}
            </label>
          </div>
        )}
      </div>
      <input
        id={props.id}
        type={type}
        {...props.register(props.name, { required: props.required })}
        className={`${s.input_field} ${props.errors && getValueByChainedKeys(props.errors, props.name) && s.input_field__error}`}
        placeholder={props.placeholder}
      />
      {props.errors && getValueByChainedKeys(props.errors, props.name) && (
        <span className={s.input_error}>{typeof props.required === 'string' ? props.required : `${props?.label} is required`}</span>
      )}
    </div>
  );
};
export default Input;
