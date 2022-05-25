import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Text from './components/Text';
import { Link } from 'react-router-dom';


function Cocktail() {

     const {id}=useParams()
     console.log(useParams());
     const [item, setItem]=useState({});

     const searchIngredients=()=>{
          let ingredientsList= [];
        for(let i=1; i<=15; i++){
             if(item[`strIngredient${i}`]){
                  ingredientsList.push(item[`strIngredient${i}`]);
             }}
             return ingredientsList;
          }

     useEffect(()=>{

          (async()=>{
          const request= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          const response = await request.json();
          const data = response.drinks[0];
          setItem({...data});

          console.log(response);
          })()


     },[id]);

  return (
    <div style={{display: "grid", justifyContent: "center"}}>
         <Text text={item.strDrink} width="100%"/>
          

         <img src={item.strDrinkThumb} alt="drinks" style={{width:"250px", borderRadius:"7px"}}/>

        <section>
             {searchIngredients().map(ingredient =><p style={{padding:"2px"}}> {ingredient} </p>)}
      

        </section>


        <button className='btn'><Link to="/menu">Menu</Link></button>

         

    </div>
  )
}

export default Cocktail