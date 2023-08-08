import './inicioStyle.css';
import React from 'react';
import { NavBarra } from '../../components/NavBarra/NavBarra';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaBus, FaLightbulb,FaArrowLeft } from 'react-icons/fa';
import AnimatedPage from '../../components/Animate/AnimatedPage';

export function Inicio() {
    return (

           <div>
                < NavBarra style={{paddingBottom:'50px'}} />
                <AnimatedPage>
                <div style={{letterSpacing: '2px', color: '#2a2a2a', display:'flex',justifyContent:'center',width:'100%',marginBottom:'0px',paddingTop:'30px'}}>
                    <div style={{width:'65%'}}>
                    <a href='./menu'>< FaArrowLeft  style={{fontSize:'20px',alignItems:'left',cursor:'url',color:'#2a2a2a'}}/></a><h1 style={{fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#2a2a2a',transition: '0.2s'}}>Solicitar serviço</h1>
                    </div>
                </div>

                <Row xs={1} md={3} className="g-5" style={{ width: '70%', margin: '0 auto',marginTop:'-30px'}}>
      {/* EMLURB - Limpeza Urbana */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>
        
          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/emlurb.png" />

            

          <Card.Body style={{ background: '#eff0f3', borderRadius: '3px' }}>
          
            <Card.Text>A EMLURB é responsável pela <span style={{ fontWeight: '700' }}>limpeza</span>, <span style={{ fontWeight: '700' }}>coleta</span> e <span style={{ fontWeight: '700' }}>destinação</span> adequada dos <span style={{ fontWeight: '700' }}>resíduos sólidos</span>.</Card.Text>
            
            <Button variant="flat" href='/emlurb' type='button' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaTrash/> Entre em contato</Button> {/* Botão verde */}
          </Card.Body>
        </Card>
      </Col>

      {/* Grande Recife - Transporte Público */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>
       
          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/grande_recife.png" />
          
          <Card.Body style={{ background: '#eff0f3', borderRadius: '3px 3px 0px 0px' }}>
            <Card.Text>O consórcio cuida da gestão do <span style={{ fontWeight: '700' }}> transporte público</span> na região metropolitana de Recife.</Card.Text>
            
            <Button variant='flat' href='/grande_recife' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaBus style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão azul */}
          </Card.Body>
        </Card>
        
      </Col>

      {/* CELPE - Energia Elétrica */}
      <Col>
        <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

          <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/celpe.png" />
          
          <Card.Body style={{ background: '#eff0f3', borderRadius: '3px' }}>
            <Card.Text>A Companhia Energética de Pernambuco é responsável pela <span style={{ fontWeight: '700' }}> distribuição de energia elétrica.</span></Card.Text>
            
            <Button href='/celpe' variant='flat' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d'}}><FaLightbulb style={{color: '#0d0d0d'}}/> Entre em contato</Button> {/* Botão amarelo */}
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </AnimatedPage>
           </div>
    )
}