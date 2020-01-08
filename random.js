function fetchRandomNumbers() {
  console.log('Fetching number...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log('Received random number:', randomNum);
      resolve(randomNum);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}

function fetchRandomString() {
  console.log("Fetching string...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log("Received random string:", result);
      resolve(result)
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}

fetchRandomNumbers((randomNum) => console.log(randomNum))
fetchRandomString((randomStr) => console.log(randomStr))


async function two() {
  let a,b,c,d;
   a= await fetchRandomNumbers().then(data => {return data})
    b= await fetchRandomNumbers().then(data =>{return data})
    console.log('Sum of two numbers:',a+b)

    c= await fetchRandomNumbers().then(data => {return data})
    d= await fetchRandomString().then(data =>{return data})
    console.log('string:',d+c)
}
two()

async function three() {
let number=0
let total=0
for (let i=0;i<10;i++){
  // console.log(i)
  number=await fetchRandomNumbers().then(data => {return data})
  total= total+number
  // console.log(total)
}
console.log('final',total)
}
three()
