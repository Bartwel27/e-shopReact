function AutoSlider(){
 return (
  <marquee scrollamount="5">
   Simple shopping online e-commerce chart view made using hard coded react & JSX
  </marquee>
 );
}


function Head({ title }) {
  return (
   <>
    <div className="head">
     <h2>{title}</h2>        
     <NavigationComponent size="25px" />
    </div>
    <Cart>
     <AutoSlider />
    </Cart>
    
   </>
  );
}

/*
const head = document.querySelector(".head")
const headRoot = ReactDOM.createRoot(head)
const HeadComp = (<Head title="ReactCart" />)
headRoot.render(HeadComp)
*/