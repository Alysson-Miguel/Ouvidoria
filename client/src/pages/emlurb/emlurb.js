import React from "react";
import './emlurb.css'
import { NavBarra } from '../../components/NavBarra/NavBarra';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import { useState } from "react";
import { api } from '../../service/Api'
import Modal from 'react-bootstrap/Modal';
import AnimatedPage from "../../components/Animate/AnimatedPage";


export function Emlurb () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [local,setLocal] = useState('')
    const [rua,setRua] = useState('')
    const [campo,setCampo] = useState('')
    const tagEmlurb = 'Emlurb'

    const token = localStorage.getItem("token")
   async function handleSubmit() {

    if (!local || !rua || !campo) {
        handleClose();
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
    

    try {
        const response = await api.post('/denuncia', {
            "endereco": local + ' ' + rua,
            "empresa": tagEmlurb,
            "texto": campo
        }, {
            headers: {
                Authorization: `${token}`
            }
        });
    
        // Processar a resposta bem-sucedida aqui
    } catch (error) {
        console.error("Erro:", error.response);
        // Lida com o erro aqui, pode conter detalhes úteis no error.response
    }
         
        

    }

    return ( 
            
            <Form  style={{display:'block'}}>
                <NavBarra/>
                <AnimatedPage>
             
                
                <div style={{letterSpacing: '2px', color: '#2a2a2a', display:'flex',justifyContent:'center',width:'100%',marginBottom:'30px',marginTop:'30px'}}>
                    
                    <div style={{width:'55%'}}>
                        
                    <h1 style={{fontFamily:'Inter', fontSize:'54px',fontWeight:'700',letterSpacing:'-1px',color:'#2a2a2a',transition: '0.2s'}}>Envie sua mensagem</h1>
                    
                    </div>
                </div>
                <Row style={{margin:'auto',maxWidth:'50%'}}> 
                
                <h4 style={{paddingLeft:'0px'}}>Endereço</h4>
                    <Col style={{padding:'0'}}>        
                        <Form.Select 
                            onChange={(e) => setLocal(e.target.value)}
                            value={local}
                            style={{maxWidth:'90%', marginRight:'10px',backgroundColor:'#eff0f3'}} 
                        >
                            <option>Selecione Av, Rua, ou Travessa</option>
                            <option value="Avenida" >Avenida</option>
                            <option value="Rua"  >Rua</option>
                            <option value="Travessa" >Travessa</option>
                        </Form.Select>
                    </Col> 
                    
                    <Col> 
                        
                        <input type="text" name="endereco" onChange={(e) => setRua(e.target.value)}  placeholder="  (Nome da rua apenas)" style={{borderRadius:'3px',height:'38px',Bottom:'30px',width:'100%',borderColor:'#cfd0d1',borderStyle:'solid',borderWidth:'1px',backgroundColor:'#eff0f3',marginLeft:'10px'}}/>
                    </Col> 
                    <h4 style={{marginTop:'30px',paddingLeft:'0px'}}>Relate o ocorrido</h4>
                        <textarea onChange={(e) => setCampo(e.target.value)} style={{display:'flex',borderRadius:'3px',marginTop:'0px',marginBottom:'30px',backgroundColor:'#eff0f3',borderColor:'#cfd0d1'}} name="denuncia" placeholder="Digite o problema, forneça o número ou ponto de referência." cols={30} rows={9}/>
                        <Button className="Voltar" href="/inicio" variant="flat" type='button' style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d',width:'45%',marginRight:'10%',}}><FaArrowLeft/> Voltar</Button>
                        <Button variant="flat" onClick={() => {
    handleShow(); // Chama a nova função que você deseja executar
    handleSubmit(); // Chama a função handleSubmit
  }} style={{ cursor: 'pointer',fontWeight:'600',color: '#0d0d0d',width:'45%'}}><FaPaperPlane/> Enviar</Button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensagem enviada com sucesso!</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          
          <Button variant="flat" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

                </Row> 

                </AnimatedPage>
            </Form>
            );
}

           