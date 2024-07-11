function fun(){
    document.getElementById("button").style.display="block";
}
setTimeout(fun, 3000);

var i=0;
function buttonAnimation(){
    i++;
    if(i%2==0){
        console.log(`${i} is Even`);
        document.getElementById("button").style.animation="none";
    }
    else{
        console.log(`${i} is Odd`);
        document.getElementById("button").style.animation="buttonAnimation 0.5s infinite";
    }
    
}
setTimeout(buttonAnimation, 5000);


var num=0;
function container(){
    num++;
    if(num%2==0){
        document.getElementById("container").style.display="none";
        setTimeout(buttonAnimation, 100);
    }
    else{
        document.getElementById("container").style.bottom="30%";
        document.getElementById("container").style.display="flex";
        setTimeout(buttonAnimation, 100);
    }
}