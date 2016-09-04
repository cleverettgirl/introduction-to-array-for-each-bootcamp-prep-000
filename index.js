var evens = [0,2,4,6,8,10];

evens.forEach(even =>{
	console.log(`${even} is not odd!`);
});

evens.foreach((even, index,array) =>
	debugger
	console.log(even + " is not odd!");
)

function square(n){
	console.log(n*n);
}

function doEvens(callback){
	evens.forEach(callback);
}

function doToElementsInArray(array,callback){
	array.forEach(callback)
}

function changeCompletely(element,index,array){
	array[index] = (Math.random() * 100).toString() + "!!!";l
}

var animals = ['dog','cat', 'fish'];

doToElementsInArray(animals, changeCompletely);

console.log(animals)
