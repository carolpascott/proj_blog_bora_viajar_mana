import { Container } from "./styles.js"

import pouso from "../../assets/pouso_03.png";
import guna from "../../assets/guna_01.png";
import paracas from "../../assets/paracas_01.png";
import lencois from "../../assets/lencois_02.png";
import morrosp from "../../assets/morrosp_02.png";
import jalapao from "../../assets/jalapao_02.png";
import chapada from "../../assets/chapadadiamantina_01.png";
import foz from "../../assets/foz_02.png";
import itacare from "../../assets/itacare_01.png";


import { Card } from "../../components/Card";
import { TitleCard } from "../../components/TitleCard";
import { SocialLinks } from "../../components/SocialLinks";

export function Home() {
  return (

    <Container>

      <header>
          <h1>Bora viajar, mana?</h1>
          <div class="htext">
              <h2>
                  Querendo viajar e não sabe pra onde nem com quem ir?                     
              </h2>
              <p>
                  Vem comigo que vou te dar dicas baseadas em algumas viagens que fiz.
                  Todas essas viagens eu fiz sozinha e recomendo fortemente que vocês façam o mesmo.
              </p>
                              
          </div>
      </header>

      <main>
        <div className="card">
          <TitleCard
            url={"/pouso"}
            title={"Pouso da Cajaíba"}
            phrase={"meu cantinho favorito no Brasil"} 
          />
          
          <Card
            url={"/pouso"}
            img={pouso}
            alt="foto da praia de Pouso da Cajaíba, tirada do alto mostrando folhas de um coqueiro, 
              areia e o mar com alguns barcos"
          />
          
        </div>

        <div className="card">
          <TitleCard
            url={"/guna"}
            title={"Guna Yala"}
            phrase={"experiência única numa comunidade indígina no Panamá"} 
          />

          <Card
            url={"/guna"}
            img={guna}
            alt="foto que mostra a Carol Pascott sorridente, 
            com biquíni preto, dentro do mar calmo, com água transparente. Ao fundo um pedaço de uma ilha em Guna Yala"
          />          
        </div>

        <div className="card">
          <TitleCard
            url={"/paracas"}
            title={"Paracas"}
            phrase={"Peru além de Machu Picchu"} 
          />

          <Card
            url={"/paracas"}
            img={paracas}
            alt="foto de um leão marinho em cima de rochas de coloração amarronzada, em Paracas"
          />
        </div>

        <div className="card">
          <TitleCard
            url={"/rota-emocoes"}
            title={"Rota das Emoções"}
            phrase={"o nome já diz tudo"} 
          />

          <Card
            url={"/rota-emocoes"}
            img={lencois}
            alt="foto dos Lençóis Maranhences"
          />
        </div>
        
        <div className="card">
          <TitleCard
            url={"/morro-sp"}
            title={"Morro de São Paulo"}
            phrase={"tranquilidade e/ou agitação"} 
          />

          <Card
            url={"/morro-sp"}
            img={morrosp}
            alt="foto do pôr do sol em Morro de São Paulo mostrando também o mar com alguns barcos"
          />
        </div>

        <div className="card">
          <TitleCard
            url={"/jalapao"}
            title={"Jalapão"}
            phrase={"não deixe ninguém podar seus sonhos"} 
          />

          <Card
            url={"/jalapao"}
            img={jalapao}
            alt="foto da Carol Pascott dentro de um fervedouro de água transparente e rodeado de vegetação no Jalapão"
          />
        </div>

        <div className="card">
          <TitleCard
            url={"/chapada-d"}
            title={"Chapada Diamantina"}
            phrase={"20 dias e foi pouco"} 
          />

          <Card
            url={"/chapada-d"}
            img={chapada}
            alt="foto da Carol Pascott de roupa preta e de boné deitada numa rocha próxima à um abismo,
            ao fundo há uma área com floresta extensa"
          />
        </div>

        <div className="card">
          <TitleCard
            url={"/foz"}
            title={"Foz do Iguaçu"}
            phrase={"um carnaval diferente"} 
          />

          <Card
            url={"/foz"}
            img={foz}
            alt="foto de uma grande queda d'água em Foz do Iguaçu"
          />
        </div>

        <div className="card">
          <TitleCard
            url={"/itacare"}
            title={"Itacaré"}
            phrase={"onde tudo começou"} 
          />

          <Card
            url={"/itacare"}                    
            img={itacare}
            alt="foto da praia de Itacarezinho e coqueiros vistos de um mirante"
          />
        </div>
       
      </main>
      <footer>
            <SocialLinks />
        </footer>
    </Container>
  )
}
