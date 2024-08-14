function read(){
    const data=document.getElementById("in").value
    var op;
    var b;
    const data1=data.split("");
    data1.forEach((element,i) => 
        {
        if((element!=0)&(element!=1)&(element!=2)&(element!=3)&(element!=4)&(element!=5)&(element!=6)&(element!=7)&(element!=8)&(element!=9))
           { 
            b=element;
            op=i;
            console.log(b);
            console.log(op);
        }
        
    });
    var a= data.slice(0,op)
    let val1=parseInt(a)
    console.log("a=",a);
    var c=data.slice((op+1),data.length)
    let val2=parseInt(c)
    console.log("c=",c);

    switch(b){
        case "+":
        document.getElementById("ans").innerHTML=val1+val2;
        break;
        case "-":
        document.getElementById("ans").innerHTML=val1-val2;
        break;
        case "*":
        document.getElementById("ans").innerHTML=val1 * val2;
        break;
        case "/":
        document.getElementById("ans").innerHTML=val1 / val2;
        break;
        case "%":
        document.getElementById("ans").innerHTML=val1 % val2;
        break;

    }
}
