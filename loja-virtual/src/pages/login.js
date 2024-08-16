

import Usuario from '../components/usarioesenha';
import Botao from '../components/botao';
import Titulo from '../components/h1';
import Input1 from '../components/inputlogin';


export default function Login() {
    return (

        <div className="conteiner">
            <div id="telaprincipal">

                <Titulo id="login" />

                <div id="tela2">
                    <Usuario name="Usuário"  />
                    <Input1 type="text" id="inputLogin" />
                    <Usuario name="Senha" />
                    <Input1 type="password" id="inputPassword" />
                </div>

                <Botao>

                </Botao>

            </div>

        </div>
    );
}