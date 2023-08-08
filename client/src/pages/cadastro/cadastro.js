import './cadastroStyle.css';
import { NavBarra } from '../../components/NavBarra/NavBarra';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedPage from '../../components/Animate/AnimatedPage';
import { api } from '../../service/Api';


export function Cadastro(){

    const handleClickRegister = (values) => {
        api.post("/register", {
          email: values.email,
          password: values.password,
          nome: values.nome,
          cpf: values.cpf
        }).then((response) => { 
            
            alert('Cadastro bem-sucedido.');
          
        }).catch((response) => {
            alert('Dados já em uso.');
        });
      };





const validationRegister = yup.object().shape({
  email: yup
  .string()
  .email("Não é um endereço de e-mail válido.")
  .required('Este campo é obrigatório.'),
  nome: yup
  .string()
  .required('Este campo é obrigatório'),
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



    return(
        <div>
            <NavBarra/>
            <AnimatedPage>

            <div className='p-2'style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'80vh',transition: '0.2s'}}>

                <div style={{letterSpacing: '2px', color: '#2a2a2a', display:'flex',justifyContent:'center',width:'100%',marginBottom:'30px'}}>
                    <div style={{width:'55%'}}>
                    <h1 style={{fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#2a2a2a',transition: '0.2s'}}>Cadastro</h1>
                    </div>
                </div>

                <div>

                    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister} >

                        <Form >


                            <div className="input-box" >
                            <Container>
                                <Row className='justify-content-md-center'>
                                    <Col xs={3}>
                                    
                                        <div className="input-field">
                                            <Field type="text" name="email" className="input form-field" id="email" required autocomplete="off"/>
                                            <ErrorMessage component='span' name="email" className='form-error'/>
                                            <label for="email">E-Mail</label>
                                        </div>

                                        <div className="input-field">
                                            <Field type="text" name="nome" className="input form-field" id="nome" required autocomplete="off"/>
                                            <ErrorMessage component='span' name="nome" className='form-error'/>
                                            <label for="nome">Nome</label>
                                        </div>
                                    
                                        
                                        <div className="input-field">
                                            <Field type="text" name="cpf" maxlength="11" className="input form-field" id="cpf" required autocomplete="off"/>
                                            <ErrorMessage component='span' name="cpf" className='form-error'/>
                                            <label for="email">CPF (Apenas Números)</label>
                                        </div>
                                    </Col>
                                        
                                    <Col xs={4}>
                                        <div className="input-field">
                                            <Field type="password" name="password" className="input form-field" id="password" required />
                                            <ErrorMessage component='span' name="password" className='form-error'/>
                                            <label for="password">Senha</label>
                                        </div>

                                        <div className="input-field">
                                            <Field type="password" name="confirmPassword" className="input form-field" id="confirmPassword" required />
                                            <ErrorMessage component='span' name="confirmPassword" className='form-error'/>
                                            <label for="password">Confirme sua senha</label>
                                        </div>
                                        



                                        
                                    </Col>
                                </Row>
                                </Container>   
                            </div>
                            <div className="input-field" style={{width:'100%',display:'flex',alignItems:'center',paddingTop:'30px'}}>
                                            <input type="submit" style={{width:'600px'}} className="submit" value="Registrar-se" />
                                            </div>
                        </Form>

                    </Formik>
                    
                                            
                                        
                                        <div className="signin">
                                            <span style={{fontWeight:'340'}}>Suas informações serão usadas apenas para cadastro. A Ouvidoria.Hub jamais compartilhará seus dados com ninguém.</span>
                                        </div>
                </div>    
            
            </div>
            </AnimatedPage>
        </div>
    )
}