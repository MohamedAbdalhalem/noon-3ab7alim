import React from 'react';

export type signUpForm ={
    name: string,
    email: string,
    phone: string,
    password: string,
    rePassword: string,
};

export type signInform = {
    email: string, 
    password: string
}

export type email = {
    email: string
}

export type code = {
    resetCode: string
}

export type reserPassword = {
    email:string,
    newPassword: string
}

export type authContext = {
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string|  null>>
}

export type contextProviderProps = {
    children : React.ReactNode
}

export type countProp = {
    count : number
}

export type product = {
    _id:string,
    title: string,
    brand: {
        name: string
    },
    price: number,
    priceAfterDiscount: number,  
    imageCover: string,
    ratingsAverage: number,
}
export type catergoryOrbrand ={
    _id: string,    
    name: string,
    image:string
}

export type productDelials = {
    _id:string,
    title:string,
    description: string,
    quantity: number,
    price: number,
    priceAfterDiscount: number,
    ratingsAverage: number,
    sold: number,
    category: {
        name: string
    },
    brand: {
        name: string
    },
    images: string []
}

export type userData = {
    name: string,
    role: string
}

export type cartContext = {
    addProducToCart: (productId: string | undefined) => void,
    numOfCartItems: number,
    totalCartPrice: number,
    products: productCart[] | null,
    removeProductFromCart: (productId: string) => void,
    clearUserCart: () => void,
    updateCartProductQuantity : (productId : string,count : number) => void
}

export type productCart = {
    count: number
    price: number
    product: {
        imageCover: string,
        title: string,
        _id:string

    }
}

export type wishlistContext = {
    getUserWishCart: () => void,
    products: product[] | null,
    addProductToWishlist: (productId : string | undefined) => void,
    removeProductFromWishlist: (productId : string | undefined) => void,
}