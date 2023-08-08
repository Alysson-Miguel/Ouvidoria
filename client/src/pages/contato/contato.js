import './contato.css';
import React from 'react';
import { NavBarra } from '../../components/NavBarra/NavBarra';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa';
import AnimatedPage from '../../components/Animate/AnimatedPage';

export function Contato() {
    return (

           <div>
                < NavBarra style={{paddingBottom:'50px'}} />
                <AnimatedPage>
                <div style={{letterSpacing: '2px', color: '#2a2a2a', display:'flex',justifyContent:'center',width:'100%',marginBottom:'0px',paddingTop:'30px'}}>
                    <div style={{width:'65%'}}>
                    <a href='./'>< FaArrowLeft  style={{fontSize:'20px',alignItems:'left',cursor:'url',color:'#2a2a2a'}}/></a><h1 style={{fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#2a2a2a',transition: '0.2s'}}>Nosso time</h1>
                    </div>
                </div>

                <Row xs={1} md={5} className="g-5" style={{ width: '80%', margin: '0 auto',marginTop:'-30px'}}>
      {/* EMLURB - Limpeza Urbana */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>
        
          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/npg_5.png" />

            

          <Card.Body style={{ background: '#ffffff', borderRadius: '3px' }}>
          
            <Card.Text><span style={{ fontWeight: '700' }}>Edivaldo José</span></Card.Text>
            
            <Button variant="flat" href='https://www.linkedin.com/in/edivaldo-jos%C3%A9-3258611ab/' type='button' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLinkedin/> Entre em contato</Button> {/* Botão verde */}
          </Card.Body>
        </Card>
      </Col>

      {/* Grande Recife - Transporte Público */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>
       
          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/npg_4.png" />
          
          <Card.Body style={{ background:'ffffff', borderRadius: '3px 3px 0px 0px' }}>
            <Card.Text><span style={{ fontWeight: '700',justifyContent:'center' }}> Aline de Amorim</span></Card.Text>
            
            <Button variant='flat' href='http://www.linkedin.com/in/aline-amorim-08930922a' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLinkedin style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão azul */}
          </Card.Body>
        </Card>
        
      </Col>

      {/* CELPE - Energia Elétrica */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/jpg_3.png" />
          
          <Card.Body style={{ background:'ffffff', borderRadius: '3px' }}>
            <Card.Text><span style={{ fontWeight: '700' }}> Alysson Miguel</span></Card.Text>
            
            <Button href='https://www.linkedin.com/in/alyssonmiguel/' variant='flat' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLinkedin style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão amarelo */}
            
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/npg_2.png" />
          
          <Card.Body style={{ background:'ffffff', borderRadius: '3px' }}>
            <Card.Text><span style={{ fontWeight: '700' }}> Daiane Silva</span></Card.Text>
            
            <Button href='https://www.linkedin.com/in/daiane-silva-54b27426a/' variant='flat' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLinkedin style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão amarelo */}
            
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/npg_1.png" />
          
          <Card.Body style={{ background:'ffffff', borderRadius: '3px' }}>
            <Card.Text><span style={{ fontWeight: '700' }}>Caio Elias</span></Card.Text>
            
            <Button href='https://www.linkedin.com/in/caio-elias' variant='flat' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLinkedin style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão amarelo */}
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </AnimatedPage>
           </div>
    )
}