import { FieldErrors, RegisterOptions, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import s from './input.module.scss';
import { getValueByChainedKeys } from '@/common/utils';
import { UserDTO } from '@/common/dto';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'number' | 'email' | 'phone';
  required?: boolean | string;
  placeholder?: string;
  register: UseFormRegister<any>;
  watch?: UseFormWatch<UserDTO>;
  setValue?: UseFormSetValue<UserDTO>;
  getValues?: UseFormGetValues<UserDTO>;
  errors?: FieldErrors<any>;
  field?: string;
  options?: RegisterOptions<any, string> | undefined;
  checkbox?: {
    label: string;
    name: string;
    id?: string;
  };
}

const Input: React.FC<InputProps> = ({ type = 'text', ...props }) => {
  const [value, setValue] = useState<any>({
    label: 'Enter address',
    value: '',
  });
  const { ref, ...rest } = props.register(props.name, { required: props.required, ...props.options });
  // const searchBoxRef = useRef(null);

  // const handleCleareInput = () => {
  //   props.setValue && props.setValue('address.street', '');
  // };

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (searchBoxRef.current && !(searchBoxRef.current as any).contains(e.target)) {
  //       props.setValue && props.setValue('address.street', '');
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [props]);

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
      {/* <div ref={searchBoxRef}> */}
      {props.watch && props.watch('gooleLoc') ? (
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_APP_GOOGLE_API_KEY}
          selectProps={{
            placeholder: 'Enter address',
            className: 'select_autocomplete',
            classNamePrefix: 'select_autocomplete',
            value,
            onChange: newValue => {
              if (newValue?.value) {
                const terms: Array<{ value: string }> = newValue?.value.terms;
                if (terms.length > 0) {
                  if (props.getValues)
                    setValue({
                      label: terms[0].value,
                      value: terms[0].value,
                    });
                  props.setValue && props.setValue('address.street', terms[0].value);
                  props.setValue && props.setValue('address.city', terms[1].value);
                }
              }
            },
          }}
        />
      ) : (
        <input
          id={props.id}
          type={type}
          ref={e => {
            ref(e);
          }}
          {...rest}
          className={`${s.input_field} ${props.errors && getValueByChainedKeys(props.errors, props.name) && s.input_field__error}`}
          placeholder={props.placeholder}
        />
      )}
      {/*//////////////////// Esht nje element qe eshte custom per te bere search places api nepermjet inputit native te mesiperm*/}
      {/* {props.watch && props.watch('gooleLoc') && props.watch('address.street').trim() !== '' && (
          <span onClick={handleCleareInput} className={s.clear_input}>
            <Close />
          </span>
        )} */}
      {/* {props.watch && props.watch('gooleLoc') && props.watch('address.street').trim() !== '' && (
          <div className={s.input_autocomplete}>
            {data.map(d => (
              <p>{d}</p>
            ))}
          </div>
        )} ///////////////////*/}
      {/* </div> */}
      {/* {props.errors && getValueByChainedKeys(props.errors, props.name) && (
        <span className={s.input_error}>{typeof props.required === 'string' ? props.required : `${props?.label} is required`}</span>
      )} */}
      {props.errors && getValueByChainedKeys(props.errors, props.name) && (
        <span className={s.input_error}>{getValueByChainedKeys(props.errors, props.name)?.message}</span>
      )}
    </div>
  );
};
export default Input;
