// import { useEffect, useState } from "react";


// const ratings = ["1","2","3",'4',"5"]

// function Rate() {
//     const [selectedRating, setSelectedRating] = useState(null)


//     useEffect( () => {
//         async function fetchProductsByRating() {
//           const response = await fetch(
//             `http://localhost:3000/products?rating=${selectedRating}`
//           );
//           const data =  await response.json()
//           setProducts(data);
//         }
    
//         if(selectedRating){
//           fetchProductsByRating()
//         }
    
//       }, [selectedRating])


//     return(
//         <div>
//             <h2>Rating</h2>
//             <div>
//             { ratings.map( (r ,index) => (
//                 <div key={index}>
//                 <label htmlFor={r} >{r} star</label>
//                 <input
//                     onClick={(event) => setSelectedRating(event.target.value)} 
//                     name={ratings}
//                     type="radio"
//                     id={r}
//                     value={r}
//                 />
//                 </div>
//             ))}
//             </div>
//         </div>


//     )
    
// }

// export default Rate