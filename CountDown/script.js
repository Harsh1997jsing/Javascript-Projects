const end = document.getElementById("end-date")
end.innerHTML = "01 february 2024 08:00:00 PM"

const inputs = document.querySelectorAll("input")
console.log(inputs)

const clock = () => {
    const end1 = new Date(end.innerHTML);
    const now = new Date()
    const diff = (end1 - now)/1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff/ 3600 /24);
    
    inputs[1].value = Math.floor(diff / 3600 ) % 24;
    
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(
    () => {
        clock()
    },1000
)