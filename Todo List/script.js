const list = document.querySelector("#to-do-list");
const addInput = document.querySelector("#add-form input");
const addBtn = document.querySelector("#add-form button");
const searchInput = document.querySelector("#search-form input");

list.addEventListener("click", (e) => {
    const itemTarget = e.target;
    if (
        itemTarget.nodeName == "SPAN" &&
        itemTarget.className == "delete-btn" &&
        itemTarget.classList.contains("delete-btn")
    ) {
        itemTarget.parentNode.remove();
        if (list.children.length == "0") {
            const listEmptyMsag = document.createElement("div");
            listEmptyMsag.style.textAlign = "center";
            listEmptyMsag.style.color = "#333";
            listEmptyMsag.innerText = "Your list is empty";
            listEmptyMsag.id = "emptyMsg";
            list.appendChild(listEmptyMsag);
        }
    }
});
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector("#emptyMsg");
    if (!addInput.value) return;
    if (errorMsg) {
        errorMsg.remove();
    }
    list.append(createListItem(addInput.value));
    addInput.value = "";
});
function createListItem(itemVal) {
    const item = document.createElement("li");
    const title = document.createElement("span");
    const btn = document.createElement("span");

    item.classList.add("to-do-item");
    title.classList.add("title");
    btn.classList.add("delete-btn");

    title.innerText = itemVal;
    btn.innerText = "delete";

    item.appendChild(title);
    item.appendChild(btn);
    return item;
}
searchInput.addEventListener("input", (e) => {
    Array.from(list.children).forEach((element) => {
        const errorMsg = document.querySelector("#emptyMsg");
        const elementTitle = element.querySelector(".title");

        if (errorMsg) return;
        if (
            elementTitle.innerText
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        ) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
});
