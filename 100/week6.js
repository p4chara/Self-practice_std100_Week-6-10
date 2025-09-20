// immutability คือ function จะไม่แก้ไขdataเดิม แต่มันจะสร้าง new array ขึ้นมา(คือถ้ามีการเปลี่ยนแปลง return มันจะสร้างตัวแปรใหม่ 
// เผื่อป้องกันเวลาคนนอกมาใช้งานแล้วเปลี่ยนแปลง function)

//Pure Functions จะไม่เรียกตัวแปรอื่นนอก function
const pureFunc = (a,b) => a*b; //local vailable คือตัวแปรที่ทำงานแค่ในฟังชั่น ใช้เสร็จแล้วทิ้ง



// higher order function คือฟังชั่นที่ return or รับ parameter เป็น function


// impure function
const data = { value: 10 }

function impureFunc2(arg) { 
    let z = 2
    arg.value = arg.value * z + 1 //ที่เป็นอิมเพียวเพราะ ตอนlogออกมาผใใส่ data ทั้งอันหมายถึงทั้ง obj แล้วการส่ง obj มันจะส่งเรฟไปใช้ในfunction 
}                                  //ทำให้พอจบfunction ระดับ global มันจะเปลี่ยนไปด้วย
    return arg.value

console.log(impureFunc2(data)) // 21
console.log(impureFunc2(data)) // 43




//function ซับซ้อน
let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable 
  let mid = 40
  let final = 30
  function doSomething() { //dosomething สามารถเรียกได้ทุกตัว บนพ่อมัน แล้วก็ได้ทุกตัวที่พ่อเรียกได้
    console.log(`dosomething: ${y + sum + x + mid + final}`)
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  return mid + final + x + y + sum
}
const score = getScore(1)
console.log(score)
console.log(x, mid, final) //cannot access 





//closures
const z =1
function makeAdder(x){
    console.log(x)
    // console.log(y) เรียกระดับล่างลงไปไม่ได้ 
    console.log(z)  // แต่กลับกันเรียกข้างบนเหนือหัวได้
    function doS(y){
        return x + y + z
    }
}



// doSomething return เป็นfunction
// doSomething() returnเป็นผลของfunction 


 //การ return ถ้าหลาย function มันจะส่งเป้น obj ถ้าชื่อเดียวกันก็ยุบได้เลย แต่ถ้าไม่ก้ใส่ .<porperty>




 //practice1
function idGenerator(){
    let x = 0 // x อยู่นอก function ลูกทำให้ค่า x ที่เปลี่ยนไปจะยังอยู่เหมือนเดิม เลขเลยเพิ่มขึ้นเรื่อยๆ ถ้าใช้function idGen เรื่อยๆ
    function count(){
        let y = 0 // y คือ local vailable ทำให้ พอจบ function y จะกลับมาเป็น 0
        return ++x , ++y
    }
    return count
}




 const idGen = idGenerator()
console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3
console.log(idGen()) // 4





//practice2 
function outerF(a){
    function innerF(b){
        return a+b
    }
    return innerF
}

const Adda = outerF(5) //เราให้ const Adda เป็น func ที่ส่ง5ไปด้วย แต่มันจะreturn function innerF 
console.log(Adda(3)) //แล้วพอเราlog Adda(3)เข้าไปมันเลยเอา5กับ3มาบวกกันครับ




//function จากmini project (ผมทำ3 function)

const quotes = [] //อันนี้ข้อ1 สร้าง array เปล่าขึ้นมาครับ


let quote = {id:'1',content:'mama',author:'Guy'} //ข้อ2 อันนี้เป็นตัวแปรของค่าที่เราจะใส่
function addQuote(q) { 
    return quotes.push(q)// รับparameter มาแล้ว push เข้าไปใน array(qoutes) 
}


function deleteQuote(id) {
  quotes.filter((d) => d.id != id)//อันนี้filter ค่า id ที่ตรงกับ parameter ที่รับมา
  return quotes 
}