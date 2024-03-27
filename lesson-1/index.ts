let hello:string = "Hello world";
let num:number = 23;


// FUNCTION STARTED
function sum(a:number,b:number):number{
    return a+b;
}
// FUNCTION ENDED


// LITERAL TYPES STARTED
let number: 1 | 2 | 3 | 4;
number = 1;
// LITERAL TYPES ENDED




// UNION TYPES STARTED
let info : string | number;
info = "hello";
info = 23;
// UNION TYPES ENDED




// TUPLE STARTED
let tupleData : [boolean,string,number];
tupleData = [true,"Hello",23];
// TUPLE ENDED




// ARRAY STARTED
let myArray:number[] = [1,2,4,45,6,7,8,8];

let myArray2:Array<number> = [1,2,3,4,55]

console.log(myArray);
console.log(myArray2);
// ARRAY ENDED






// OBJECT STARTED
let myobject:{
    name:string,
    age:number,
    education:string;
}

myobject={
    name:"Ziyod",
    age:19,
    education:"Najot Ta'lim"
}

console.log(myobject);

console.log(myobject.name);

console.log(sum(23,2));
// OBJECT ENDED









// INTERFACE STARTED
interface m_language{
    uz:string;
    cyr:string;
    ru:string;
}

interface m_image{
    image:string;
}


interface product{
    name:m_language;
    category:string;
    subcategory:string;
    mainImage:string;
    price:number;
    isHaveColor:boolean;
    images:m_image[]
    deliveryInfo:m_language;
    propertyInfo:m_language;
    finalPriceInfo:m_language;
    popularInfo:m_language;
    packageCode:string;
}
// INTERFACE ENDED





// INTERFACE TASK STARTED
interface p_color{
    name:string;
    color:string;
}

interface title{
    title:string;
    sizes:sizes_2[]
}

interface sizes_2{
    name:string;
}


interface product_2{
    name:string;
    images:string[];
    price:number;
    shortDescription:string;
    longDescription:string;
    category:string;
    subCategory:string;
    brand:string;
    count:number;
    colors:p_color[];
    units:title
}

let myproduct:product_2 = {
    "name": "Smartfon iPhone 14 Pro 128GB Purple",
    "images": [
        "https://images.uzum.uz/ci1g91rltlh4bk4laa30/original.jpg",
        "https://images.uzum.uz/ci1g91r6edfostigj1u0/original.jpg",
        "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/original.jpg"
    ],
    "price": 15000000,
    "shortDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "longDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "category": "64c6de0d4d748db5916c3d30",
    "subCategory": "64c8d732b823d24b1c38835a",
    "brand": "64ca3c52afa7a02dcbcf49c6",
    "count": 10,
    "colors": [
        {
            "name": "Qora",
            "color": "#000"
        },
        {
            "name": "Oq",
            "color": "#fff"
        }
    ],
    "units": {
        "title": "Xotira",
        "sizes": [
            {
                "name": "128GB"
            },
            {
                "name": "256GB"
            }
        ]
    }
}
// INTERFACE TASK ENDED