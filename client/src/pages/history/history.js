import React from "react";
import './history.css'
import { NavBarra } from '../../components/NavBarra/NavBarra';
import Form from 'react-bootstrap/Form';
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { api } from '../../service/Api'
import Card from 'react-bootstrap/Card';
import AnimatedPage from "../../components/Animate/AnimatedPage";
import { Denuncia } from "../celpe/Celpe";


export function History () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const token = localStorage.getItem('token');
    const [denuncia, setDenuncia] = useState([]);

    useEffect(() => {

        api.get('/denuncia', {
            headers: {
                Authorization: `${token}`
            }
        }).then((response) =>  {
            setDenuncia(response.data.denuncia)
            
        }).catch((error)=> {
            console.log(error)
        });

        
    },[])

    console.log(denuncia)
    return ( 
            
            <Form >
                <NavBarra/>
                <AnimatedPage>
                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',height:'100vh'}}>
             
                
                <div style={{letterSpacing: '2px', color: '#2a2a2a', display:'flex',justifyContent:'center',width:'100%',marginBottom:'30px',marginTop:'30px'}}>
                    
                    <div style={{width:'55%'}}>
                    <a href='./menu'>< FaArrowLeft  style={{fontSize:'20px',alignItems:'left',cursor:'url',color:'#2a2a2a'}}/></a>
                        
                    <h1 style={{fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#2a2a2a',transition: '0.2s'}}>Suas solicitações</h1>
                    
                    </div>
                </div>

                
                
                {denuncia.map(denu => {
                   return (
                    <Card style={{ width: '47rem', backgroundColor:'#eff0f3',marginBottom:'10px' }}>
                    <Card.Body>
                        <Card.Title>{denu.empresa}</Card.Title>
                        {denu.empresa === 'Grande Recife' ? (
                            <Card.Subtitle className="mb-2 text-muted">Linha: {denu.endereco}</Card.Subtitle>
                        ) : (
                            <Card.Subtitle className="mb-2 text-muted">{denu.endereco}</Card.Subtitle>
                        )}
                        <Card.Text>
                        {denu.texto}
                        </Card.Text>
                       
                    </Card.Body>
                    </Card>
                   )
                    
                })}

       
                
                </div>
                </AnimatedPage>
            </Form>
            );
}