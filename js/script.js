/* var, const, let */
const t = document.querySelector("#title");
console.log(t);

const items = document.querySelectorAll("#wrap article");
for(let i=0; i<items.length; i++) {
    console.log(items[i]);
}

const box = document.querySelector("#box");

box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.border = "none";
box.style.transform = "rotate(10deg)";