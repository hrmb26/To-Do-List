let i = 0;
let listElements = document.getElementsByTagName('LI');
let close = document.getElementsByClassName('close');

// hace todas las clases 'close' cerrar el elemento padre
for (i = 0; i < listElements.length; i++) {
	close[i].onclick = function() {
		let div = this.parentElement;
		div.remove();
	};
}

function addItem() {
	let value = document.getElementById('textbox_id').value;
	if (value == '') {
		alert('Empty field');
	} else {
		let node = document.createElement('LI');
		let textnode = document.createTextNode(value);
		let closeButton = document.createElement('span');
		let text = document.createTextNode('x');
		node.appendChild(textnode);
		node.appendChild(closeButton);
		closeButton.appendChild(text);
		closeButton.className = 'close';
		document.getElementById('todo_list').appendChild(node);
		document.getElementById('textbox_id').value = '';
	}
	for (i = 0; i < listElements.length; i++) {
		close[i].onclick = function() {
			let div = this.parentElement;
			div.remove();
		};
	}
}
