function ProductDetails({name,price,discountPrice,srcImg}) {
 return(
   <div className="item">
    <img src={srcImg} width="100px" />
    <p>{name}</p>
    {(discountPrice !== "") ? (
     <>
      <p><del>K {price}</del></p>
      <p>Discount: K{price}</p>
     </>
    ) : (
     <p>K{price}</p>
    )}
    <button>Add to cart</button>
   </div>
 );
}

function Product() {

 return(
  <>
   <div className="product">
     {list.map((get)=>{
       return(
        <ProductDetails 
         name={get.name}
         price={get.price}
         discountPrice={get.discprice}
         srcImg={get.srcimg}
        />
       );
     })}
   </div>
  </>
 );
}