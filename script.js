//your JS code here. If required.


	let element=document.getElementById("level")
let level=0;
while(element){
	level++;
	element= element.parentElement;
}
//const parentName=document.querySelector("#level").parentElement.nodeName;
 alert(`The level of the element is:${level}`);