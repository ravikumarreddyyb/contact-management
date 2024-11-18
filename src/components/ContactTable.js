import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, colors } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import './table.css';
function ContactTable({ contacts, handleEdit, handleDelete, page, rowsPerPage }) {
  return (
    <TableContainer component={Paper} className='table-container'>
      <Table>
        <TableHead>
          <TableRow className='table-head'>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.first_name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.job_title}</TableCell>
              <TableCell>
                <IconButton style={{ color: 'green' }} onClick={() => handleEdit(contact)}><Edit /></IconButton>
                <IconButton style={{ color: 'red' }} onClick={() => handleDelete(contact.id)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
