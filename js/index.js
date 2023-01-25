import { blogPosts } from "./data.js"
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
let viewMore = false

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

function renderPosts(initialPosition, lastPosition){
    for (let i = initialPosition; i < lastPosition; i++){
        document.querySelector(".posts").innerHTML += 
            `
            <div class="post">
                <img class="blog-image" src=${blogPosts[i].image} alt=${blogPosts[i].alt}>
                <p class="date color">${blogPosts[i].date}</p>
                <p class="blog-title">${blogPosts[i].title}</p>
                <p class="desc color">${blogPosts[i].desc}</p>
            </div>
            `
    }
}

renderPosts(0, 6)
document.addEventListener("click", function(e){
    if (e.target.classList.contains("view-more-btn")){
        if (!viewMore){
            renderPosts(6, blogPosts.length)
            document.querySelector(".view-more-btn").textContent = 'View Less'
        }
        else {
            document.querySelector(".posts").innerHTML = ``
            renderPosts(0, 6)
            document.querySelector(".view-more-btn").textContent = 'View More'
        }
        viewMore = !viewMore
    }
})
