let c=parseInt(prompt('ingrese capital'));
let r=parseInt(prompt('Tasa de interes'));
let t=parseInt(prompt('tiempo'));


x=(1+r/100);
m= Math.pow(x,t)*c; 

i=(m-c);


alert(m);
alert (i);
