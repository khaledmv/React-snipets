import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

const ProductLists = () => {


    const url= "http://localhost:3000/posts";
    const { data: products, loading } = useFetch(url);

  return (
    <>

        { loading && <p> Loading data </p> }

        { 
            products && products.map((product) => (
                <div key={product.id }> {product.title} </div>
            ))
        }
      
    </>
  )
}

export default ProductLists