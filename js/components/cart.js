function Cart(){

let mycart = [];

const [ object, setObject ] = React.useState(mycart)

 return(
  <div style={{
   position:'relative',
  }}>
   <div className='chart' style={{
    width: '300px',
    height: '50vh',
    backgroundColor: '#222',
    display: 'none',
    float: 'right',
    position: 'absolute',
    top: '0',
    right: '0'
   }}>
    <center><b>Cart View</b></center>
    <button onClick={Hidenav} style={{float:'right'}} >Cancel</button>
    
    {/* adding your cart */}
   
   
   </div>
  </div>
 );
 
  function Hidenav(){
   let count = 0;
   let chart = document.querySelector('.chart')
   if (count == 0) {
    count++
    chart.style.display="none"
   }
  }
 
}
