document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    const elements = document.getElementsByTagName("footer")[0];
    console.log(elements.children);
    console.log(el.children);
    console.log(el.children[8].innerText = "Javascript");
});