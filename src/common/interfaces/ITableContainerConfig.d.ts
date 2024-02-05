import { RowDTO } from '../dto';
import { eActionType } from '../enums';

export interface ITableContainerConfig<T> {
  columns: ITableContainerConfigColums<T>;
  onNew?: () => void;
  showActions?: boolean;
  onClickAction?: (type: eActionType, row: RowDTO) => void;
  isLoading?: boolean;
}

export interface ITableContainerConfigColums<T> {
  configs: {
    title: string;
    wdth?: string;
  }[];
  values?: T[];
}
