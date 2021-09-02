let mouseCursor = document.querySelector(".cursor")
let navlinks = document.querySelectorAll(".navlinks li")
let imagetag = document.querySelector(".front-cover img")
let navbar = document.querySelector("nav")




navbar.addEventListener('mousemove',cursor)

navbar.addEventListener('mouseover',()=>{
    mouseCursor.classList.add('cursor');
})
navbar.addEventListener('mouseleave',()=>{
    mouseCursor.classList.remove('cursor');
})

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(links => {
    links.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('effects');
        links.classList.add('hovered-link')
    })
    links.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('effects');
        links.classList.remove('hovered-link')
    })
})


