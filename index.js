let time=document.getElementById("time")
let btn=document.getElementById("btn")
let _24hr=false

let toggleFunc=(toggleVar)=>{
    _24hr=!toggleVar
}

let timeFunc=() => {
    let timeStr=new Date
    timeStr=timeStr.toString()
    timeStr=timeStr.split(" ")
    timeStr=timeStr[4]
    let HrMnSc=timeStr.split(":")
    hr=HrMnSc[0]
    if(_24hr){
        let temp=HrMnSc
        temp=temp.join(" : ")
        time.innerHTML=temp
    }else{
        if(hr==="12"){
            time.innerHTML=timeStr+" PM"
        }else if(hr>"12"){
            hr=Number(hr)-12
            if(hr<10){
                hr="0" + hr.toString()
            }
            
            time.innerHTML=hr+":"+HrMnSc[1]+":"+HrMnSc[2]+" PM"
        }else if(hr==="00"){
            time.innerHTML="12"+":"+HrMnSc[1]+":"+HrMnSc[2]+" AM"
        }else{
            time.innerHTML=timeStr+" AM"
        }
    }
}

btn.addEventListener("click",()=>{return toggleFunc(_24hr)});

setInterval(timeFunc, 1000)

