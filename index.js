// var percentage = prompt("Enter your percentage")
// if(percentage>=50){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }



// var percentage = prompt("Enter your percentage")
// if(percentage>=80){
//     console.log("A+")
// }else if (percentage>=70 && percentage<80){
//     console.log("A")
// }else if (percentage>=60 && percentage<70){
//     console.log("B")
// }else if (percentage>=50 && percentage<50){
//     console.log("B")
// }else {
//     console.log("Fail")
// }
// alert(percentage)



// var hour = prompt('Enter your present time')
// if(hour >=6 && hour >12){
//     console.log('Good morning');
// }else if(hour>=12 && hour >18){
//     console.log('Good Afternoon');
// }else{
//     console.log('Good evening')
// }
// alert(hour)



// var engMarks = +prompt('Enter your English Marks')
// var mathsMarks = +prompt('Enter your Mahs Marks')
// var urduMarks = +prompt('Enter your Urdu Marks')

// var obtMarks = engMarks+mathsMarks+urduMarks

// var percentage = (obtMarks*100)/300

// var grade;
// if(percentage>=80){
//     grade="A+";
// }else if(percentage>=70 && percentage>80){
//     grade="A";
// }else if(percentage>=60 && percentage<70){
//     grade="B";
// }else if(percentage>=50 && percentage<60){
//     grade="B";
// }else{
//     grade="F"
// }

// document.getElementById(mathsMarks).innerHTML=mathsMarks;
// document.getElementById(engMarks).innerHTML=engMarks;
// document.getElementById(urduMarks).innerHTML=urduMarks;
// document.getElementById(obtMarks).innerHTML=obtMarks;
// document.getElementById(percentage).innerHTML=percentage;
// document.getElementById(grade).innerHTML=grade;


// var userName=prompt('enter your name')
// var a=userName[0]

// for(var i=0; i<userName.length; i++){
//     if(userName[i]===' '){
// var b=userName[i+1]
// }
// var c = a+b
// }
// console.log(c)



// var numbers=[1,2,3,4,5,6,7,8,9,10]

// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]===10){
//         console.log('max numbser is 10-->' , 10)
//     }
// }

// var userName ="bilal raza"

// // console.log(userName.slice(0,6))
// for(var i=0; i<userName.length; i++){
//     console.log(userName.slice(0,9))
// }



// Date Method


// var todayDate = new Date();
// console.log(todayDate)

// var mm = todayDate.getDate()
// console.log(mm)

// var dd = todayDate.getDay()
// console.log(dd)

// var yy = todayDate.getFullYear()
// console.log(yy)


// if(dd<10){
//     dd= '0'+dd
// }
// if(mm<10){
//     mm='0'+mm
// }

// todayDate = mm+'-'+dd+'-'+yy 
// console.log(todayDate)

// todayDate = mm+'/'+dd+'/'+yy 
// console.log(todayDate)



// Area of triangle


// var a = 5
// var b = 6
// var c = 7


// var s = (a+b+c)/2

// var areaOfTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(areaOfTriangle)

// function table(number){
//  for (let i = 1; i <= 10; i++) {
//     var result = i * number
//     console.log(`${number} x ${i}= ${result}`);
    
//  }
// }

// table(6)



// var getTable = +prompt('Enter your desire number')

// for(var i=1; i<=10; i++){
//     var res = getTable * i
//     console.log(`${getTable} x ${i} = ${res}`)
// }


// var reqTable = +prompt('Enter your desire number')

// for(var i=1; i<=10; i++){
//     var getResult = reqTable*i;
//     document.write(`${reqTable} x ${i} = ${getResult} </br>`)
// }


// var pattern = "*"

// for(var i=1; i<=10; i++){
//     for(var j=1; j<=i; j++){
//         document.write(pattern)
//     }
//     document.write('</br>')
// }
// for(var i=10; i>=1; i--){
//     for(var j=1; j<=i; j++){
//         document.write(pattern)
//     }
//     document.write('</br>')
// }



// var num1 =1;
// var num2 = 4;

// var updatedNum = ++num1 + num2++ + ++num2 + num1++ + ++num1;
// //                2         4        6       2         4

// console.log(updatedNum)



// var num1 = +prompt('Enter 1st Number')
// var operator = prompt('Enter your desire operator')
// var num2 = +prompt('Enter 2nd Number')

// var result;

// if(operator === '+'){
//     result = num1+num2;
// } 
// if(operator ==='-'){
//     result = num1-num2;
// }
// if(operator === '*'){
//     result = num1*num2;
// }
// if(operator === '/'){
//     result = num1/num2
// }
// alert(result)

//Table

// for (let i = 1; i <= 10 ; i++) {
//     console.log("2 x " + i  + '='  + 2 *i )
// }



// var arr = ['ali','zeeshan', 'haider'].




// var userName = prompt('Enter user name')

// var userName = 'ali'
// for(var i=0; i<arr.length; i++){
//     if(arr[i] === userName ){
//         console.log('matched')
//     }
// }


// if(arr.slice(0,1)=== userName){
// console.log('matched');
// }

// if(arr[0]===userName ||arr[1]===userName ||arr[2]===userName ){
//     console.log('Matched')
// }

// arr.push('ahmed')
// arr.pop()
// arr.shift()
// arr.unshift('azeem')
// console.log(arr);



// var array = ['ali', 'ahmed', 'azeem'];
// array.splice(1,0,'bilal');
// console.log(array);


// var tableNumber = +prompt('Enter number');
// var limit = +prompt('Enter validation');

// for(var i=1; i<=limit; i++){
//     console.log(tableNumber + '*' + i + '=' + tableNumber*i ) ;
// }

for(var i=1; i<=9; i++){
    for(var j=1; j<=i; j++){
        document.write('*' + ' ')
        
    }    
    document.write('<center>')
    document.write('<br>')

}

var paramid = "*"

for(var i=5; i>=1; i--){
    for(var j=1; j<=i; j++){
        document.write(paramid)

    }
    document.write('<br>')
    document.write('<center>')

}





var pattern = "*"

for(var i=1; i<=10; i++){
    for(var j=1; j<=i; j++){
        document.write(pattern)
    }
    document.write('</br>')
}
for(var i=10; i>=1; i--){
    for(var j=1; j<=i; j++){
        document.write(pattern)
    }
    document.write('</br>')
// document.write('<center>')

}

var num = 1;
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        document.write(num)
        num++
    }
    document.write('<br>')

}