// صفحه لاگین
let password = "800829";
let userPassword = prompt("لطفا رمز عبور را وارد کنید:");

while (userPassword !== password) {
    alert("رمز اشتباه است، دوباره امتحان کن!");
    userPassword = prompt("لطفا رمز عبور را وارد کنید:");
}

alert("سلامممم به پکیج سوالات محدثه شناسی خوش اومدی :) \n لطفا به سوالات فقط جواب \"بله\" یا \"خیر\" دهید !");

let allQuestions = [
   {id: 1, title: "آیا منو دوست داری؟", answer: "بله"},
   {id: 2, title: "آیا حاضری اگه من بهت بگم کل وقتتو برای من بزار، بزاری؟", answer: "بله"},
   {id: 3, title: "آیا اگه همین الان یجا گیر کرده باشم ، حاضری بهم پول قرض بدی؟", answer: "بله"},
   {id: 4, title: "آیا به من اعتماد 100 درصدی داری؟", answer: "بله"},
   {id: 5, title: "آیا اگه یروزی خواستی یه چیزی رو بعنوان راز بهم بگی به من اعتماد میکنی؟", answer: "بله"},
   {id: 6, title: "آیا اگه خواستی یچیزی رو پیش من به امانت بزاری ، اعتماد میکنی؟", answer: "بله"},
   {id: 7, title: "آیا اگه یجایی گیر کرده باشم که بگم باید بیای پیش من ، میای؟", answer: "بله"},
   {id: 8, title: "آیا اگه بین و منو خواهر یا برادرت بحثی پیش بیاد 100 درصدی منو انتخاب میکنی؟", answer: "بله"},
   {id: 9, title: "اگه الان بهت بگم بین منو کوثر یکی رو انتخاب کن کی رو انتخاب میکنی؟(فقط اسم بگو)", answer: "احمدرضا, احمدر رضا"},
   {id: 10, title: "و اینو بگم که تو اصلا تاکسیک و مغرور نیستی و بی جنبه هم نیستی عزیز دلم ، آیا با حرفم موافقی؟(آره یا نه)", answer: "بله"},
   {id: 11, title: "و در آخر، میشه قهر نباشی و باهام آشتی کنی؟توروخدااا!(بله یا خیر)", answer: "بله"},
];

let score = 0;
let questionAnswer = "";

allQuestions.forEach(function(question) {
   questionAnswer = prompt(question.id + "_" + " " + question.title);
   
   if (questionAnswer === question.answer) {
      score++;
   } else if (questionAnswer === "") {
      alert("یره جای خالی رو پر کن خالی نزار :(");
   } else if (questionAnswer === "کوثر") {
      alert("برو پیش همون با همون باش پس :(");
   } else if (questionAnswer === "خیر") {
      alert("ای خدااااااا اذیتم نکن دیگه منکه این همه برای این سوالات کد نویسی کردم:(");
   } else if (questionAnswer === "آره" || questionAnswer === "اره") {
      alert("حلعه چشاته محدثه منننن:)");
   } else if (questionAnswer === "نه") {
      alert("عجباااااا ! خود زنی میکنی؟");
   }
});

alert("جمع امتیازات : " + score);

if (score < 5) {
   alert("تو اصلا منو دوست نداری و به من اهمیت نمیدی، ولی بدون که تو هدیه خدا به منی:(");
} else if (score === 5) {
   alert("همجین زیادی هم منو دوست نداری و بهم اهمیت نمیدی، ولی خببب... بدون که تو هدیه خدایی به من");
} else {
   alert("نههههه باریکلااا، معلوم میشه که یه چیزای بین منو تو هست که اینطوری جواب دادی، ولی بدون که تو هدیه خدا به من، کی بیایم خواستگاری؟ :)");
}

alert("و در آخر اگر انتقادی و پیشنهادی و حالا هر چیزی دیگری به طراح این سوالات داشتید به شماره : 09308635755 تماس بگیرید، با سپاس!")
