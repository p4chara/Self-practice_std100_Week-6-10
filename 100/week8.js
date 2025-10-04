//querySelectorปกติ กับ all แตกต่างกันตรงเอาแค่ตัวแรกกับเอาทั้งหมด


const q1 = document.getElementById("soup")// หาตามId
const q2 = document.querySelector(".soup")// . = หาตามclass
const q3 = document.querySelector(".meat")
// console.log(q1);
// console.log(q2);
// console.log(q3);




//Q
//traverse all children nodes of <ul id="appetizer"> by using sibling relationship

      const firstLiElement = document.querySelector("ul#appetizer>li.vegan") //  เลือกElement Id = appetizer (> คือลูก)(li.vegan คือ li ที่มีclass = vegan)
      console.log(firstLiElement)
      
      //visit all nodes siblings under <ul id="appetizer">
      let currentNode = firstLiElement //สร้างตัวแปรเพื่อเอาไปลูป
      while (currentNode != null) { //ถ้า currentNode ยังไม่เท่ากับnull ให้logออกมาแล้ว เปลี่ยนไปลูกคนต่อไป(nextElementSibling)
        console.log(currentNode)
        currentNode = currentNode.nextElementSibling
      }



แปล
const nameAttrElements = document.getElementsByName("fname")//getElementsByName ที่มีชื่อfname
console.log(nameAttrElements) //outputออกตามที่เรืยก

nameAttrElements.forEach((ele) => console.log(ele))

//getElementsByTagName - tag name (HTMLCollection)
const liElements = document.getElementsByTagName("li")
console.log(liElements) //HTMLCollection { 0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat, 6: li.vegan, length: 7 }
//HTMLCollection does not implement forEach, you must convert to array before you use array functions
// liElements.forEach((ele) => console.log(ele)) //error:liElements.forEach is not a function
//using Array.from to convert HTMLCollection to array
const liElementsArray = Array.from(liElements)
liElementsArray.forEach((ele) => console.log(ele))

//getElementsByClassName - class name (HTMLCollection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 }

//Single Node - getElementById, querySelector
//Collection nodes (Array-like (length, index) (NodeList|HTMLCollection)) - querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName
 






//practice 1
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "add") {
        box.classList.add("bordered");
      } 
      else if (button.id === "remove") {
        box.classList.remove("bordered");
      } 
      else if (button.id === "toggle") {
        box.classList.toggle("bordered");
      }
  })
})
 





//practice 2 ที่ผมทำ ผมทำทีละปุ่มแยกกัน
console.log(buttonRed)//เริ่มจากาีแดง
const text = document.getElementById("box")
buttonRed.addEventListener("click", () => {
  box.style.backgroundColor = "Red"
    text.textContent = "Red"
})

const buttonBlue = document.querySelector("button[data-color='blue']")
console.log(buttonBlue)

buttonBlue.addEventListener("click", () => {
  box.style.backgroundColor = "blue"
    text.textContent = "Blue"
})

const buttonGreen = document.querySelector("button[data-color='green']")
console.log(buttonGreen)

buttonGreen.addEventListener("click", () => {
  box.style.backgroundColor = "green"
  text.textContent = "Green"

})




//lesson2_dom-Student
// เพิ่มคำคม
//ui.js
addNewQuote('Stay hungry, stay foolish.', 'Steve Jobs');
addNewQuote('Do or do not. There is no try.', 'Yoda');
addNewQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci');

function renderQuotes() {
  const quoteListDiv = document.getElementById('quote-list');//เข้าถึง id = quote-list ในไฟล์ index
  const quotes = getAllQuotes();
  quotes.forEach(quote => { //วนลูปและสร้าง p ใหม่สำหรับแต่บละ qoute
    const p = document.createElement('p');
    p.textContent = `"${quote.content}" — ${quote.author}`;
    quoteListDiv.appendChild(p);
  });
}
renderQuotes();



