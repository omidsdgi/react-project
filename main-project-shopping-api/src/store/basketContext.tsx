import React, {createContext, useReducer, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {ReactServerPrerenderResolveToType} from "next/dist/server/app-render/app-render-prerender-utils";

interface Props  {
    children: React.ReactNode;
}
interface ProductItem{
    productId: number;
    title: string;
    price: number;
    img?: string;
    quantity: number;
}

export const BasketContext  = createContext<{
    basketItems: Array<ProductItem>;
    addItem: (product: EntityType<ProductType>) => void;
    increaseItem: (productId: number) => void;
    decreaseItem: (productId: number) => void;
    deleteItem: (productId: number) => void;
    getItem:(productId: number) => ProductItem |undefined;
}>({
    basketItems:[],
    addItem:()=>{},
    increaseItem:()=>{},
    decreaseItem:()=>{},
    deleteItem:()=>{},
    getItem:(productId :number)=>undefined
})

type  Action = {type:'ADD_ITEM',product:EntityType<ProductType>}
            |  {type:'INCREASE_ITEM',productId:number}
            |  {type:'DECREASE_ITEM',productId:number}
            |  {type:'DELETE_ITEM',productId:number}



const basketReducer=(currentState:ProductItem[],action:Action)=> {

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...currentState,
                {
                    productId: action.product.id,
                    title: action.product.attributes.title,
                    img: action.product.attributes.thumbnail?.data?.attributes.url,
                    price: action.product.attributes.price,
                    quantity: 1,
                }
            ]
        case 'INCREASE_ITEM':
            return currentState.map(item=>{
                    if(item.productId === action.productId)
                        return {...item,quantity:item.quantity +1}
                    return item;
                })

        case 'DECREASE_ITEM':
            const currentProduct=currentState.find(item=>item.productId === action.productId);
            if(currentProduct && currentProduct.quantity === 1){
             return currentState.filter((item)=>item.productId !== action.productId);

            }
               return currentState.map(item=>{
                    if(item.productId === action.productId)
                        return {...item,quantity:item.quantity -1}
                    return item;
                })
        case 'DELETE_ITEM':
            return currentState.filter((item)=>item.productId !== action.productId);
            default:
                return currentState;
    }
}
export  const BasketContextProvider=(props:Props)=> {


    const [basketItems, dispatch] = useReducer(basketReducer, [])

    const addItemHandler = (product: EntityType<any>) => {
        dispatch({type: 'ADD_ITEM', product: product})
    }
    const increaseItemHandler = (productId: number) => {
        dispatch({type:'INCREASE_ITEM', productId: productId})
    }
    const decreaseItemHandler = (productId: number) => {
        dispatch({type:'DECREASE_ITEM', productId: productId})
    }
    const deleteItemHandler = (productId: number) => {
        dispatch({type:'DELETE_ITEM', productId: productId})
    }
    {/*
///////////////////////////////////پیاده سازی توابع سبد خرید با use state////////////////////////////
    const [basketItems, setBasketItems] = useState<Array<ProductItem>>([])

    const addItemHandler=(product:EntityType<ProductType>)=> {
        const newProduct:ProductItem = {
            productId: product.id,
            title:product.attributes.title,
            img:product.attributes.thumbnail?.data?.attributes.url,
            price:product.attributes.price,
            quantity:1,
        }
        setBasketItems(prevState => [...prevState, newProduct]);
    }

    const increaseItemHandler=(productId:number)=>{ const newBasket= basketItems.map(item=>{
        if(item.productId === productId)
            return {...item,quantity:item.quantity +1}
            return item;
    })
        setBasketItems(newBasket);
    }

    const decreaseItemHandler=(productId:number)=>{
         const currentProduct=basketItems.find(item=>item.productId === productId)
        if(currentProduct && currentProduct.quantity === 1    ){
        deleteItemHandler(productId);

        }else{
            const newBasket=basketItems.map(item=>{
                if(item.productId === productId)
                    return {...item,quantity:item.quantity -1}
                return item;
            })
            setBasketItems(newBasket);
        }
    }
    const deleteItemHandler=(productId:number)=>{
        const newBasket= basketItems.filter(item=>item.productId !== productId)
        setBasketItems(newBasket);
    }
    */}
    const getItemHandler=(productId:number):ProductItem | undefined=>{

    return basketItems.find((item)=>item.productId === productId)
    }

    return (
        <BasketContext.Provider value={{basketItems: basketItems,getItem:getItemHandler, addItem:addItemHandler, increaseItem:increaseItemHandler, decreaseItem:decreaseItemHandler, deleteItem:deleteItemHandler }}>
            {props.children}
        </BasketContext.Provider>
    )
}