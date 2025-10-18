//cookie ตามที่ผมเข้าใจคือ เหมือนเวลาเราล็อกอินเว็ปๆนึงแล้วถ้ายังไม่เกินกำหนด
// เวลามันจะยังคงค้างไว้อยู่ เป็นเหมือนข้อมูลชั่วคราวที่ตั้งเวลาไว้ได้


console.log(document.cookie)
document.cookie = `theme=dark;expires=${new Date (2025, 9, 15)}` //เลขเดือนเป็นเลขindex 0-11
console.log(document.cookie)


// document.cookie ="font-size=14px;max-age=60"
// console.log(document.cookie)

// document.cookie = "theme=light"
// document.coookie = "color=warm"
// comsole.log(document.cookie)

console.log(CookieUtil.get("theme"))
console.log(CookieUtil.get("color"))

CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
console.log(CookieUtil.arguments())



let counter = localStorage.getItem("count")  //นับไปเรื่อยๆ
if (counter === null)
    localStorage.setItem("count", 1)
else localStorage.setItem("count", ++counter)
alert(counter)



//practice ในห้อง
document.addEventListener('DOMContentLoaded', () => {
    // เอาค่าที่บันทึกไว้มาจาก localStorage
    const savedBg = localStorage.getItem('bgColor');
    const savedFont = localStorage.getItem('fontColor');
    const savedSize = localStorage.getItem('fontSize');
 
    if (savedBg) {
      document.body.style.backgroundColor = savedBg;
      document.getElementById('bgColor').value = savedBg;
    }
    if (savedFont) {
      document.body.style.color = savedFont;
      document.getElementById('fontColor').value = savedFont;
    }
    if (savedSize) {
      applyFontSize(savedSize);
      document.getElementById('fontSize').value = savedSize;
    }
  });
 
  //ปรับขนาดตัวอักษร
  function applyFontSize(size) {
    if (size === 'small') {
      document.body.style.fontSize = '14px';
    } else if (size === 'medium') {
      document.body.style.fontSize = '18px';
    } else if (size === 'large') {
      document.body.style.fontSize = '24px';
    }
  }
 
  //Save
  document.getElementById('saveBtn').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const fontColor = document.getElementById('fontColor').value;
    const fontSize = document.getElementById('fontSize').value;
 
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('fontColor', fontColor);
    localStorage.setItem('fontSize', fontSize);
 
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    applyFontSize(fontSize);
  });
 
  //Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontColor');
    localStorage.removeItem('fontSize');
 
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.style.fontSize = '';
 
    document.getElementById('bgColor').value = '#ffffff';
    document.getElementById('fontColor').value = '#000000';
    document.getElementById('fontSize').value = 'medium';
  });
 