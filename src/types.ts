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
    name:string
}