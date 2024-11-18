import React from "react";
import { Grid,TextField, Button } from "@mui/material";
import './form.css';

function ContactForm({form, setForm, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form">
            <TextField style={{marginBottom:'0.8%'}} className="one" label="First Name" fullWidth value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} required />
            <TextField style={{marginBottom:'0.8%'}} label="Last Name" fullWidth value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} required />
            <TextField style={{marginBottom:'0.8%'}} label="Email" fullWidth value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <TextField style={{marginBottom:'0.8%'}} label="Phone Number" fullWidth value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <TextField style={{marginBottom:'0.8%'}} label="Company" fullWidth value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <TextField style={{marginBottom:'0.8%'}} label="Job Title" fullWidth value={form.job_title} onChange={(e) => setForm({ ...form, job_title: e.target.value })} />
            </div>
            <Button type="submit" variant="contained" color="primary" style={{marginTop: '0.5%'}}>Save</Button>
        </form>
    )
}
export default ContactForm;