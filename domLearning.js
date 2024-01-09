
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
    },
];
for (let detail of details) {
    ulElm.innerHTML += `
    <li><a href="#sfdff">${detail.home || detail.todo || detail.sing || detail.about}</a></li>
    `
    const liElm = ulElm.querySelector("a");
    // console.log(liElm.setAttribute("href", "https://google.com"));
    // console.log(liElm.getAttribute("href"));
}


// const enrollElm = document.querySelector(".enroll");

// enrollElm.innerHTML = `
//             <div class="content">
//                 <button class="btn_1" onclick="console.log("you click me")">Enroll now</button>
//                 <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing  sit amet consectetur adipisicing elit! 
//                 </p>
//            </div>`



// const sectionElm=document.querySelector(".section_task");

// sectionElm.classList.add("main");
// sectionElm.classList.remove("section_task");
// sectionElm.classList.toggle("section_task");
// sectionElm.classList.toggle("main");
// const containerClass=sectionElm.classList.contains("main");
// const containerClass=sectionElm.classList.contains("section_task");

// console.log(containerClass);


// const mainEl=document.querySelector(".main");

// mainEl.innerHTML +="<li>new todo</li>"


// const formElm = document.querySelector(".section_task");
// formElm.remove();

// const createElmUl = document.createElement("ul");
// const createElmLi = document.createElement("li");
// const newTodoText=document.createTextNode("This new somthing else");

// createElmUl.classList.add("main")
// createElmLi.appendChild(newTodoText);
// createElmUl.appendChild(createElmLi);
// formElm.append(createElmUl);
// formElm.prepend(createElmUl);
// formElm.appendChild(createElmUl);
// formElm.before(createElmUl);
// formElm.after(createElmUl);


// const li=document.querySelector(".liss")
// formElm.replaceChildren(createElmLi, li);
// formElm.removeChild(li)



//insertAdjacentHTML
//beforebegin
//afterbegin
//beforeend
//afterend


// const add=document.querySelector(".main");
// console.log(add)
// add.insertAdjacentHTML("beforeend","<li>new entery</li>")



//Todo

const formElm = document.querySelector(".form-todo");
const ulElments = document.querySelector(".main");
let inpValpElm = document.querySelector("#inp");

// Load todo items from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach((todoText) => {
        createTodoElement(todoText);
    });
});

formElm.addEventListener("submit", (event) => {
    event.preventDefault();
    let valInp = inpValpElm.value;
    if (valInp) {
        createTodoElement(valInp);

        // Save todo items to localStorage
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        savedTodos.push(valInp);
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }

    inpValpElm.value = "";
});

function createTodoElement(todoText) {
    const createLi = document.createElement("li");
    createLi.textContent = todoText;
    ulElments.appendChild(createLi);
}



// const btn=document.querySelector(".btn_1");

// btn.onclick=function(){
//     console.log("cli....",this);
// }

// btn.onclick=()=>{
//     console.log("cli....",this,btn.innerText)

// }

// const allBtn = document.querySelectorAll("button");


// allBtn.forEach((btn) => (
//     btn.addEventListener("click", function () {
//          let num=0;
//         for(let i=0; i<10000000;i++){
//          num=num+i;
//         }        
//         console.log("allBtn",btn.textContent,num);
//     })
// ))

// const buttonEl=document.querySelector(".btn_1");

// buttonEl.addEventListener("click",()=>{
//     buttonEl.style.backgroundColor="yellow";
//     buttonEl.style.color="black";
//     buttonEl.style.border="none";
//     console.log("cliked...")
// })
// console.log(buttonEl)

const body = document.body;


body.addEventListener("keypress", (e) => {

    if (e.keyCode === 113) {
        alert("You found your code");
        document.querySelectorAll("input")[2].style.backgroundColor = "blue";
        document.querySelectorAll("input")[2].style.color = "#fff";
        document.querySelectorAll("input")[2].setAttribute("value", "https://google.com");
        console.log(document.querySelectorAll("input")[2].getAttribute("value"));

    }
    console.log("The keys was press...", e.keyCode)
})



const buttonEl = document.querySelector(".btn_1");

//mouseover 


buttonEl.addEventListener("mouseover",()=>{
    console.log("mouseover is occured...")
})



buttonEl.addEventListener("click", () => {
    function myColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randCol = `rgb(${red}, ${green}, ${blue})`;
        return randCol;
    }

    const randomColor = myColor();
    body.style.backgroundColor = randomColor;
});

