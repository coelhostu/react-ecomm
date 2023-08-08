import { Header, ProductsList } from "../../components";
import "../../styles/Page.css";
import { useEffect, useState } from "react";

function Home() {
	const [products, setProducts] = useState([]);

	const getProduct = async () => {
		const response  = await fetch('https://dummyjson.com/products')
		const data = await response.json();
		const {products} = data;
		console.log(products);
		setProducts(products);
	};

	useEffect(() => {
		getProduct();
	}, []);

    return (
        <>
            <Header />
            <div className="page-continer">
				<ProductsList products={products} />
            </div>
        </>
    )
}

export default Home;
