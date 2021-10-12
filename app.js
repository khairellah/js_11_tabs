// get Elements
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click",(e)=>{
    // get categorie id
    const myId = e.target.dataset.id
    if(myId){ // if myId is not nul ==> clicked of one of those 3 btns 'history','vision','goals'
        //1 Remove active from the other 2 btns
        btns.forEach((btn)=>{
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //2 Hide the articles
        articles.forEach((article)=>{
            article.classList.remove("active");
            
        })
        const myElement = document.getElementById(myId);
        //console.log(myElement)
        // add active to my div to show it 
        myElement.classList.add("active");
    }
})