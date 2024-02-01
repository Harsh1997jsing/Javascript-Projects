const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215)
    console.log(randomNumber)
    const randomCode = "#"+randomNumber.toString(16);
    console.log(randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerHTML = randomCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor()