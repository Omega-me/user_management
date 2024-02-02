'use client';
import { memo } from 'react';
import s from './suspenseloading.module.scss';
import { Spinner } from '..';

const SuspenseLoading = () => {
  return (
    <div className={s.suspenseloading}>
      <Spinner />
    </div>
  );
};
export default memo(SuspenseLoading);
