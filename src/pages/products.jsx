import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProducts.jsx";
import Button from "../components/Elements/Button/button.jsx";

const products = [
    {
        id:1,
        name: "Nike Air Max 90",
        price: "Rp. 1.000.000",
        image:"/public/images/shoes.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi, mollitia perspiciatis est eum debitis quia aut. Illo dignissimos porro accusantium ab repellat nobis?"
    },
    {
        id:2,
        name: "Calvien Sports",
        price: "Rp. 1.500.000",
        image:"/public/images/shoes2.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi."
    },
    {
        id:3,
        name: "Sepatu adadong",
        price: "Rp. 2.000.000",
        image:"/public/images/shoes3.jpg",
        description:"Sepatu adadong nih boys ready kuyy dichek out."
    },
]

const email = localStorage.getItem('email')
const ProductPage = ()=> {
    const handleLogout = ()=>{
       localStorage.removeItem('email')
       localStorage.removeItem('password') 
       window.location.href = '/login'
    }

    return(
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
             {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.header image= {product.image}></CardProduct.header>
                    <CardProduct.body name={product.name}>{product.description}</CardProduct.body>
                    <CardProduct.footer price={product.price}></CardProduct.footer>
                </CardProduct>
                ))}
            </div>
        </Fragment>
    )
        
        
}

export default ProductPage