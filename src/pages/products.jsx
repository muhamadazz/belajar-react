import CardProduct from "../components/Fragments/CardProducts.jsx";
const ProductPage = ()=> {
    return(
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.header image="/public/images/shoes.jpg"></CardProduct.header>
                <CardProduct.body title="Nike Air Max 90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi, mollitia perspiciatis est eum debitis quia aut. Illo dignissimos porro accusantium ab repellat nobis?</CardProduct.body>
                <CardProduct.footer price="Rp. 1.500.000"></CardProduct.footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.header image="/public/images/shoes.jpg"></CardProduct.header>
                <CardProduct.body title="Nike Air Max 90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolorum tenetur hic tempore ab excepturi, mollitia perspiciatis est eum debitis quia aut. Illo dignissimos porro accusantium ab repellat nobis?</CardProduct.body>
                <CardProduct.footer price="Rp. 1.500.000"></CardProduct.footer>
            </CardProduct>
        </div>
    )
}

export default ProductPage