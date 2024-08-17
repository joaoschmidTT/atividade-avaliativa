import Nomedaloja from "../components/h1loja";
import Lupa from "../components/lupa";
import './loja.css';

export default function Loja() {
    return (

        <div className="containerloja">

            <div id="busca">
                <Lupa />
                <Nomedaloja />
            </div>
        </div>
    );
}