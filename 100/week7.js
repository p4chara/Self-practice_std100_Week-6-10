const html1 = document.documentElement //html1 จะเป็นelementทั้งหมด
const firstNode = document.firstChild // ตัวแรกของ document
const firstElementChildNode = document.firstElementChild //element ตัวแรกของ document
const lastNode = document.lastChild //document ตัวสุดท้าย
const lastElementChildNode = document.lastElementChild //element ตัวสุดท้ายของ document

console.log(html1)
console.log(firstNode)
console.log(firstElementChildNode)
console.log(lastNode)
console.log(lastElementChildNode)

console.log(document.body.nodeType === Node.ELEMENT_NODE) //ตรวจสอบว่า body เป็น node ประเภท elementหรือเปล่า


//เป็นการดึง element ที่มี id = "exampleElement"
const divElement = document.getElementById("exampleElement")
const divChildNodes = divElement.childNodes //return NodeList data type
console.log(`length: ${divElement.childNodes.length}`)
divChildNodes.forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
//div children
const divChildren = divElement.children //return HTMLCollection data type
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
 
//การสร้าง new element หลังจากที่สร้าง page ไปแล้ว
const pE = document.createElement("p") //สร้าง element ใหม่ขึ้นมา
const divE= document.getElementById('subject')//เราไปดึง div ที่มีId subject มา
divE.append(pE)//ยัด pE เข้าไปใน div(id = subject)



//อาจารย์ให้ทำในห้อง
//1
const getMenu = document.getElementById("drink")
const alldrink = getMenu.children
Array.from(alldrink).forEach((drink) => console.log(drink))


//2 อันนี้ทำในกรณีที่เรานั้นรู้ลำดับว่าอะไรอยู่ตรงไหน
const coffee = getMenu.firstElementChild
// console.log(firstChildNode) //coffeee

const tea = coffee.nextElementSibling
//console.log(tea)

const preVE = tea.previousElementSibling
//console.log(preVE)
const nextE = tea.nextElementSibling
//console.log(nextE)
const prr = tea.parentElement
//console.log(prr)





