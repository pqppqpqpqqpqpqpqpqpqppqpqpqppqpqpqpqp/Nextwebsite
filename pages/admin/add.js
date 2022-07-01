import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
const Allproducts = () => {
  const [form, setForm] = useState({})
  const onChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    
  }
  const submitform = async (e) =>{
     e.preventDefault()
     const data = {form}
     let res = await fetch(`/api/addproducts`, {
     
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
   
      body: JSON.stringify(data),
     
    })
   
    let response = await res.json()
    console.log(response)
    
    toast.success('Your account has been created', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
    return (
        <ThemeProvider theme={theme}>
           <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
       <FullLayout>
     
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
          <Stack spacing={3}>
            <TextField onChange={onChange}
             value={form.title? form.title:""} name="title"
              label="Title"
              variant="outlined"
              
            />
            <TextField onChange={onChange} value={form.type? form.type:""} name="type" label="Type" variant="outlined" />
            <TextField onChange={onChange} value={form.size? form.size:""} name="size" label="Size" variant="outlined" />
            <TextField onChange={onChange} value={form.color? form.color:""} name="color" label="Color" variant="outlined" />
            <TextField onChange={onChange} value={form.slug? form.slug:""} name="slug" label="Slug" variant="outlined" />
        
            <TextField onChange={onChange}
              name="desc"
              label="Description"
              value={form.desc? form.desc:""}
              multiline
              rows={4}
             
            />
        
            
        
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>

      
    </Grid>
 
        </FullLayout>
        </ThemeProvider>
        
      );
}

export default Allproducts