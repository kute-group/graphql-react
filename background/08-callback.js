function event1(){
	setTimeout(() => {
		return 1000;
	}, 10000);
	return 1000;
}

const e1= event1();
console.log('e1', e1);