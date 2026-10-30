const makeChange = (c) => {
  // your name here
	const amount=parseInt(c,10);
const q=amount/25;
let reminder=amount%25;
const d=reminder/10;
reminder=reminder%10;
const n=reminder/5;
const p=reminder%5;
return{q,d,n,p};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
