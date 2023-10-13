import logo from './logo.gif'

function Nav() {
    return (
        <div>
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
        </div>
    )

}
export default Nav