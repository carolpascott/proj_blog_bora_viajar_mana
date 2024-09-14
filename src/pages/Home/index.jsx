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
              <p>
              Olá, pra quem não me conhece sou a <span >Carol Pascott</span>!!!
              </p>
              <p>
              Neste ano de 2024, eu completei dez anos da minha primeira viagem sozinha e tive o prazer de participar do <span>Pirilampo Cast</span> e contar um pouquinho de algumas histórias vividas durante algumas delas.   
              </p>
              <p>
              Aproveitei a oportunidade e estou deixando público esse mini blog que comecei a fazer há alguns meses. A idealização desta página começou com uma tarefa, que deveria ser simples, de um curso de desenvolvimento web que eu estava fazendo mas, eu me empolguei! Hahah    
              </p>
              <p>
              Em suma, todo esse site foi desenvolvido por mim, não só os textos e fotos como também cada linha de código responsável pela estrutura, aparência e funcionalidade deste. Para os devs e/ou curiosos, o link do projeto no meu github está <a href="https://github.com/carolpascott/proj_blog_bora_viajar_mana" target="_blank">aqui.</a>   
              </p>
              <p>
              Contudo, eu não tive tempo e nem terei para finalizar o site como eu gostaria. Então me perdoem mas vai assim mesmo, heheh. O público da <a href="https://www.instagram.com/vagalumetrip" target="_blank">@vagalumetrip</a>, e consequentemente do Pirilampos Cast, é formado em sua maioria por mulheres que viajam sozinhas então decidi compartilhar esses textões e dicas que já estavam escritos e guardados. <span>Espero que sirva de inspiração pra alguém que está com vontade de viajar e não sabe pra onde nem com quem ir.</span>    
              </p>
              <p>
              Bora viajar, mana? Aqui você vai encontrar alguns relatos e dicas de viagens que eu fiz sozinha. Escolhi as mais diversas e nem todas as dicas padrão que se encontram em todo canto eu inclui, porque já estão em todo canto, né! Clique nas fotos, e bora ler! Ah, aqui a prioridade não é foto, mas para as viagens que fiz a partir de 2022 há fotos no feed e nos destaques do meu insta <a href="https://www.instagram.com/carol_pascott" target="_blank">@carol_pascott</a>. O restante está no face, sou 30+.    
              </p>
              <p>
              Sei que a maioria não vai ter coragem de ler esse monte de texto mas pra você, que leu pelo menos um textão, me chame na DM do insta se achar que ficaria bacana uma versão em podcast. Mas já adianto que provavelmente terá uma versão só de perrengues no Pirilampo Cast com a minha participação tbm!!!    
              </p>
              <p>
              Ah, esse é um site responsivo, então a aparência dele muda dependendo se for aberto no celular ou no computador. Se estiver muito bugado no celular me avisem, ok? É isso, manas, e pra quem tiver coragem e disposição, boa leitura.    
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
