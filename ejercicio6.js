let n=parseInt(prompt('ingrese numero'));


r= n%10;
n=(Math.trunc(n/10));
ni=r*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;

ni= ni+n


alert(ni);  