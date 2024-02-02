import s from './layout.module.scss';

const LayoutModule: React.FC<React.PropsWithChildren> = props => {
  return <div className={s.layout}>{props.children}</div>;
};

export default LayoutModule;
