function Button({msg}) {
 
 return(
  <a href={msg} target="_blank">
  <button>But Now</button>
  </a>
 );
}

function ProductDetails({name,price,discountPrice,srcImg}) {
 const mycart = []
 return(
   <div className="item">
    <img src={srcImg} width="100px" />
    <p>{name}</p>
    {(discountPrice !== "") ? (
     <>
      <p><del>K {price}</del></p>
      <p>Discount: K{discountPrice}</p>
      <a href={`https://wa.me/260973077465?text=Hello! I am interested in buying the ${name} for K${discountPrice}`} target="_blank">
       <button>But Now</button>
      </a>
      <br/><br/>
      <button onClick={addToCart}>Add to cart</button>
     </>
    ) : (
     <>
      <p>K{price}</p>
      <a href={`https://wa.me/260973077465?text=Hello! I am interested in buying the ${name} for K${price}`} target="_blank">
       <button>But Now</button>
      </a>
     </>
    )}
    
    
   </div>
 );
 
 function addToCart() {
  mycart.push(list)
  mycart.map((post)=>{
   for (let i = 0; i<post.length; i++) {
    alert(`${1+i} `+post[i].name)
   }
  })
 }
 
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
         key={get.id}
        />
       );
     })}
   </div>
  </>
 );
}