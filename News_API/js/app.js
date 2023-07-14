const api_key="1299e28be4a04f71835f6d0ef58afd10";
const url="https://newsapi.org/v2/everything?q=";


window.addEventListener('load',()=>fetchNews('India'));

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${api_key}`);

    const data=await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardscontainer=document.getElementById('cards-container');
    const cardstemplate=document.getElementById('template-news-card');
    cardscontainer.innerHTML=''
    let i=0;
    articles.forEach(article =>{
        i=i+1;
        
        
        if(!article.urlToImage) return;
        const cardClone=cardstemplate.content.cloneNode(true);
         fillDataInCard(cardClone,article);
        cardscontainer.appendChild(cardClone);
        
    });
    
    
}

function fillDataInCard(cardClone,article){
    const newsimg=cardClone.querySelector('#newsimg3');
    const newstitle=cardClone.querySelector('#newstitle');
    const newssrc=cardClone.querySelector('#newssrc');
    const newsdesc=cardClone.querySelector('#newsdesc');
    newsimg.src=article.urlToImage;
    newstitle.innerHTML=article.title;
    newsdesc.innerHTML=article.description;
    const date=new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta",
    });
    newssrc.innerHTML=`${article.source.name}: ${date} `;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,'blank');
    })




}
function navElement(id){
    fetchNews(id);
}
function getElement(){
    const searchValue=document.getElementById('searchValue').value;
    if(searchValue==""){
        alert("Please enter valid key");
    }
    else{
    fetchNews(searchValue);
    }
}


// const API_KEY="1299e28be4a04f71835f6d0ef58afd10";
// const url="https://newsapi.org/v2/everything?q=";
// window.addEventListener("load",()=> fetchNews('India'));

// async function fetchNews(query){
//     const res= await fetch(`${url}${query}&apiKey=${API_KEY}`);
//    const data= await res.json();
//    console.log(data);
// //   bindData(data.articles);
// } 