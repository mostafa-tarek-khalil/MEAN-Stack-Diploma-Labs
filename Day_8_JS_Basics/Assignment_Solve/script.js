




let arr = ["Mostafa", "Ahmed", "Mohamed", "Ali", "Tarek", "Mona", "Sameh", "Omar", "Mina", "Karam"];
console.log(arr[Math.round(Math.random() * 10)]);








// let email = prompt('Enter your email');
// if (email != null) {
//     if (email == '') {
//         alert('Please Enter Data');
//     }
//     else {
//         if (isNaN(email)) {
//             let idx = email.indexOf('@');
//             if (idx < 3 || idx == email.length -1 || idx == -1) {
//                 alert("Invalid Data");
//             }
//             else {
//                 alert("Hello");
//             }
//         }
//         else {
//             alert("Enter Valid Data");
//         }
//     }
// }







// let grads = [60, 100,10,15,85];

// grads.sort(function(a,b)
// {
//     return b-a
// })
// console.log(grads);

// console.log(grads.find(function(el)
// {
//     return el<=100
// }))

// console.log(grads.filter(function(el){
//     return el<60
// }))








// const stds = [
//     { name: "Mohamed", degree: 50 },
//     { name: "Ahmed", degree: 25 },
//     { name: "Mostafa", degree: 75 },
//     { name: "Sara", degree: 95 },
//     { name: "Mona", degree: 100 }
// ];


// var std = stds.find(function(a)
// {
//     if((a.degree>90 && a.degree<100))
//     { 
//         return a
//     }
// });
// console.log(std.name)



// var fstds = stds.filter(function(a)
// {
//     if((a.degree<60))
//     { 
//        return true
//     }
// })

// for (const el of fstds) {
//      console.log(el.name);
// }




// stds.push({ name: "Ibrahim", degree: 60 });
// for (let key in stds) {
//     console.log(stds[key]);
// }





// stds.pop();
// for (let el of stds) {
//     console.log(el);
// }




// stds.sort(function(a, b) {
//     var A = a.name.toUpperCase();
//     var B = b.name.toUpperCase();
//     return (A<B)?-1:(A>B)?1:0;
// });
// console.log(stds);



// for (let el of stds) {
//     console.log(el);
// }

// console.log(' ');
// stds.splice(2,0,{ name: "sameh", degree: 99 },{ name: "Mina", degree: 10 });
// for (let el of stds) {
//     console.log(el);
// }
// console.log(' ');

// stds.splice(3,1);
// for (let el of stds) {
//     console.log(el);
// }