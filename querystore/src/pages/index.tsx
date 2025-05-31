import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createProduct, getProductsOfCategory} from "@/api/products";
import {getAllCategories} from "@/api/category";
import {ChangeEvent, useState} from "react";
import PaginatedList from "@/components/lists/PaginatedList";


export default function Home() {


    const queryClient = useQueryClient()
    const [formData, setFormData] = useState({
        title:"",
        price:0,
        category:0
    })

    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    const [page, setPage] = useState(1)
    const {data:categoryData}=useQuery({queryKey:['categories'],queryFn:getAllCategories,staleTime:2000,retry:false})
    const{data:productData}=useQuery({queryKey:["product_of_category",selectedCategory,page],
        queryFn:()=>
        {return getProductsOfCategory({categoryId:selectedCategory,page:page})},enabled:selectedCategory !==0})

    const mutation= useMutation({mutationFn:createProduct})



    const inputHandler = (name:string,value:any) => {
        if (name ==="title"){
            setFormData(prevState => ({...prevState, title:value}))
        }else if(name==="price"){
            setFormData(prevState => ({...prevState, price:value}))
        }else if(name==="category"){
            setFormData(prevState => ({...prevState, category:value}))
        }
    }

    const onSubmit= async (event:ChangeEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(formData.title && formData.category !==0)
           mutation.mutate(formData,{
               onSuccess:()=>{
               queryClient.invalidateQueries({queryKey:["product_of_category"]})

               }})
    }
    return (

        <main className={'flex items-center justify-center flex-col p-24 min-h-screen'}>
            <div className="border-2  rounded p-8 mb-4 ">
                {
                    categoryData &&
                    <ul>
                        {
                            categoryData.data.map((category) => {
                                return  (<li key={category.id} onClick={()=>{setSelectedCategory(category.id);setPage(1)}}>{category.attributes.title}</li>)
                            })
                        }
                    </ul>
                }
                <form onSubmit={onSubmit}>
                    <div className={'mb-4 flex gap-2 items-center'}>
                        <label>title:</label>
                        <input className={'border-2 px-2 text-black'} type="text" onChange={(event)=> inputHandler("title", event.target.value)}/>
                    </div>
                    <div className={'mb-4 flex gap-2 items-center'}>
                        <label>price:</label>
                        <input className={'border-2 px-2 text-black'} type="text" onChange={(event)=> inputHandler("price", event.target.value)}/>
                    </div>
                    <div className={'mb-4 flex gap-2 items-center'}>
                        <label>category:</label>
                        <select className={'w-full border-2  text-black'}  onChange={(event)=> inputHandler("category", event.target.value)}>
                            <option value={""}>Select category</option>
                            {
                                categoryData &&
                                categoryData.data.map((category) => {
                                    return  (<option key={category.id} value={category.id}>{category.attributes.title}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className={'mb-4 flex gap-2 items-center'}>
                        <input className={'text-white bg-blue-400 rounded px-10 py2'} type="submit" value="save"/>
                    </div>
                </form>

            </div>
            {productData &&
                <PaginatedList currentPage={page} totalPage={productData?.meta.pagination.pageCount} title={'products'}
                               setPage={setPage}>
                    {productData &&

                        productData.data.map((product) => {
                            return  (<li key={product.id}>{product.attributes.title}</li>)
                        })
                    }
                </PaginatedList>
            }
        </main>
    )
}
