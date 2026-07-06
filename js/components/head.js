function AutoSlider(){
 return (
  <marquee scrollamount="5">
   Simple shopping cart view made using react
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
    <AutoSlider />
   </>
  );
}

/*
const head = document.querySelector(".head")
const headRoot = ReactDOM.createRoot(head)
const HeadComp = (<Head title="ReactCart" />)
headRoot.render(HeadComp)
*/