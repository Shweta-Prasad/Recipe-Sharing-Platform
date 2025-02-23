import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodImg.jpg'
import { BsFillStopwatchFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";

export default function RecipeItems() {
    const allRecipes=useLoaderData()
    console.log(allRecipes)
  return (
    <>
        <div className='card-container'>
            {
                allRecipes?.map((item,index)=>{
                    return(
                        <div key={index} className='card'>
                            <img src={foodImg} width="120px" height="124px"/>
                            <div className='card-body'>
                                <div className='title'>{item.title}</div>
                                <div className='icons'>
                                    <div className='timer'><BsFillStopwatchFill />30min</div>
                                    <IoHeart />

                                </div>
                            </div>
                        </div>
                    )
                })
            }    
        </div>
    </>
  )
}
