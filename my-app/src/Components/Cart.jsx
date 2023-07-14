import React, { useState, useEffect } from "react";
import styles from './cart.module.css';

const Cart = () => {

    const [wishlistItems, setWishlistItems]=useState([]);

  
        useEffect(()=>{

            const items=JSON.parse(localStorage.getItem("wishlist") || "[]");

            setWishlistItems(items);

        }, []);
        // useeffect works after initial render and show all the items from the localstorage as initial we have an empty array and updated the setwishlist

  
    const handleRemoveItem=(id)=>{

        const updatedItems=wishlistItems.filter((item)=>item.id!==id);


        setWishlistItems(updatedItems);

        localStorage.setItem("wishlist", JSON.stringify(updatedItems));
    };
    // the remove item remove the item if the filter data item matches with the given id then it will delete the product and updated the localstorage


    // Calculate the total number of items and the subtotal
  const totalItems=wishlistItems.length;
  const subtotal=wishlistItems.reduce((total, item) => total + item.price, 0);


  return (


    <div>


            <div className={styles.summary}>

                    <h3>Total Items: {totalItems}</h3>
                    <h3>Subtotal: {subtotal.toFixed(2)}</h3>

            </div>

            {wishlistItems.length>0 ? (

                    <div className={styles.productgrid}>


                        {wishlistItems.map((item)=>(

                            <div key={item.id} className={styles.productcard}>


                                    <img src={item.thumbnail} alt={item.title}/>


                                    <h3>Title: {item.title}</h3>

                                    <p>Description: {item.description}</p>

                                    <p>Price: {item.price}</p>

                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>

                            </div>

                        ))}

                            
                    </div>
                ) : (


                    <p>You have no items in your wishlist.</p>

                )}
    </div>
  )
}

export default Cart