import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getCategories} from "@/api/category";
import {useState} from "react";
import {getProductOfCategory, creatProduct, getProducts, deleteProduct} from "@/api/products";
import PaginatedList from "@/component/lists/paginatedList";
import axios from "axios";
import {toast} from "react-toastify";
import * as querystring from "node:querystring";
import Interceptors from "undici-types/interceptors";
import retry = Interceptors.retry;
import Login from "@/component/auth/Login";

export default function Home() {
    const queryClient=useQueryClient()

    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    // const {data:productData}=useQuery({queryKey:['products'],queryFn:getProducts})

    const{data:categoryData}=useQuery({queryKey:["categories"],queryFn:getCategories,retry:false})
    const {data:productData,isError,error}=useQuery({queryKey:["product_of_category",selectedCategory,page]
        ,queryFn:()=>{return getProductOfCategory({categoryId:selectedCategory,page:page})},enabled:selectedCategory !== 0,retry:false})

    const initialFormData = {
        title: "",
        price: "",
        category: 0,
    };
    const [formData, setFormData] = useState(initialFormData);

    const mutation=useMutation({mutationFn:creatProduct})

    const mutationDelete=useMutation({mutationFn:deleteProduct})


    const inputHandler=(name:string,value:any)=>{
        if (name === "title"){
            setFormData(prevState =>
                ({...prevState,title:value}))
        }else if(name === "price"){
            setFormData(prevState =>
                ({...prevState,price:value}))
        }else {
            setFormData(prevState =>
                ({...prevState,category:value}))

        }

    }
    const onSubmit=async(e)=>{
        e.preventDefault()
        if (formData.title && formData.category !==0)
            mutation.mutate(formData,{
                onSuccess:()=>{
                    queryClient.invalidateQueries(["product_of_category"])
                    setFormData(initialFormData)
                    toast.success('محصول با موفقیت ذخیره شد')
                }
            })
    }

    console.log(selectedCategory)

    const deleteHandler=(id)=>{
        mutationDelete.mutate({productId:id},{
            onSuccess:()=>{
                toast.success('محصول با موفقیت حذف شد');
                queryClient.invalidateQueries(["products"])
            }
        })
    }

    return (
        <main className={`flex flex-col items-center p-24 min-h-screen`}>
            <Login/>

            <div className="border-2 border-gray-400 rounded p-8 mb-4">
                <h1 className="text-xl font-bold mb-4">Categories</h1>
                {categoryData &&
                    <ul className={"flex"}>
                        {categoryData.data.map(category => (
                            <li
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setPage(1);
                                }}
                                className={`px-4 py-2 rounded-lg border border-gray-400 transition-colors duration-200 shadow-sm cursor-pointer 
                                    ${selectedCategory === category.id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-800 hover:bg-blue-100 hover:border-blue-300"}`}
                            >
                                {category.attributes.title}
                            </li>
                        ))}
                    </ul>

                }
            </div>

            {
                productData &&
                <PaginatedList
                    currentPage={page}
                    total={productData?.meta.pagination.pageCount}
                    title={"products"}
                    setPage={setPage}
                >
                    {productData.data.map((product) => {
                        return (<li
                            key={product.id}
                            className="flex items-center justify-between py-2 border-b"
                        > {product.attributes.title}
                            <button
                                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                                onClick={() => {
                                    deleteHandler(product.id)
                                }}>Delete
                            </button>
                        </li>)
                    })
                    }

                </PaginatedList>
            }
            <form onSubmit={onSubmit}>
                <div className="flex gap-2 items-center ">
                    <label>Title</label>
                    <input type={"text"} className={"border-2 border-gray-400 rounded p-2"}
                           onChange={(e) => inputHandler("title", e.target.value)}
                           value={formData.title}/>
                </div>
                <div className="flex gap-2 items-center ">
                    <label>Price :</label>
                    <input
                        type={"number"}
                        className={"border-2 border-gray-400 rounded p-2"}
                        onChange={(e) => inputHandler("price", e.target.value)}
                        value={formData.price}
                    />
                </div>
                <div className="flex gap-2 items-center mb-4 ">
                    <label htmlFor=""></label>
                    <select className={"w-full border-2 border-gray-400 bg-transparent p-2"}
                            onChange={(e) => inputHandler("category", e.target.value)}
                            value={formData.category}>
                        <option value={0}>Select Category</option>
                        {
                            categoryData &&
                            categoryData.data.map((category) => {
                                return (<option key={category.id}
                                                value={category.id}>{category.attributes.title}</option>)
                            })
                        }

                    </select>
                </div>
                <div className="flex justify-center ">
                    <input type={"submit"} value={"save"} className={"text-white bg-blue-400 rounded px-10 py-2"}/>

                </div>
            </form>


        </main>
    );
}

