
import Link from "next/link"

const ProductNavbar = ()=>{
    return(
        <>
        
        <nav className="fixed w-full top-0 left-0 right-0 h-24 bg-yellow-500 border-b shadow z-50">
            <div className="container h-full grid grid-cols-2">
                <div className="flex justify-start items-center gap-x-7 text-black child-hover:text-orange-800 child-hover:transition-colors">
                    <Link href="/products">All</Link>
                    <Link href="/products/jewelery">Jewelery</Link>
                    <Link href="/products/electronics">Electronics</Link>
                    <Link href="/products/men's clothing">Men's clothing</Link>
                    <Link href="/products/women's clothing">Women's clothing</Link>
                </div>
                <div className="text-black flex justify-end items-center child-hover:text-orange-800 child-hover:transition-colors">
                    <Link className="text-xl" href="/">Home</Link>
                </div>
            </div>
        </nav>
        
        </>
    )
}


export default ProductNavbar