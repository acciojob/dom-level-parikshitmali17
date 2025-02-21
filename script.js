//your JS code here. If required.

function f(level) {
	let element=document.getElementByid("#level")
let level=0;
if(element){
	level++;
	element= element.parentElement;
}else if(element.nodeName=="html"){
	return
}
	return level
}
//const parentName=document.querySelector("#level").parentElement.nodeName;

 alert(`The level of the element is:${level} `);