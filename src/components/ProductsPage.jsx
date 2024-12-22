import prodFetch from "./prodFetch";
import { useState, useEffect } from "react";
const ProductsPage=()=>{
    const [Products, setProducts]=useState([])
    useEffect(()=>{
    setProducts(prodFetch())
    },[])
}