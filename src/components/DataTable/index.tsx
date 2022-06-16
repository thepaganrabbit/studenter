import React from 'react';
import MUIDataTable from 'mui-datatables';
import { DataTableProps } from '../../types';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const DataTable = ({ data, columns, options, title }: DataTableProps) => {
  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
};

export default DataTable;
