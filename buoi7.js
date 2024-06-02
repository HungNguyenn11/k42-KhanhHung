// bai tap dieu kien 2
//bai3
const BMI = 50.0;
if(BMI <= 18.5){
console.log('underweight');
} else if (BMI < 25.0){
    console.log('normal');
} else if (BMI < 30.0){
console.log('overweight');
} else {
    console.log('obese');
}
//bai4
function checkmonth() {
    const thang = document.getElementById('month').Value;
    switch(thang){
        case 1:
            console.log('thang co 31 ngay');
            break;
        case 2:
            console.log('thang co 28 ngay');
            break;
        case 3:
            console.log('thang co 31 ngay');
            break;
        case 4:
            console.log('thang co 30 ngay');
            break;
        case 5:
            console.log('thang co 31 ngay');
            break;
        case 6:
            console.log('thang co 30 ngay');
            break;
        case 7:
            console.log('thang co 31 ngay');
            break;
        case 8:
            console.log('thang co 30 ngay');
            break;
        case 9:
            console.log('thang co 31 ngay');
            break;
        case 10:
            console.log('thang co 30 ngay');
            break;
        case 11:
            console.log('thang co 31 ngay');
            break;
        case 12:
            console.log('thang co 30 ngay');
            break;
        default:
            console.log('thang nay khong ton tai');
    }
    document,getElementById('ketqua').innerText = month;
}

//bai5
const a = 6;
if(a < 5){
console.log('a nho hon 5');
} else {
    console.log('a lon hon 5');
}

