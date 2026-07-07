function App() {
  return(
   <>
    <Head title="e-ShopReact" />
    <paragraph>Shop Trending</paragraph>
    
    <Product/>
   </>
  );
}


const cont = document.querySelector(".container")
const root = ReactDOM.createRoot(cont)
const myapp = (<App />)
root.render(myapp)