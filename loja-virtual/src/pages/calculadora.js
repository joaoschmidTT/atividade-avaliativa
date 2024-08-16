import { useState , } from "react";


function Contador2(){
    const [contador2  , setContador] = useState(17)
   
    
    

    
    

    function adicionarCont1(){
        setContador(contador2 + 1)
    }
    function adicionarCont2(){
        setContador(contador2 - 1)
    }


return(
    
    <div>
        <div>{contador2}</div>
        <span id="span1"><button id="aumentar" onClick={adicionarCont1}>aumentar</button></span>
        <span id="span2"><button id="diminuir" onClick={adicionarCont2}>diminuir</button></span>
    </div>
    
)

}
export default Contador2