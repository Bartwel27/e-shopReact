function NavigationComponent( {size} ) {
 return (
  <>
   <div className="navbtns">
    <button onClick={shownav} id="shownav">
     <svg width={size} height={size} viewBox="0 0 24 24"><path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
    </button>
   </div>
  </>
 );
 
  
 
 function shownav(){
  let count = 0;
  let chart = document.querySelector('.chart')
  if (count == 0) {
   count++
   chart.style.display="block"
  }
 }

 
}