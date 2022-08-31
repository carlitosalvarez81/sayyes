import CartIcon from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <ul>
            <li><a href="#!">HOME</a></li>
            <li><a href="#!">NOSOTRAS</a></li>
            <li><a href="#!">VESTIDOS</a></li>
            <li><a href="#!">CONDICIONES</a></li>
            <li><a href="#!">CONTACTO</a></li>
        </ul>
        <CartIcon count={8}/>
      </header>
    </div>
  );
}

export default NavBar;
