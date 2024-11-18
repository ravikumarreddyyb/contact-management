import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import ContactTablePagination from './components/ContactTablePagination';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ id: null, first_name: '', last_name: '', email: '', phone: '', company: '', job_title: '' });
  const [page, setPage] = useState(0); ///
  const [rowsPerPage, setRowsPerPage] = useState(3);  ///


  const fetchContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactData = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        job_title: form.job_title
      };
  
      if (form.id) {
        await axios.put(`http://localhost:5000/contacts/${form.id}`, contactData);
      } else {
        await axios.post('http://localhost:5000/contacts', contactData);
      }
  
      setForm({ id: null, first_name: '', last_name: '', email: '', phone: '', company: '', job_title: '' });
      fetchContacts();
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };
  

  const handleEdit = (contact) => setForm(contact);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };


  const handleChangePage = (event, newPage) => {    ///
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {     ///
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>

      <ContactForm form={form} setForm={setForm} handleSubmit={handleSubmit}/>

      <ContactTable  contacts={contacts} handleEdit={handleEdit} handleDelete={handleDelete} page={page} rowsPerPage={rowsPerPage}/>
      
      <ContactTablePagination
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default App;