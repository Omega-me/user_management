import { memo } from 'react';
import s from './spinner.module.scss';

const Spinner = () => {
  return <div className={s.spinner}></div>;
};
export default memo(Spinner);
