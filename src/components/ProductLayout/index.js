import Navbar from "../Navbar"
import Footer from "../Footer"
import ProductNavbar from "../ProductNavbar"

const ProductLayout = ({children})=>{

    return(
        <>
        <ProductNavbar />
        {children}
        <Footer />
        </>
    )
}

export default ProductLayout