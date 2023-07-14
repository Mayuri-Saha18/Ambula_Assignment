import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import styles from './Bag.module.css';

const Bag = () => {


    
    const [products, setProducts]=useState([]);

        useEffect(()=>{

            const fetchProducts=async ()=>{

            const response=await axios.get(`https://dummyjson.com/products/category/smartphones`);

            setProducts(response.data.products);

            console.log(response.data)
            console.log(response.data.products)

            };


            fetchProducts();

        },[]);



  const handleWishlist=(product)=>{

    const wishlist=JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.some((item)=>item.id===product.id)){

      wishlist.push(product);

      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      alert("Item added to cart")

    }
    
    else{

      alert("Item already added to cart")
    }
    
  };


  return (
    <div>

            

                {products.length?(

                    <div className={styles.container}>


                            {products.map((product)=>(

                                <div key={product.id}>

                                <div className={styles.card}>

                                    <img src={product.thumbnail} className={styles.imgcard} alt={product.title} />
                                    <div className={styles.cardbody}>

                                            <h1>Name: {product.title}</h1>
                                            <h4>Description: {product.description}</h4>
                                            <p>Price: {product.price}</p>


                                            <Link to="#" onClick={()=>handleWishlist(product)} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart}/></Link>
                                    </div>


                                </div>

                                </div>
                            ))}


                    </div>

                ) : (

                    <div>Loading...</div>

                )}
    </div>
  )
}

export default Bag