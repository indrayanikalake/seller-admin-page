import { useContext, useRef } from "react";
import ProductContext from "../context/ProductContext";

const ProductForm = () => {
    const {addProduct}=useContext(ProductContext);
    const nameRef=useRef();
    const idRef=useRef();
    const priceRef=useRef();
    const categoryRef=useRef();

    const handleAddProduct=(e)=>{
       e.preventDefault();

       const productId=idRef.current.value;
       const productName=nameRef.current.value;
       const productPrice=priceRef.current.value;
       const productCategory=categoryRef.current.value;

       if(productId && productName && productPrice && productCategory){
        const newProduct={
            id:productId,
            name:productName,
            price:productPrice,
            category:productCategory
          }
          addProduct(newProduct);

          idRef.current.value='';
          nameRef.current.value='';
          priceRef.current.value='';
          categoryRef.currentvalue=''

       }
    }
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label>
            Product id:
           <input type='number' ref={idRef} />
        </label>
        <br />
        <label>
            Product Name:
           <input type='text' ref={nameRef}/>
        </label>
        <br />
        <label>
            Product Price:
           <input type='number' ref={priceRef}/>
        </label>
        <br />
        <label>
            Catagory:
           <select ref={categoryRef}>
            <option value='Type 1'>Type 1</option>
            <option value='Type 2'>Type 2</option>
            <option value='Type 3'>Type 3</option>
           </select>
        </label>
        <br />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm;
