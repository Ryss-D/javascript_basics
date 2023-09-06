// funciton destructuring
fucntion storeOrder(order){
	localStorage.setItem('id', order.id);
	localStorage.setItem('currency', order.currency);
}
//this is an equivalent and more elegant way to get job done
function storeOrder({id, currency}){
	localStorage.setItem('id', id);
	localStorage.setItem('currency', currency);
}

// object destructuring
const {name: userName, age} = {
	name:"max",
	age: 35,
};
// for destructuring onjects we have eto user the same name to variable as to property but we can create alias ieg userName

//destructuring list (arrays)
const [name, age] = ['max', 45];
