import './componentes.css';
import './img/lupa.png'


function Lupa(props) {
    return (
        <div id="divlupa">
            <form id="form1" action="http://www.goagle.com.br/search">
                <input type="search" name="q" id="inputLupa" />
            </form>
        </div>
    )
}


export default Lupa