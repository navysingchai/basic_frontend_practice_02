// const eHandle = (e, tagname) => {
//     console.log(`------------ ${tagname} ---------------`);
//     console.log("target: ", e.target);
//     console.log("currentTarget: ", e.currentTarget);
//     console.log("eventPhase: ", e.eventPhase);
// }

// const btnSubmit = document.querySelector("button");
// btnSubmit.addEventListener('click', (e) => {
//     eHandle(e, "btn");
//     console.log("hello btn") 
// });

// const div = document.querySelector("div");
// div.addEventListener('click', (e) => {
//     eHandle(e, "div");
//     console.log("hello div") 
// });

// const aLink = document.querySelector("a");
// aLink.addEventListener("click", (e) => {
//     e.preventDefault();
// });

// const inputMessage = document.getElementById('message')
// inputMessage.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })