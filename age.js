/* =====================================
   Naman Tools Age Calculator Pro V3
   Part 1
===================================== */

// Select Elements

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const calculateBtn =
document.getElementById("calculateBtn");

let timer = null;

// Fill Days

for(let i=1;i<=31;i++){

day.innerHTML +=
`<option value="${i}">${i}</option>`;

}

// Fill Months

const months=[

"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"

];

months.forEach((m,index)=>{

month.innerHTML +=
`<option value="${index}">${m}</option>`;

});

// Fill Years

const currentYear =
new Date().getFullYear();

for(let y=currentYear;y>=1900;y--){

year.innerHTML +=
`<option value="${y}">${y}</option>`;

}

// Button Click

calculateBtn.onclick = function(){

if(day.value=="" ||
month.value=="" ||
year.value==""){

alert("Please select your Date of Birth");

return;

}

clearInterval(timer);

// Live Update Every Second

updateAge();

timer = setInterval(updateAge,1000);

};

function updateAge(){

const birthDate = new Date(

year.value,

month.value,

day.value

);

const now = new Date();

const diff = now - birthDate;

const totalSeconds =
Math.floor(diff/1000);

const totalMinutes =
Math.floor(totalSeconds/60);

const totalHours =
Math.floor(totalMinutes/60);

const totalDays =
Math.floor(totalHours/24);

const totalWeeks =
Math.floor(totalDays/7);// Age Calculation

let years =
now.getFullYear() -
birthDate.getFullYear();

let monthsDiff =
now.getMonth() -
birthDate.getMonth();

let daysDiff =
now.getDate() -
birthDate.getDate();

if(daysDiff < 0){

monthsDiff--;

const lastMonth =
new Date(

now.getFullYear(),

now.getMonth(),

0

);

daysDiff +=
lastMonth.getDate();

}

if(monthsDiff < 0){

years--;

monthsDiff += 12;

}

// Live Age Cards

document.getElementById("liveYears").textContent =
years;

document.getElementById("liveMonths").textContent =
monthsDiff;

document.getElementById("liveDays").textContent =
daysDiff;

// Current Time

document.getElementById("liveHours").textContent =
String(now.getHours()).padStart(2,"0");

document.getElementById("liveMinutes").textContent =
String(now.getMinutes()).padStart(2,"0");

document.getElementById("liveSeconds").textContent =
String(now.getSeconds()).padStart(2,"0");

// Detailed Statistics

document.getElementById("totalMonths").textContent =
(years*12)+monthsDiff;

document.getElementById("totalWeeks").textContent =
totalWeeks;

document.getElementById("totalDays").textContent =
totalDays;

document.getElementById("totalHours").textContent =
totalHours;

document.getElementById("totalMinutes").textContent =
totalMinutes;

document.getElementById("totalSeconds").textContent =
totalSeconds;// Birthday Information

const birthDay = birthDate.toLocaleDateString(
"en-US",
{
weekday:"long"
}
);

document.getElementById("birthDay").textContent =
birthDay;

// Leap Year

const birthYear = Number(year.value);

const leap =
(birthYear % 4 === 0 && birthYear % 100 !== 0) ||
(birthYear % 400 === 0);

document.getElementById("leapYear").textContent =
leap ? "Leap Year" : "Normal Year";

// Zodiac Sign

document.getElementById("zodiac").textContent =
getZodiac(
Number(day.value),
Number(month.value)+1
);

// Next Birthday

let nextBirthday = new Date(
now.getFullYear(),
Number(month.value),
Number(day.value)
);

if(nextBirthday < now){

nextBirthday.setFullYear(
now.getFullYear()+1
);

}

const daysLeft = Math.ceil(
(nextBirthday - now) /
(1000*60*60*24)
);

document.getElementById("nextBirthday").textContent =
daysLeft + " Days Left";

} // updateAge() function END

/* ==========================
   Zodiac Function
========================== */

function getZodiac(day,month){

if((month==3&&day>=21)||(month==4&&day<=19)) return "♈ Aries";

if((month==4&&day>=20)||(month==5&&day<=20)) return "♉ Taurus";

if((month==5&&day>=21)||(month==6&&day<=20)) return "♊ Gemini";

if((month==6&&day>=21)||(month==7&&day<=22)) return "♋ Cancer";

if((month==7&&day>=23)||(month==8&&day<=22)) return "♌ Leo";

if((month==8&&day>=23)||(month==9&&day<=22)) return "♍ Virgo";

if((month==9&&day>=23)||(month==10&&day<=22)) return "♎ Libra";

if((month==10&&day>=23)||(month==11&&day<=21)) return "♏ Scorpio";

if((month==11&&day>=22)||(month==12&&day<=21)) return "♐ Sagittarius";

if((month==12&&day>=22)||(month==1&&day<=19)) return "♑ Capricorn";

if((month==1&&day>=20)||(month==2&&day<=18)) return "♒ Aquarius";

return "♓ Pisces";

}/* =====================================
   Part 4D
   Share + PDF + Validation
===================================== */

// Share Result

const shareBtn = document.getElementById("shareBtn");

if(shareBtn){

shareBtn.addEventListener("click", async()=>{

const text=`🎂 My Age

${document.getElementById("liveYears").textContent} Years
${document.getElementById("liveMonths").textContent} Months
${document.getElementById("liveDays").textContent} Days

Generated by Naman Tools`;

if(navigator.share){

try{

await navigator.share({

title:"Age Calculator Pro",

text:text

});

}catch(e){}

}else{

navigator.clipboard.writeText(text);

alert("Age copied successfully.");

}

});

}


// Download PDF

const pdfBtn=document.getElementById("pdfBtn");

if(pdfBtn){

pdfBtn.addEventListener("click",()=>{

window.print();

});

}


console.log("Age Calculator Pro Loaded Successfully");