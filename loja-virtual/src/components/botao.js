import './componentes.css';
import { useNavigate } from 'react-router-dom';



function Botao(props) {
    const navigate = useNavigate();
    return <button id="botao1" onClick={()=>{
        let login = document.querySelector("#inputLogin").value
        let password = document.querySelector("#inputPassword").value
    
        if (login == "joao" && password == "123456")
            navigate('/deucerto')
    }}>Login{props.button}</button>
}

export default Botao