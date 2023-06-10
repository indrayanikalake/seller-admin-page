import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import  { ProductProvider } from "./context/ProductContext";


const App = () => {
  return (
    <div>
     <ProductProvider>
      <ProductForm />
      <ProductList />
     </ProductProvider>
    </div>
  )
}

export default App;
