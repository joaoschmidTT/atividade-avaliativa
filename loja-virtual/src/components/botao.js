import './componentes.css';
import { useNavigate } from 'react-router-dom'; //usando o navigate ao inves de um link


 
export default function Botao(props) {     
    const navigate = useNavigate();                                 //passando o navigate
    return <button id="botao1" onClick={()=>{                       //criando um botao 
        let login = document.querySelector("#inputLogin").value           //criando duas variaves,pegando os ids do login com query.selector e usando o .value para pegar a digitaçao
        let password = document.querySelector("#inputPassword").value
    
        if (login == "joao" && password == "123456")  // se om login der certo so vai funcionaer com joao e 123456
            navigate('/deucerto')    
    }}>Login{props.button}</button>
}



