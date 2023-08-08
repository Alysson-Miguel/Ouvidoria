import './styles.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import { NavBarra } from '../../components/NavBarra/NavBarra';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/Animate/AnimatedPage';
import { api } from '../../service/Api';


export function Login() {

    const history = useNavigate()

    const handleClickLogin = (values) => {
        api.post("/login",{
          email: values.email,
          password: values.password
        }).then((response) =>{
             localStorage.setItem("token", response.data.token)
        history("/menu")
        }).catch(() => {
            alert("Usuário ou senha incorretos")
        });
        


        };
        
        const validationLogin = yup.object().shape({
          email: yup
          .string()
          .email("Não é um endereço de e-mail válido.")
          .required('Este campo é obrigatório.'),
          password: yup
          .string()
          .min(8,"")
          .required('Este campo é obrigatório.'),
        });

    return (
        <div>
            <NavBarra/>
            <AnimatedPage>
            <div  style={{ width:'70%', fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#fff', position:'absolute',zIndex:1,paddingTop:'100px',paddingLeft:'30px',lineHeight:'3.75rem'}}>
                        
                        <p> Dê feedbacks e melhore a infraestrutura urbana da sua cidade. </p>
                    </div>
            <Stack direction="horizontal">
            <Carousel style={{ width: '70%', height: '91.4vh', position:'relative' }} >
                <Carousel.Item interval={2000} style={{ height: '91.4vh',backgroundPosition: 'right' }} text="First slide">
                
                    <Image fluid src='./img/cais2.png'/>
                    
                    
                </Carousel.Item >
                
                <Carousel.Item interval={2000} style={{ height: '91.4vh',backgroundPosition: 'right' }}>
                    <Image fluid src='./img/recife_upscaled_2.png'  />
                    
                </Carousel.Item>
                
                <Carousel.Item interval={2000} style={{ height: '91.4vh',backgroundPosition: 'right' }}>
                    <Image fluid src='./img/rua_bom_jesus2.png'/>
                    
                </Carousel.Item>
            </Carousel>

            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>

            <Form className='mx-auto'>
                <div className="input-box">
                    <header style={{letterSpacing: '2px', color: '#2a2a2a'}}>BEM VINDO (A)</header>
                    
                    <div className="input-field">
                        <Field type="text" name="email" className="input form-field" id="email" required autocomplete="off"/>
                        <ErrorMessage component='span' name="email" className='form-error'/>
                        <label for="email">E-Mail</label>
                    </div>

                    <div className="input-field">
                        <Field type="password" name="password" className="input form-field" id="password" required />
                        <ErrorMessage component='span' name="password" className='form-error'/>
                        <label for="password">Senha</label>
                    </div>

                    <div className="input-field">
                        <input type="submit" className="submit" value="Entrar" />
                        
                    </div>
                    <div className="signin">
                        <span>Ainda não tem uma conta?<a href="/register"> Cadastre-se </a></span>
                    </div>

                </div>
            </Form>

            </Formik>

        </Stack>   
        </AnimatedPage>
        </div>
    )
}