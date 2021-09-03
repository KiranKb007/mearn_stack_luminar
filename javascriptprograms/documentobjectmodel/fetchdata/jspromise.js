// var mypro=new Promise((resolve,reject)=>{
//     let attendance=60;
//     if (attendance>50){
//         resolve("you are eligible for certificate")
//     }
//     else{
//         reject("you are not eligible for certificate")
//     }
// })

// mypro.then(res=>console.log(res)).catch(error=>console.log(error));


var mypromise=new Promise((resolve,reject)=>{
    let attending_time=100;
    if (attending_time>100){
        resolve("interesting session")
    }
    else{
        reject("bad session")
    }
})

mypromise.then(res=>console.log(res)).catch(error=>console.log(error))