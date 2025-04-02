import axios from "axios";
export async function getdata() {
    try{
        const response = await axios.get('https://dummyjson.com/products');
        return response.data.products;
    }catch(error){
        console.log("getdata() Err:" , error);
        throw error;
    }
}

export async function getcategories() {
    try{
        const response = await axios.get('https://dummyjson.com/products/categories');
        return response.data;

    }catch(error){
        console.log("getcategories() Err:",error);
        throw error;
    }
}

export async function getSingleProduct() {
    try{
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    }catch(error){
        console.log("getSingleProduct() Err:",error);
        throw error;
    }
}

export async function getProductCategory(name) {
    try{
        const response = await axios.get(`https://dummyjson.com/products/category/${name}`);
        return response.data.products;
    }catch(error){
        console.log("getProductCategory() Err:",error);
        throw error;
    }
}