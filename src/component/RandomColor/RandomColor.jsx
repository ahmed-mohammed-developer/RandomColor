import React from 'react'; // استيراد مكتبة React
import Title from '../Title'; // استيراد مكون Title من ملف آخر

// مكون RandomColor لتغيير ألوان الخلفية عند النقر على الأزرار
export default function RandomColor() {

  // دالة handleClick لتغيير لون الخلفية ولون الزر الذي تم النقر عليه
  function handleClick(e) {
    console.log(getRandomColo()); // طباعة اللون العشوائي في الكونسول
    let body = document.querySelector("body"); // الحصول على عنصر الجسم في الصفحة
    body.style.background = getRandomColo(); // تعيين لون الخلفية للجسم بلون عشوائي
    e.target.style.background = getRandomColo(); // تعيين لون خلفية الزر الذي تم النقر عليه بلون عشوائي
  }

  // دالة getRandomColo لتوليد لون عشوائي
  function getRandomColo() {
    let letters = '0123456789ABCDEF'; // حروف وأرقام اللون الست عشري
    let color = "#"; // بداية الكود اللوني
    for (let i = 0; i < 6; i++) { // تكرار 6 مرات لتكوين اللون
      color += letters[Math.floor(Math.random() * 16)]; // إضافة حرف أو رقم عشوائي للون
    }
    return color; // إرجاع اللون العشوائي
  }

  return (
    <div className='container text-center'> {/* تحديد تنسيق العنصر */}
      <Title text={"Random Color"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
      
      {/* أزرار تغيير الألوان */}
      <button className='btn btn-danger mb-5' onClick={handleClick}>Click me</button>
      <button className='btn btn-success ms-3 mb-5' onClick={handleClick}>Click me</button>
      <button className='btn btn-primary ms-3 mb-5' onClick={handleClick}>Click me</button>
      <button className='btn btn-warning ms-3 mb-5' onClick={handleClick}>Click me</button>
    </div>
  );
}
