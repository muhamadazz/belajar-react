import Button from "../Elements/Button/button";
const CardProducts = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between">
            {children}
        </div>
    )
}

const header = (props) => {
    const {image} = props
    return(
        <a href="">
            <img 
            src={image} 
            alt="product" 
            className="p-8 rounded-t-lg"/>
        </a>
    )
}

const body = (props) => {
    const {children, name} = props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-s text-white">{children}</p>
            </a>
        </div>
    )
}

const footer = (props) => {
    const {price, addToCart, id} = props
    return(
        <div className="w-full flex items-center justify-between px-5 pb-5">
            <span className="text-lg font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
            <Button classname="bg-blue-600" onClick={() => addToCart(id)}>Add To Cart</Button>
        </div>
    )
}

CardProducts.header = header
CardProducts.body = body
CardProducts.footer = footer
export default CardProducts