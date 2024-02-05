import { memo } from 'react';
import * as LABELS from '@/common/labels';
import s from './tablecontainer.module.scss';
import { Button, Pencil, Plus, Spinner, Trash } from '../..';
import { ITableContainerConfig } from '@/common/interfaces';
import { eActionType } from '@/common/enums';
import { arraysToObjectMapper } from '@/common/utils';

interface TableContainerProps {
  config: ITableContainerConfig<Array<number | string>>;
}

const TableContainer: React.FC<TableContainerProps> = ({ config }) => {
  return (
    <div className={s.tablecontainer}>
      <div className={s.tablecontainer_addbtn}>
        <Button icon={<Plus width="16" height="16" />}>{LABELS.CREATE_NEW_USER}</Button>
      </div>
      <table className={s.table}>
        <thead>
          <tr className={s.table_row}>
            {config?.columns.configs?.map((conf, i) => (
              <th
                key={i}
                style={{
                  width: conf?.wdth,
                }}
                className={s.table_title}>
                {conf.title}
              </th>
            ))}
            {config?.showActions && <th className={s.table_title}>{LABELS.ACTIONS}</th>}
          </tr>
        </thead>
        <tbody>
          {config.columns?.values?.map((col, i) => (
            <tr key={i} className={`${s.table_row} ${s.table_row__shadow}`}>
              {col.map((val, index) => (
                <td key={index} className={s.table_cell}>
                  {val}
                </td>
              ))}

              {config?.showActions && (
                <td className={`${s.table_cell} ${s.table_cell__actions}`}>
                  <div className={s.table_cell_icons}>
                    <span
                      onClick={() =>
                        config?.onClickAction &&
                        config?.onClickAction(
                          eActionType.EDIT,
                          arraysToObjectMapper({
                            keys: config.columns.configs.map(conf => {
                              return conf.title.toLowerCase();
                            }),
                            values: config.columns.values ? config.columns.values[i] : [],
                          }),
                        )
                      }
                      className={s.table_cell_icon}>
                      <Pencil width="15" height="15" color="#CCD2E3" />
                    </span>
                    <span
                      onClick={() =>
                        config?.onClickAction &&
                        config?.onClickAction(
                          eActionType.DELETE,
                          arraysToObjectMapper({
                            keys: config.columns.configs.map(conf => {
                              return conf.title.toLowerCase();
                            }),
                            values: config.columns.values ? config.columns.values[i] : [],
                          }),
                        )
                      }
                      className={s.table_cell_icon}>
                      <Trash width="17" height="18" color="#CCD2E3" />
                    </span>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!config.isLoading && config.columns.values && config.columns.values.length === 0 && (
        <div className={s.table_body__nodata}>
          <h3>No data</h3>
        </div>
      )}
      {config.isLoading && (
        <div className={s.table_body__nodata}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
export default memo(TableContainer);
