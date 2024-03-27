interface address{
    street:string,
    suite:string,
    city:string,
    zipcode:string
    geo:{
    lat:string,
    lng:string
}
}

interface company{
    name:string,
    catchPhrase:string,
    bs:string
}

export interface card{
    id:number,
    name:string,
    username:string,
    email:string,
    adress:address,
    phone:string,
    website:string,
    company:company
}