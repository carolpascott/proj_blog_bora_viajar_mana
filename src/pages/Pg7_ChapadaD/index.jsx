import { Container } from "./styles.js"

import chapada from "../../assets/chapadadiamantina_01.png";

import { Card } from "../../components/Card/index.jsx";
import { SocialLinks } from "../../components/SocialLinks/index.jsx";

export function Pg7_ChapadaD() {
  return (

    <Container>
        <Card          
            img={chapada}
            alt="foto da Carol Pascott de roupa preta e de boné deitada numa rocha próxima à um abismo,
            ao fundo há uma área com floresta extensa"
        />

        <h3>
            Chapada Diamantina, BA | 2016
        </h3>

        <p>
        [ em construção ]       
        </p>
        <p>
        Uma breve introdução pq não quero tirar a fotinho do site! hehe
        </p>
        <p>
        Fui “sozinha” mas com uma galerinha que conheci no site Mochileiros.com. Quando comecei a viajar eu usava muito esse site, lá ainda tem muitos relatos bacanas. Não sei como está atualmente mas antes era fácil encontrar outras pessoas pra viajar junto. 
        </p>
        <p>
        Ir pra chapada acompanhada foi ótimo pq trilhas eu não faço sozinha e na época não tinha grana pra ficar contratando guia pra todos os passeios.
        </p>
        <p>
        Essa viagem saiu muito barata, tive o privilégio de conhecer um cara que conhecia um pouco de lá e era super organizado com viagens do tipo. O restante da galera era muito gente boa!
        Fizemos o trekking do Vale do Pati sem guia na ida, na volta conseguimos um com um preço bem acessível. Nossa, lá anda bastante, viu! Mas é incrível demais!!! Um dos mais lindos do Brasil. 
        </p>
        <p>
        Essa viagem teve hostel, barraca, várias cidades, comida feita por nós em fogão, fogareiro, trilha por conta, trilha com guia… Foram 20 dias incríveis. 
        </p>
        
        <footer>
            <SocialLinks />
        </footer>
    </Container>
  )
}
