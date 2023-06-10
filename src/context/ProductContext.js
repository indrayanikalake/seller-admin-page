import React, {  createContext, useEffect, useState } from 'react'

const ProductContext=createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts]=useState([]);
  

    useEffect(()=>{
      localStorage.setItem('products',JSON.stringify(products));
    },[products]);

    useEffect(()=>{
        const storedProducts=localStorage.getItem('products')
        if(storedProducts)setProducts(JSON.parse(storedProducts));
    },[]);

     const addProduct=(newProduct)=>{
    setProducts([newProduct,...products]);
    }
    const deleteProduct=(index)=>{
        const updatedProducts = [...products];
        updatedProducts.splice(index,1);
        setProducts(updatedProducts);

    }
   
   

    const ProductContextValue={
        products,
        addProduct,
        deleteProduct,
      
    }

  return (
  
      <ProductContext.Provider value={ProductContextValue}>
        {children}
      </ProductContext.Provider>
  
  )
}

export default ProductContext;
