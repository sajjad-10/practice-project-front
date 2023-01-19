document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.nodeName != "I") return;
    let data;
    let elementAtt = e.target.getAttributeNode("item-id").value;
    switch (elementAtt) {
        case "home":
            data = { title: "HOME", color: "red", itemId: "Home" };
            upDate(data);
            history.pushState(data, "home", "home");
            break;
        case "search":
            data = { title: "SEARCH", color: "blue", itemId: "search" };
            upDate(data);
            history.pushState(data, "search", "search");
            break;
        case "likes":
            data = { title: "LIKES", color: "yellow", itemId: "likes" };
            upDate(data);
            history.pushState(data, "likes", "likes");
            break;
        default:
            data = { title: "PROFILE", color: "pink", itemId: "profile" };
            upDate(data);
            history.pushState(data, "profile", "profile");
            break;
    }
});

window.addEventListener("popstate", () => {
    if (history.state) {
        upDate(history.state);
        console.log(history.state);
    } else {
        upDate({ title: "HOME", color: "red", itemId: "Home" });
    }
});

function upDate(data) {
    document.querySelector("h1").innerText = data.title;
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelectorAll("i").forEach((element) => {
        element.style.color = "#666";
    });
    document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black";
}
