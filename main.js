let input = document.getElementById('date');
let xx, yy, mm, dd, year;
let a, b, c, d, e;
let btn = document.getElementById('calc');
let day = document.getElementById('day');
day.setAttribute('readonly',true)
const doomsSiecles = {
    15: 3,
    16: 2,
    17: 0,
    18: 5
}
const siecleFind = (siecle) => {
    let temp = siecle - 15;

    switch (temp % 4) {
        case 0:
            return 3

        case 1:
            return 2;
        case 2:
            return 0;
        default:
            return 5;
    }

}
const doomsDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
const doomsMonthNormal =
{
    'January': 3,
    'February': 28,
    'March': 14,
    'April': 4,
    'May': 9,
    'June': 6,
    'Jully': 11,
    'August': 8,
    'September': 5,
    'October': 10,
    'November': 7,
    'December': 12
}
const doomsMonthBisextile =
{
    'January': 4,
    'February': 29,
    'March': 14,
    'April': 4,
    'May': 9,
    'June': 6,
    'Jully': 11,
    'August': 8,
    'September': 5,
    'October': 10,
    'November': 7,
    'December': 12
}
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jully',
    'August',
    'September',
    'October',
    'November',
    'December'];


btn.onclick = () => {
    
  // the year format is xxyy

    
    let date = input.value;
    console.log(`date is ${date}`);
    
    mm = mmFromDate(date);
    dd = ddFromDate(date);

    
    
    

    year = yearFromDate(date);
    xx = xxFromYear(year);
    yy = yyFromYear(year);

    
    
    
    a = Math.floor(yy/12);
    b = yy % 12 ;
    c = Math.floor(b/4);
    d = siecleFind(xx);
    e = (a + b + c + d ) % 7;
    
    console.log(`doomdays of this year is ${doomsDay[e]}`);
    
    let month = months[Number(mm-1)];
    let valByMonth;
    if(bisextile(year) )
    {
        console.log(`${year} is bissextile`);
        
        valByMonth = doomsMonthBisextile[month]
       // console.log(`val is ${valByMonth}`);
        

    }
    else
    {
        console.log(`${year} isn't bissextile`);
        valByMonth = doomsMonthNormal[month]
        //console.log(`val is ${valByMonth}`);

    }
    
   // console.log(`d: ${d} e: ${e} dd: ${dd}`);
   // console.log(`valbyMonth found: ${valByMonth}`);
    let finalDay = (dd - valByMonth) % 7
   // console.log(`final day found: ${finalDay}`);
    
   let txt = 'Your day is ' ;
   let val;
   let idx = (e + finalDay)%7;
   //console.log('idx is',idx);
   
   
    val = doomsDay[idx];
   
    day.value =  txt + val;
   // console.log(day.value);
    
    // console.log(`date is: ${date}`);

    //console.log(yyFromYear(yearFromDate(date)));
}
const yearFromDate = (date) => date.substring(0, 4)
const mmFromDate = (date) => date.substring(5, 7)
const ddFromDate = (date) => date.substring(8, 10)
const xxFromYear = (year) => year.substring(0, 2)
const yyFromYear = (year) => year.substring(2, 4)
const bisextile = (year) =>  (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
