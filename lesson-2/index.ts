import {card} from "./interface";


let baseUrl = "https://jsonplaceholder.typicode.com";
let wrapper = document.querySelector('.section1_wrapper')!;


// FETCHING DATA STARTED
async function fetchData(){
try{
    let response  = await fetch(`${baseUrl}/users`);
    let result = await response.json();

    result.forEach((e:card)=>{
        RenderData(e)
    })
}catch(error){
    console.log(error);
}
}

fetchData()
// FETCHING DATA ENDED


// RENDER DATA STARTED
async function RenderData(info:card){
    wrapper.innerHTML = `
        <h1>${info.name}</h1>
    `
}
// RENDER DATA ENDED