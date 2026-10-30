const makeChange = (c) => {
  // your name here

const amount=parseInt(c,10);
const q=Math.floor(amount/25);
let reminder=amount%25;
const d=Math.floor(reminder/10);
reminder=reminder%10;
const n=Math.floor(reminder/5);
const p=reminder%5;
return{q,d,n,p};

// Do not the change the code below
	if (typeof window === 'undefined' || !window.Cypress) {
const c = prompt("Enter c: ");
		if(c!==null){
alert(JSON.stringify(makeChange(c)));
		}}