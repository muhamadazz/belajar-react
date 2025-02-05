import CardProduct from "../components/Fragments/CardProducts.jsx";

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
const ProductPage = ()=> {
    return(
        <div className="flex justify-center py-5">
            {products.map((product) => (
             <CardProduct>
                <CardProduct.header image= {product.image}></CardProduct.header>
                <CardProduct.body name={product.name}>{product.description}</CardProduct.body>
                <CardProduct.footer price={product.price}></CardProduct.footer>
             </CardProduct>
            ))}

        </div>
    )
}

export default ProductPage