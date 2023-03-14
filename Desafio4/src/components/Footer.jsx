const Footer = (props) => {
    return (
      <>
        <footer className="text-white p-1 text-center rounded-top mt-1">
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
  