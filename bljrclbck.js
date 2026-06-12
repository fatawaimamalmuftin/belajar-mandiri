async function getPromise(cb) {
    let res = await fetch(
      "https://raw.githubusercontent.com/fatawaimamalmuftin/db.Weekly1/main/db.json",
    );
    const data
    cb(data = await res.json());
    return;
}
getPromise((hasil)=>{
console.log(hasil);
});

// async function init() {
//   const data = await getPromise();

//   console.log(data);
// }
// init();


// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");


// function hitung (a,b,cb){
//     cb(a,b)
// }

// hitung(5,3,(x,y)=>{
//     console.log(x+y)
// })





// function test(cb){
//     cb()
// }

// test(()=>{
//     console.log("belajar callback")
// })
