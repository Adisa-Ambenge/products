import React,{useState,useEffect} from "react";
import "./style.css";
import{ Link,} from "react-router-dom";



const Home = () =>{
    const [Home,setHome] = useState([]);
   
    useEffect(()=>{
        (async ()=>{
            await getHome();
        })();

    },[]);
    const getHome = async()=>{
        try{
          
            const response = await fetch ('https://dummyjson.com/products');
            const result = await response.json();
            setHome(result.products);
           

        } catch(error){
            console.log(error.message);
        }

    };
    console.log({Home});
    
   return( 
    <div className="container">
    {Home.map(product=>(
        <div className="">
            <img alt="image" src = {product.images[0]} className="image"/>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <Link to={`/ProductDetails/${product.id}`} className="button">
          <button type="submit" className="viewMore">View More</button>
          
        </Link>
            </div>
        
    ) )}
   </div>);
};

export default Home;