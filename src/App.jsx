import { useState } from 'react';
import { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';

import './App.scss';

function App() {
  const handleReg = (value) =>{
    const newData = {
      id:nanoid(4),
      username: value.username,
      email: value.email,
      phonenumber: value.phonenumber,
    };
    axios.post('http://localhost:3000/posts',newData).then(()=>getData())
    setData([...data,newData])
  }
  const [data,setData]= useState([])

  const getData = () =>{
    axios('http://localhost:3000/posts').then(res=>setData(res.data))
  }

  useEffect(()=>{
    getData()
  },[])

  const initialValues = {
    username: '',
    email: '',
    phonenumber: '',
  }

  const validationSchema = object({
    username: string().min(4,'minimum 4 character').max(15,'maximum 15 character').required(),
    email: string().min(4,'minimum 4 character').max(15,'maximum 15 character').required(),
    phonenumber: string().min(4,'minimum 4 character').max(15,'maximum 15 character').required(),
  })

  return (
    <div className="App">
      <Formik
        onSubmit={handleReg}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage component='p' name='username'/>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage  component='p' name='email'/>
          <Field type="number" name="phonenumber" placeholder="Phone number" />
          <ErrorMessage component='p' name='phonenumber'/>
          <button type='submit'>Sign In</button>
        </Form>
      </Formik>

      {
        data.map((elm)=>{
          return(
            <div>
              <p>{elm.username}</p>
              <p>{elm.email}</p>
              <p>{elm.phonenumber}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
