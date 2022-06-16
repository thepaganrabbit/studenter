import { Models } from '@rematch/core';
import { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import { ReactElement, ReactNode } from 'react';
import { test_mod } from './store/models/Test.model';

export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
}

export type PropsBase = {
  children: ReactElement[] | ReactNode[] | ReactElement | ReactNode;
};

export interface DataTableProps {
  title: string;
  data: any;
  columns: MUIDataTableColumnDef[];
  options?: MUIDataTableOptions;
}
