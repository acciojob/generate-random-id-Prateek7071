function makeid(l) {
  // write your code here
	const numList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let res = ""
	for(let i = 0;i<l;i++){
		res+=numList.charAt((Math.floor(Math.random()*62)))
	}
	return res
}

// Do not change the code below.
//const l = prompt("Enter a number.");
//alert(makeid(l));
