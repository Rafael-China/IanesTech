import './App.css'
import logo from './assets/logo.gif'
import videoinicial from './assets/videoInicial/pag_inicial_video.mp4'

function App() {

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <img src={logo} class="logo" />
            <h1 class="nomedaEmpresa">Ianes Tech</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="index.html">Menu Principal</a>
                <a class="nav-link" href="pag_video.html">Aulas Gravadas</a>
                <a class="nav-link" href="pag_certificado.html">Certificado</a>
                <a class="nav-link" href="pag_ajuda.html">Ajuda</a>
                <a class="nav-link" href="pag_login.html" tabindex="-1" aria-disabled="true">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div class="container">
          <div class="subTitle">
            <h2>Bem Vindo</h2>
          </div>
          <div class="divBoasVindas">
            <video src={videoinicial} controls autoplay muted></video>
            <div class="divDescontos">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                    class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="src/assets/imgCarousel/1.png" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/imgCarousel/2.png" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/imgCarousel/3.png" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/imgCarousel/4.png" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/imgCarousel/5.png" class="d-block w-100" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="subTitle">
            <h2>O que veremos nesse curso?</h2>
          </div>
          <div class="informativo">
            <div class="textosInformativo">
              <h4>
                O que é HTML e CSS?
              </h4>
              <p>
                HTML (HyperText Markup Language) e CSS (Cascading Style Sheets) são duas linguagens fundamentais
                para a criação de páginas da web. O HTML é usado para estruturar o conteúdo de uma página, como
                textos, imagens e links, enquanto o CSS é utilizado para estilizar e controlar a apresentação
                visual desses elementos, incluindo cores, fontes e tamanhos. Em resumo, o HTML cria a estrutura,
                e o CSS define a aparência. Juntos, eles formam a base da construção de páginas web atraentes e
                funcionais.
              </p>
            </div>
            <div class="textosInformativo">
              <h4>
                Qual Ferramenta utilizaremos?
              </h4>
              <p>
                Para nossa didática, faremos uso do Visual Studio Code. Portanto, pedimos que você o tenha
                instalado para que possamos dar continuidade.
                Nosso primeiro passo será criar um arquivo. Para isso, crie uma pasta na qual você irá armazenar
                seus arquivos. No Visual Studio Code, no canto superior esquerdo, selecione essa pasta. Dentro
                dela, crie um arquivo chamado "index.html," que será nosso arquivo principal.
                Com o uso da tecla F5, poderemos executar esse arquivo a qualquer momento para visualizar seu
                conteúdo. No entanto, neste momento, não veremos nada, pois ainda não há conteúdo no arquivo.

              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div id="copy-area">
              <p> &copy; Todos direitos resevados <a href="https://portifolio-rafael.netlify.app" target="_blank">
                Rafael
                Nogueira</a> 2023</p>
        </div>
      </footer>
    </>
  )
}

export default App
