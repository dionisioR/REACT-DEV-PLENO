const fs = require("fs");
console.log(1);
// fs.readFile("./in1.txt", (err, contents) => {
//   fs.readFile("./in2.txt", (err2, contents2) => {
//     console.log(err, String(contents));
//     console.log(err2, String(contents2));
//   });
// });

// Promisses
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

// readFile("./in1.txt")
// .then((contents) => {
//   console.log(String(contents));
//   return readFile("./in2.txt");
// })
// .then((contents) => {
//   console.log(String(contents));
// })


// async - await - açucar sintático em cima da promisse
const init = async() => {
    try {
        const contents = await readFile('./in1.txt')
        const contents2 = await readFile('./in2.txt')
        // const contents22 = await readFile('./in22.txt')
        // console.log(String(contents))
        // console.log(String(contents2))
        // console.log(String(contents22))
        return String(contents) + '\n' + String(contents2)
    }
    catch (err) {
        // console.error(err)
        console.log('Ops!!! Algo deu errado!!!')
    }
}
// console.log('init', init())
init().then((contents) => {
    console.log(contents)
})

console.log(2);
console.log(3);
