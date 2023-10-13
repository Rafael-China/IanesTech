import './App.css'
import logo from './assets/logo.gif'
import videoinicial from './assets/videoInicial/pag_inicial_video.mp4'

function App() {

  return (
    <>
      <header>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          Este site foi criado exclusivamente para fins educacionais e de aprendizado. Não oferecemos produtos ou serviços comerciais.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src={logo} className="logo" />
            <h1 className="nomedaEmpresa">Ianes Tech</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="index.html">Menu Principal</a>
                <a className="nav-link" href="pag_video.html">Aulas Gravadas</a>
                <a className="nav-link" href="pag_certificado.html">Certificado</a>
                <a className="nav-link" href="pag_ajuda.html">Ajuda</a>
                <a className="nav-link" href="pag_login.html" tabindex="-1" aria-disabled="true">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <h2 className="subTitle">Bem Vindo</h2>
          <div className="divBoasVindas">
            <video src={videoinicial} controls autoplay muted></video>
            <div className="divDescontos">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                    className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="src/assets/imgCarousel/1.png" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/imgCarousel/2.png" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/imgCarousel/3.png" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/imgCarousel/4.png" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/imgCarousel/5.png" className="d-block w-100" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="subTitle">O que veremos nesse curso</h2>
          <div className="informativo">
            <div className="textosInformativo">
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
            <div className="textosInformativo">
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
        <div className="container">
          <h2 className="subTitle">Existem versões antigas</h2>
          <div className="informativo">
            <p>
              Sim, este projeto teve como objetivo criar uma plataforma de estudos, que inclui recursos como login, senha, aulas gravadas, provas para obter certificados, seções de ajuda, entre outros. No entanto, é importante ressaltar que este projeto é fictício e foi inicialmente concebido para atender aos requisitos de um trabalho acadêmico na instituição SENAI/MG. É relevante destacar que o desenvolvimento do projeto não foi realizado exclusivamente por mim; minha equipe era composta por Aline Silmara, Clóvis Domingues, Fernanda Yasmin e Rafael Nogueira. Com meu envolvimento no projeto, busquei aprimorar meus conhecimentos e utilizei a tecnologia React.js para sua implementação, visando uma atualização e modernização do projeto.
            </p>
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
