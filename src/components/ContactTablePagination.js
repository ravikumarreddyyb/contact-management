import React from 'react';
import { TablePagination } from '@mui/material';
import { Padding } from '@mui/icons-material';

function ContactTablePagination({ count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) {
  return (
    <TablePagination
      rowsPerPageOptions={[3, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default ContactTablePagination;
