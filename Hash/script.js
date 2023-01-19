window.addEventListener("hashchange",()=>{
    router()
})
function router(params) {
    switch (location.hash) {
        case "#home":
            data = { title: "HOME", color: "red", href: "#home" };
            render(data);
            break;
        case "#search":
            data = { title: "SEARCH", color: "blue", href: "#search" };
            render(data);
            break;
        case "#likes":
            data = { title: "LIKES", color: "yellow", href: "#likes" };
            render(data);
            break;
        default:
            data = { title: "PROFILE", color: "pink", href: "#profile" };
            render(data);
            break;
    }
}
function render(data){
    document.querySelector("h1").innerText = data.title;
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelectorAll("a").forEach((element) => {
        if(element.href.includes(data.href)){
            element.style.color = "black";
        }else{
            element.style.color = "#666";
        }
    });
}