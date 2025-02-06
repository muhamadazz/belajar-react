import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProducts.jsx";
import Button from "../components/Elements/Button/button.jsx";
import { li } from "framer-motion/client";

const products = [
    {
        id:1,
        name: "Nike Air Max 90",
        price: 1000000,
        image:"/images/shoes.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi, mollitia perspiciatis est eum debitis quia aut. Illo dignissimos porro accusantium ab repellat nobis?"
    },
    {
        id:2,
        name: "Calvien Sports",
        price: 1500000,
        image:"/images/shoes2.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi."
    },
    {
        id:3,
        name: "Sepatu adadong",
        price: 2000000,
        image:"/images/shoes3.jpg",
        description:"Sepatu adadong nih boys ready kuyy dichek out."
    },
]

const email = localStorage.getItem('email')
const ProductPage = ()=> {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty:1,
        }
    ]);

    const handleLogout = ()=>{
       localStorage.removeItem('email')
       localStorage.removeItem('password') 
       window.location.href = '/login'
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }

    return(
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap mb-2">
                    {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.header image= {product.image}></CardProduct.header>
                        <CardProduct.body name={product.name}>{product.description}</CardProduct.body>
                        <CardProduct.footer 
                            price={product.price}
                            id = {product.id}
                            addToCart = {handleAddToCart}
                        ></CardProduct.footer>
                    </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
        
        
}

export default ProductPage