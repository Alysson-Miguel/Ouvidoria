import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Element } from 'react-scroll';
import Button from 'react-bootstrap/Button';


export function NavBarra() {

  const token = localStorage.getItem('token');

  let decodedToken = null;

  if (token) {
  
    decodedToken = JSON.parse(atob(token.split('.')[1]));
  }


  const nome = decodedToken?.nome;
  function Logout(){
    localStorage.removeItem('token');
  }

  

    return (
        <Navbar bg="dark" data-bs-theme="dark"style={{height: '60px'}}>
        <Container> 
          <Image src='./img/hub_logo.png' style={{width: '50px'}}/>
          <Navbar.Brand  style={{color: '#FF8E3C', fontSize:'25px', fontFamily:'Inter',fontWeight:'600', letterSpacing:'5px'}}>.HUB</Navbar.Brand>
          <Nav className="me-auto">
            
           {token ? (
             <Nav.Link href="/menu" >Inicio</Nav.Link>
           )  :(
            <Nav.Link href="/" >Inicio</Nav.Link>
           )}
            
            <Nav.Link href="/contato">Contato</Nav.Link>
           
        
          </Nav>
          <Nav>
            
            {token ? (
              <Nav>
                <Navbar.Text >
              Logado como: {nome}
           </Navbar.Text>
           <Navbar.Text style={{paddingLeft:'5px'}} >
            |
           </Navbar.Text>
           
           <Nav.Link  href="/" onClick={() =>Logout()}> <a>Logout</a> </Nav.Link> 
              </Nav>
            ) : (
              <Navbar.Text >
           
          </Navbar.Text>
          
            ) }
          
            
          </Nav>
         
        </Container>
      </Navbar>
    )
}