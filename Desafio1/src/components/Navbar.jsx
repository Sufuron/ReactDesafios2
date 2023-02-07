const Navbar = (props) => {
    return (
      <nav className="text-center text-white p-3 rounded-bottom animate__animated animate__fadeInLeftBig">
        {props.title}
      </nav>
    );
  };
  
  export default Navbar;
  