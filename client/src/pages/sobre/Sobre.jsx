import React from 'react';
import { NavBarra } from '../../components/NavBarra/NavBarra';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaBus, FaLightbulb, FaPlusCircle, FaHistory } from 'react-icons/fa';
import AnimatedPage from '../../components/Animate/AnimatedPage';


export const Sobre = () => {

  const token = localStorage.getItem('token');

  let decodedToken = null;

  if (token) {

    decodedToken = JSON.parse(atob(token.split('.')[1]));
  }


  const nome = decodedToken?.nome;


  return (
    <div>
      < NavBarra style={{ paddingBottom: '50px' }} />
      <AnimatedPage>
        <div style={{ letterSpacing: '2px', color: '#2a2a2a', display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '0px', paddingTop: '30px' }}>
          <div style={{ width: '65%' }}>
            <h1 style={{ fontFamily: 'Inter', fontSize: '42px', fontWeight: '700', letterSpacing: '-1px', color: '#2a2a2a', transition: '0.2s' }}>Olá, <span style={{ color: '#ff8e3c' }}>{nome}</span>, por favor escolha uma opção.</h1>
          </div>
        </div>

        <Row xs={1} md={2} className="g-5" style={{ width: '70%', margin: '0 auto', marginTop: '-30px' }}>
          {/* EMLURB - Limpeza Urbana */}
          <Col>
            <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

              <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/novo_post.svg" />



              <Card.Body style={{ background: '#eff0f3', borderRadius: '3px' }}>

                <Card.Text>Crie uma nova solicitação para pedir um serviço ou enviar feedback ao orgão responsável.</Card.Text>

                <Button variant="flat" type='button' href='./inicio' style={{ cursor: 'pointer', fontWeight: '600', color: '#0d0d0d' }}><FaPlusCircle /> Criar solicitação</Button> {/* Botão verde */}
              </Card.Body>
            </Card>
          </Col>

          {/* Grande Recife - Transporte Público */}
          <Col>
            <Card border="white" style={{ borderRadius: '3px', outline: '0px', fontFamily: 'Inter' }}>

              <Card.Img style={{ borderRadius: '3px' }} variant="top" src="./img/ver_posts.svg" />

              <Card.Body style={{ background: '#eff0f3', borderRadius: '3px 3px 0px 0px' }}>
                <Card.Text>Veja e acompanhe o andamento das suas solicitações.</Card.Text>

                <Button variant='flat' href='/history' style={{ cursor: 'pointer', fontWeight: '600', color: '#0d0d0d' }}><FaHistory style={{ color: '#0d0d0d' }} /> Minhas solicitações</Button> {/* Botão azul */}
              </Card.Body>
            </Card>

          </Col>



        </Row>
      </AnimatedPage>
    </div>);
}

