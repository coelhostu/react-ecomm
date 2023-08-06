import { useParams } from "react-router-dom"

function Product () {
    const {id} = useParams()
    
   // console.log(parameters);
    return (
        <div>
            <h1>Product{id}</h1>
        </div>
    )
}

export default Product