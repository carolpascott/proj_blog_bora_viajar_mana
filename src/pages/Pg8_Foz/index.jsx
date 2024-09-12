import { Container } from "./styles.js"

import foz from "../../assets/foz_02.png";

import { Card } from "../../components/Card/index.jsx";
import { SocialLinks } from "../../components/SocialLinks/index.jsx";

export function Pg8_Foz() {
  return (

    <Container>
        <Card          
            img={foz}
            alt="foto de uma grande queda d'água em Foz do Iguaçu"
        />

        <h3>
            Foz do Iguaçu, PR | 2015
        </h3>

        <p>
        [ em construção ]       
        </p>
        <p>
        Uma breve introdução pq não quero tirar a fotinho do site! hehe
        </p>
        <p>
        Foz foi minha segunda viagem sozinha, em um feriado de carnaval. Sonhava em conhecer lá desde que iniciei minha graduação. Minha faculdade sempre organizava viagem pra lá, principalmente por causa da Usina de Itaipu, mas, nós da turma de tecnólogos nunca conseguíamos ir, pq a grande maioria trabalhava. Todo ano uma galerinha da engenharia ia e eu só na vontade… 
        Mas, depois da primeira viagem solo, ninguém nos segura.
        </p>
        <p>
        Pra variar, decidi em cima da hora, então os voos estavam caros. Fui de ônibus mesmo. Longinho, viu, mas dá pra ir. Eu fui por conta, mas hj tem muitas agências que fazem esse destino saindo de SP. Queria um carnaval tranquilo, foi o destino perfeito.
        </p>
        <p>
        A potência das Cataratas do Iguaçu é algo surreal. E, a dica que sempre dou, vá para  o lado do Brasil e da Argentina tbm, são muito diferentes e vale demais a visita em ambos os lugares.  
        </p>
        <p>
        No hostel fiz amizade com duas pessoas que estavam sozinhas tbm, boa parte dos passeios fiz com eles. Lembro que a primeira vez que tomei cervejinha artesanal foi com eles tbm, rs. 
        </p>
        <p>
        Dica pra quem é da tecnologia ou apenas curiosa: em Itaipu tem uma visita especial, mais técnica. Mas fui reservar com um dia de antecedência e não tinha mais vaga… Não vacilem como eu. Porém, a visita tradicional é bem bacana tbm. 
        </p>
        <p>
        Um perrengue: na volta pra SP desci do ônibus em uma parada e quando retornei cadê??? Sorte que a mina que conheci no hostel estava em um ônibus com horário parecido com o meu e nos encontramos na parada, ela viu que o motorista saiu com o ônibus vazio mas ia retornar, uffa. Dica!!! Guardem ou tirem foto do número do ônibus. 
        Nesse mesmo dia meu ônibus foi revistado duas vezes no meio da estrada por policiais. Claro que me pediram o número da mala e foram revistar. Sozinha, deve ter moamba ou drogas do Paraguai… Mas deu tudo certo, não tinha nada de errado, heheh.
        </p>
       
        <footer>
            <SocialLinks />
        </footer>
    </Container>
  )
}
