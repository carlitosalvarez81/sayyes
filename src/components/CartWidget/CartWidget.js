import carrito from "../../assets/carrito.jpg";
export default function CartIcon ({count}){
    return (
        <div>
            <img width="50" src={carrito} alt="Carrito"/>
            {count}
        </div>
    )
}