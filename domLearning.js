
const ulElm = document.querySelector("ul");

const details = [
    {
        home: "Home",
    },
    {
        todo: "Todo",
    },
    {
        sing: "sing up",
    }
];
for (let detail of details) {
    ulElm.innerHTML += `
    <li><a href="#sfdff">${detail.home || detail.todo || detail.sing}</a></li>
    `
    const liElm = ulElm.querySelector("a");
    console.log(liElm.setAttribute("href", "https://google.com"));
    console.log(liElm.getAttribute("href"));
}

const enrollElm = document.querySelector(".enroll");

enrollElm.innerHTML = `
            <div class="content">
                <button class="btn">Enroll now</button>
                <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit! 
                </p>
           </div>`



const bodyElm=document.querySelector("section");

console.log(bodyElm.parentNode)








