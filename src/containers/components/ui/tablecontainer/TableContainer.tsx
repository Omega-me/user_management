import { memo } from 'react';
import s from './tablecontainer.module.scss';
import { Button, Plus } from '../..';

interface TableContainerProps {}

const TableContainer: React.FC<TableContainerProps> = props => {
  return (
    <div className={s.tablecontainer}>
      <div className={s.tablecontainer_addbtn}>
        <Button icon={<Plus width="16" height="16" />}>Create New User</Button>
      </div>
      <div className={s.table}>
        <div className={s.table_row}>
          <div className={s.table_title}>title 1</div>
          <div className={s.table_title}>title 2</div>
          <div className={`${s.table_title}`}>title 3</div>
        </div>
        <div className={s.table_row}>
          <div className={s.table_cell}>Cell 1</div>
          <div className={s.table_cell}>Cell 2</div>
          <div className={s.table_cell}>Cell 3</div>
        </div>
        <div className={s.table_row}>
          <div className={s.table_cell}>Cell 4</div>
          <div className={s.table_cell}>Cell 5</div>
          <div className={s.table_cell}>Cell 6</div>
        </div>
      </div>
    </div>
  );
};
export default memo(TableContainer);
