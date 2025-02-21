//your JS code here. If required.

let element=document.getElementByid("#level")
let level=0;
if(element){
	level++;
	element= element.parentElement;
}else if(element.nodeName=="html"){
	return
}
//const parentName=document.querySelector("#level").parentElement.nodeName;

 alert(`The level of the element is:${level} `);