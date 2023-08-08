import { createBrowserRouter } from "react-router-dom";
import { Login} from "../src/pages/login"
import { Cadastro } from "./pages/cadastro/cadastro";
import { Inicio } from "./pages/inicio/inicio";
import {Denuncia} from "./pages/celpe/Celpe"
import {Sobre} from "./pages/sobre/Sobre"
import {Conteudo} from "./pages/landing/Landing"
import {Emlurb} from "./pages/emlurb/emlurb"
import {Grande_Recife} from "./pages/grande_recife/grande_recife"
import { History } from "./pages/history/history";
import { Contato } from "./pages/contato/contato";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Conteudo/>
    },
    
    {
        path: '/register',
        element:<Cadastro/>
    },
    {
        path: '/inicio',
        element:<Inicio/>
    },
    {
        path: '/celpe',
        element: <Denuncia/>
    },
    {
        path: '/menu',
        element: <Sobre/>
    },
    {
        path: '/landing',
        element: <Login/>
    }
    ,
    {
        path: '/emlurb',
        element: <Emlurb/>
    }
    ,
    {
        path: '/grande_recife',
        element: <Grande_Recife/>
    },
    {
        path: '/history',
        element: <History/>
    },
    {
        path: '/contato',
        element: <Contato/>
    }


])