let hrs = document.getElementById("hrs")
let mnt = document.getElementById("mnt")
let scd = document.getElementById("scd")
 setInterval(()=>{
    let hours = new Date();
hrs.innerHTML = hours.getHours()
mnt.innerHTML = hours.getMinutes()
scd.innerHTML = hours.getSeconds()

 },1000)



