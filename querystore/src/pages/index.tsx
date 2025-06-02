import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createProduct, deleteProduct, getProductsOfCategory} from "@/api/products";
import {getAllCategories} from "@/api/category";
import {ChangeEvent, useState} from "react";
import PaginatedList from "@/components/lists/PaginatedList";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
    MenuItem,
    Button,
    Stack,
    Paper,
} from '@mui/material';
import {toast} from "react-toastify";
import Login from "@/components/auth/Login";

export default function Home() {


    const queryClient = useQueryClient()
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        category: 0
    })

    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    const [page, setPage] = useState(1)
    const {data: categoryData} = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories,
        staleTime: 2000,
        retry: false
    })
    const {data: productData} = useQuery({
        queryKey: ["product_of_category", selectedCategory, page],
        queryFn: () => {
            return getProductsOfCategory({categoryId: selectedCategory, page: page})
        }, enabled: selectedCategory !== 0,
        retry: false
    })

    const mutation = useMutation({mutationFn: createProduct})

    const mutationDelete = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['product_of_category']
            })
        }
    })


    const inputHandler = (name: string, value: any) => {
        if (name === "title") {
            setFormData(prevState => ({...prevState, title: value}))
        } else if (name === "price") {
            setFormData(prevState => ({...prevState, price: value}))
        } else if (name === "category") {
            setFormData(prevState => ({...prevState, category: value}))
        }
    }

    const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.title && formData.category !== 0)
            mutation.mutate(formData, {
                onSuccess: () => {
                    toast.success("محصول با موفقیت ذخیره شد")
                    queryClient.invalidateQueries({queryKey: ["product_of_category"]})
                    setFormData({
                        title: "",
                        price: 0,
                        category: 0
                    })


                }})
            }


        const deleteHandler = (id: number) => {
            mutationDelete.mutate({productId: id}, {
                onSuccess: () => {
                    toast.success("محصول با موفقیت حذف شد")
                    queryClient.invalidateQueries(["products"])

                }
            })

        }
        return (

            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 6,
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: 2,
                        p: 4,
                        mb: 4,
                        width: '100%',
                        maxWidth: 600,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Login/>
                    {/* لیست دسته‌بندی‌ها */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                           margin:"20px"
                        }}
                    >
                    {Array.isArray(categoryData?.data) && categoryData.data.length > 0 && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                دسته‌بندی محصولات
                            </Typography>
                            <List>
                                {categoryData.data.map((category: any) => (
                                    <ListItem key={category.id} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                setSelectedCategory(Number(category.id));
                                                setPage(1);
                                            }}
                                        >
                                            <ListItemText primary={category.attributes.title}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}
                    </Box>

                    {/* فرم ثبت محصول */}
                    <Box component="form" onSubmit={onSubmit} sx={{mt: 3}}>
                        <Stack spacing={2}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                value={formData.title}
                                onChange={(event) => inputHandler('title', event.target.value)}
                            />
                            <TextField
                                label="Price"
                                variant="outlined"
                                type="number"
                                fullWidth
                                value={formData.price}
                                onChange={(event) => inputHandler('price', event.target.value)}
                            />
                            <TextField
                                select
                                label="Category"
                                variant="outlined"
                                fullWidth
                                value={formData.category}
                                onChange={(event) => inputHandler('category', event.target.value)}
                            >
                                <MenuItem value="">
                                    <em>انتخاب دسته‌بندی</em>
                                </MenuItem>
                                {categoryData?.data.map((category: any) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.attributes.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button type="submit" variant="contained" color="primary">
                                ذخیره محصول
                            </Button>
                        </Stack>
                    </Box>
                </Paper>

                {/* لیست محصولات با صفحه‌بندی */}
                {productData && (
                    <Box sx={{width: '100%', maxWidth: 600}}>
                        <PaginatedList
                            currentPage={page}
                            totalPage={productData.meta.pagination.pageCount}
                            title="محصولات"
                            setPage={setPage}
                        >
                            <List>
                                {productData.data.map((product: any) => (
                                    <ListItem key={product.id}
                                              secondaryAction={
                                                  <Button variant="contained" color="error"
                                                          onClick={() => deleteHandler(product.id)}>
                                                      حذف محصول
                                                  </Button>
                                              }
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" color="text.primary" fontWeight={600}>
                                                    {product.attributes.title}
                                                </Typography>
                                            }/>
                                    </ListItem>
                                ))}
                            </List>
                        </PaginatedList>
                    </Box>
                )}
            </Box>
        );
    }





