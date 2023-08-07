import { useParams } from "react-router-dom"
import "../../styles/Page.css";


function Product () {
    const {id} = useParams()
    
   // console.log(parameters);
    return (

        <>
            <Header />
                <div className="page-continer">
                <h1>Product{id}</h1>
                </div>
        </>
    )
}

export default Product