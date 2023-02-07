const Footer = (props) => {
    return (
      <>
        <footer className="text-white p-3 text-center rounded-top mt-2 animate__animated animate__fadeInRightBig">
          {props.footertitle}
          <div className="text-center">
            <button className="btn btn-outline-secondary m-2 text-decoration-none text-white">
              <a
                className="text-decoration-none text-white"
                href="https://github.com/Sufuron/ReactDesafios2"
                target="_blank"
              >
                Repositorio Github
              </a>
            </button>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  