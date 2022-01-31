import { Link } from "react-router-dom";
import { ContLink, ContLogo, Logo, NavBar } from "../styles/StyledNav";


const Navbar = () => {
  return (
  
      <NavBar>
          <ContLogo><Logo src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" alt="lgo" /></ContLogo>
          <ContLink>
          <Link className="LinkNav" to="/">Personajes</Link>
          <Link className="LinkNav" to="/buscar">Buscar</Link>
          </ContLink>
      </NavBar>
  
  );
};

export default Navbar;
