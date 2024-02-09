import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem:any;
};

const CartItem = ({cartItem}:CartItemProps) => {
    const {photo,productId,name,price,quantity}=cartItem;
    // productId:"akdvndkfn",
    // photo:"https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg",
    // name:"Macbook",
    // price:3000,
    // quantity:4,
    // stock:10,
  return (
    <div className="cart-item">
        <img src={photo} alt="" />
        <article>
            <Link to={`/product/${productId}`}>{name} </Link>
            <span>₹{price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button>
            <FaTrash />
        </button>
    </div>
  )
}

export default CartItem