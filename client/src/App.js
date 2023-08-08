
import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";
import React from "react";
import InputMask from "react-input-mask";

function App() {

const handleClickRegister = (values) => { Axios.post("http://localhost:8080/register",{
 email: values.email,
 password: values.password,
cpf: values.cpf} ) .then((response) =>{console.log(response);}); }





const validationRegister = yup.object().shape({
  email: yup
  .string()
  .email("Não é um endereço de e-mail válido.")
  .required('Este campo é obrigatório.'),
  cpf: yup
  .number()
    .integer()
    .typeError("O CPF deve conter apenas números.")
    .min(10000000000, "Não é um CPF válido.")
    .max(99999999999, "Não é um CPF válido.")
    .required('Este campo é obrigatório.'),
  password: yup
  .string()
  .min(8,"A senha deve conter no mínimo 8 caracteres.")
  .required('Este campo é obrigatório.'),
  confirmPassword: yup
  .string().oneOf([yup.ref('password'),null],'As senhas não são iguais.'),
});

  return (
    <div className="containerLog">
      
      
      <h1>Registro</h1>
      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}> 
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name="email" className='form-field' placeholder='E-mail'/>
            <ErrorMessage component='span' name="email" className='form-error'/>
          </div>

          <div className='login-form-group' >
            <Field name="cpf"   className='form-field' placeholder='Insira seu CPF'/>
            <ErrorMessage component='span' name="cpf" className='form-error'/>
          </div>

          <div className='login-form-group'>
            <Field name="password" className='form-field' placeholder='Senha'/>
            <ErrorMessage component='span' name="password" className='form-error'/>
          </div>

          <div className='login-form-group'>
            <Field name="confirmPassword" className='form-field' placeholder='Confime sua senha'/>
            <ErrorMessage component='span' name="confirmPassword" className='form-error'/>
          </div>

          <button className='button' type='submit'>Cadastrar</button>



        </Form>
      </Formik>
      
    </div>
  );
}

export default App;
