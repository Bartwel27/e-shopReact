function ProductDetails({name,price,discountPrice,srcImg}) {
 return(
   <div className="item">
    <img src={srcImg} width="100px" />
    <p>{name}</p>
    {(discountPrice !== "") ? (
     <>
      <p><del>K {price}</del></p>
      <p>Discount: K{discountPrice}</p>
     </>
    ) : (
     <p>K{price}</p>
    )}
    <a href="https://wa.me/260973077465?text=Hello! I am interested in buying the ${name}" target="_blank">
     <button>But Now</button>
    </a>
  
    
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