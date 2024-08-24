import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
import estrela_cheia from './assets/estrela_cheia.png'
import estrela_vazada from './assets/estrela_vazada.png'
import frame28 from './assets/Frame 28.png'
import frame29 from './assets/Frame 29.png'
import Like_icon from './assets/like_icon.png'
import Deslike_icon from './assets/deslike_icon.png'
import Tres_pontos from './assets/tres_pontos_verticais.png'
import Seta from './assets/seta_icon.png'
import seta_vertical from './assets/fi-br-angle-small-right.png'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <div className='background_img'>
      <div className="game-highlight">
        <h1 className="god-of-war">God of War: Ragnarök</h1>
        <div className="user-rating">
          <div className="rating-title">
            <div className="rating-label">
              <div className="avaliao-da-ratings">Avaliação da ratings</div>
            </div>
            <div className="stars">
              <img className="estrela-1-icon" loading="lazy" alt="" src={estrela_cheia} />
              <div className="rate-button">
                <span>9,6</span>
                <span className="span">/10</span>
              </div>
            </div>
          </div>
          <div className="rating-title1">
            <div className="sua-avaliao-wrapper">
              <a className="sua-avaliao">sua avaliação</a>
            </div>
            <div className="estrela-1-1-parent">
              <img className="estrela-1-1" loading="lazy" alt="" src={estrela_vazada} />
              <div className="avaliar1">Avaliar</div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img className="game-image-icon" loading="lazy" alt="" src={frame28} />
        <img className="game-image-icon1" loading="lazy" alt="" src={frame29} />
      </div>
    </div>

    <div className='enredo_div'>
      <img src={seta_vertical} alt="" />
      <h2 className='enredo'>ENREDO</h2>
    </div>
    <p className='enredo_text'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>

    <div className='avaliações_usuários'>
      <img src={seta_vertical} alt="" />
      <h2 className='enredo'>avaliações de usuários</h2>
    </div>

    <div className="frame-group">
      <div className="frame-container">
        <div className="avaliao-em-destaque-wrapper">
          <div className="avaliao-em-destaque">avaliação em destaque</div>
        </div>
        <div className="estrela-1-parent">
          <img className="estrela-1-icon1" alt="" src={estrela_cheia} />
          <div className="div">
            <span>10</span>
            <span className="span1">/10</span>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="caiohalbert-wrapper">
          <div className="caiohalbert">CaioHalbert</div>
        </div>
        <div className="de-novembro-de-2022-wrapper">
          <div className="de-novembro-de">9 de novembro de 2022</div>
        </div>
      </div>
      <div className="what-an-incredible">What an incredible sequel!</div>
      <div className="a-fantastic-and-container">
        <p className="a-fantastic-and">
          A fantastic and strong continuation of its predecessor, God of War
          Ragnarök is not afraid to take unexpected turns, or slow its pace
          for you to fully explore an environment. It has the same upgrading
          system as before, but with better armor, in my opinion. Atreus is a
          little bit older now and it's so great to see everybody reprise
          their magnificent roles.
        </p>
        <br></br>
        <p className="i-dont-want">
          I don't want to give away too much in this review, but it's
          definitely worth buying. One of the best looking games on PS5. It'll
          definitely be a game of the year contender with Elden Ring. If
          you're new to the series, I recommend you start with God of War
          (2018) If you have the dedication, you could always start from the
          very first one. They're all on the PS+ collection. I still have yet
          to beat this newest entry, but I wanted to spread the good word as
          soon as possible: Ragnarök is here and it is beautiful.
        </p>
      </div>
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="social-network-1-parent">
            <img className="Like" loading="lazy" alt="" src={Like_icon} />
            <div className="div1">33</div>
          </div>
          <div className="hand-1-parent">
            <img className="Deslike" loading="lazy" alt="" src={Deslike_icon}/>
            <div className="div2">11</div>
          </div>
        </div>
        <img className="fi-br-menu-dots-vertical-icon" loading="lazy" alt="" src={Tres_pontos}/>
      </div>
    </div>

    <div className="frame-parent3">
      <div className="frame-parent4">
        <div className="avaliao-em-destaque-container">
          <div className="avaliao-em-destaque1">avaliação em destaque</div>
        </div>
        <div className="estrela-1-group">
          <img className="estrela-1-icon2" alt="" src={estrela_cheia}/>
          <div className="div3">
            <span>10</span>
            <span className="span2">/10</span>
          </div>
        </div>
      </div>
      <div className="frame-parent5">
        <div className="claudiarayara-wrapper">
          <div className="claudiarayara">ClaudiaRayara</div>
        </div>
        <div className="de-novembro-de-2022-container">
          <div className="de-novembro-de1">14 de novembro de 2022</div>
        </div>
      </div>
      <div className="this-game-took">This game took part of my soul...</div>
      <div className="spoiler-alert">
        <b className="warning-spoilers">Warning: Spoilers!</b>
        <img className="fi-br-angle-small-down-icon" loading="lazy" alt="" src={Seta}/>
      </div>
      <footer className="frame-footer">
        <div className="frame-parent6">
          <div className="social-network-1-group">
            <img className="Like" alt="" src={Like_icon}/>
            <div className="div4">24</div>
          </div>
          <div className="hand-1-group">
            <img className="Deslike" alt="" src={Deslike_icon} />
            <div className="div5">6</div>
          </div>
        </div>
        <img className="fi-br-menu-dots-vertical-icon1" alt="" src={Tres_pontos}/>
      </footer>
    </div>
    <Footer />
  </StrictMode >,
)
