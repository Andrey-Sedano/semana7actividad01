let t=parseInt(prompt('digite el tiempo'));

hora=3600;
minuto=60;

let h=Math.trunc(t/hora);
t=(t%hora);
let m=Math.trunc(t/minuto);
let s=Math.trunc(t%minuto);

alert("tiempo en horas:"+h);
alert("tiempo en minutos:"+m);
alert("tiempo en segundos:"+s);
