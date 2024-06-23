import { useState, useEffect } from 'react'
// import Rate from './components/Rate'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



const ratings = ["1","2","3",'4',"5"]
const category = ["Electronics" , "Home" , "Sports" , "Accessories"]

function App() {
  const [products, setProducts] = useState([])
  const [selectedRating, setSelectedRating] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)


  useEffect( () => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products")
      const data =  await response.json()
      setProducts(data);
    }

    fetchProducts()
  }, [])

  // useEffect( () => {
  //   async function fetchProductsByRating() {
  //     const response = await fetch(
  //       `http://localhost:3000/products?rating=${selectedRating}`
  //     );
  //     const data =  await response.json()
  //     setProducts(data);
  //   }

  //   if(selectedRating){
  //     fetchProductsByRating()
  //   }

  // }, [selectedRating])


  // useEffect( () => {
  //   async function fetchProductsByCategory() {
  //     const response = await fetch(
  //       `http://localhost:3000/products?category=${selectedCategory}`
  //     );
  //     const data =  await response.json()
  //     setProducts(data);
  //   }

  //   if(selectedCategory){
  //     fetchProductsByCategory()
  //   }

  // }, [selectedCategory])


  useEffect(() => {
    async function fetchProductsByFilters() {
      let query = "http://localhost:3000/products?";

      if(selectedCategory) {
        query += `category=${selectedCategory}&`;
      }
      if (selectedRating) {
        query += `rating=${selectedRating}&`;
      }
      

      try {
        const response = await fetch(query);
        const data = await response.json();
        setProducts(data);

        console.log(data);

      } catch (error) {
        console.error("Error fetching products by filters:", error);
      }
    }

    if (selectedRating || selectedCategory) {
      fetchProductsByFilters();
    }
  }, [selectedRating, selectedCategory]);





  return (
  <div className='continer'>
    {/* <Rate/> */}
    <div className='filter-side'>
      <h1>Filter</h1> 
      <div>
        <h2> By Rating</h2>
        { ratings.map( (r ,index) => (
          <div key={index}>
            <input
              onClick={(event) => setSelectedRating(event.target.value)} 
              name={ratings}
              type="radio"
              id={r}
              value={r}
            />
            <label htmlFor={r} >{r} stared</label>
          </div>
        ))}
      </div>
      

      <div>
        <h2> By Category</h2>
        { category.map( (c ,index) => (
          <div key={index}>
            <input
              onClick={(event) => setSelectedCategory(event.target.value)} 
              name={category}
              type="radio"
              id={c}
              value={c}
            />
            <label htmlFor={c} >{c}</label>
          </div>
        ))}
      </div>
      
    </div>


    <ul>{products.map( (p) => (
      <li key={p.id}>
        <img src="" alt="img" />
        <h3>{p.name}</h3> 
        <p>{p.description}</p> 
        <h4>{p.price}$</h4>
      </li>
    ))}</ul>
  </div>

  )
}

export default App
