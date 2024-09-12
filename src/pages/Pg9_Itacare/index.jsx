import { Container } from "./styles.js"

import itacare from "../../assets/itacare_01.png";

import { Card } from "../../components/Card/index.jsx";
import { SocialLinks } from "../../components/SocialLinks/index.jsx";

export function Pg9_Itacare() {
  return (

    <Container>
        <Card          
            img={itacare}
            alt="foto da praia de Itacarezinho e coqueiros vistos de um mirante"
        />

        <h3>
            Itacaré, BA | 2014
        </h3>

        <p>
        [ em construção ]       
        </p>
        <p>
        Uma breve introdução pq não quero tirar a fotinho do site! hehe
        </p>
        <p>
        Minha primeira viagem sozinha foi um pouco fora do comum. Eu estava desempregada há poucos meses, e foi depois de ter feito uma entrevista que tive a ideia de viajar sozinha. Mas, tinha que ser já, pq se me chamassem pra trabalhar eu teria que esperar um ano para conseguir tirar férias. Então basicamente eu tive a primeira ideia em uma quarta e no sábado estava embarcando pra uma cidade que até então nunca tinha ouvido falar, na Bahia.
        E foi pesquisando sobre lugares pra viajar sozinha que eu conheci Itacaré.       
        </p>
        <p>
        Foi uma doideira, eu não tinha cartão de crédito, não consegui pagar pela Caixa, tive que ligar na cia aérea pra ver como poderia reservar e pagar, sei lá como isso deu certo, kkkk. Já tinha viajado de avião apenas uma vez com minha mãe, aos sete anos, não lembrava de absolutamente nada.
        </p>
        <p>
        Eu tinha 23 anos, morava com minha mãe, era uma garota absurdamente tímida, em casa e na vida eu era dependente de mainha. Acho que eu só fui pq nem tive tempo de pensar direito, heheh. Eu não tinha ninguém como referência, conhecido ou blogueira, ninguém!
        </p>
        <p>
        Me informei por sites e blogs, não lembro se tinham vídeos sobre viagens no youtube nessa época, só sei que todas as informações que obtive vieram de textos, como esse. Na primeira vez que li “hostel”, achei que estivesse escrito errado, kkkk. Depois de ler em três lugares diferentes fui pesquisar o que era esse tal de hostel. Descobri, e decidi me hospedar em um.
        </p>
        <p>
        E a menina tímida fez “os corre” sozinha no aeroporto, quase perdeu o ônibus pq não estava escrito Itacaré, fez amizade no hostel, nos passeios, conseguiu cia de locais pra fazer trilha. Foi lindo, a melhor escolha da minha vida!!! Isso mudou a minha vida. 
        </p>
        <p>
        Costumo dizer que, geralmente, a primeira viagem sozinha é por falta de opção. Ninguém pode ir, não tem dinheiro, não quer ir pro mesmo lugar. Ou por imprevistos, aquela amiga em cima da hora desiste, o namoro, noivado, casamento acaba. E a opção que resta é ir sozinha ou desistir tbm. Mas, mana, depois da primeira viagem sozinha, você ganha o mundo, literalmente! E ainda que vc tenha pessoas em sua vida que possam ir junto com você, a viagem solo ainda vai ser um desejo, pois é algo muito grandioso, especialmente na vida de uma mulher. É você por você, é você aberta ao novo, é você no controle.  
        </p>
        
        <footer>
            <SocialLinks />
        </footer>
    </Container>
  )
}
