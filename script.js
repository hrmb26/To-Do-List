let i = 0;
let listElements = document.getElementsByTagName('LI');
let close = document.getElementsByClassName('close');

//permite eliminar todos los elementos de la lista con un solo boton
function clearAll() {
	while (listElements.length > 0) {
		for (i = 0; i < listElements.length; i++) {
			listElements[i].remove();
		}
	}
}

// hace todas las clases 'close' cerrar el elemento padre
function closeItem() {
	for (i = 0; i < listElements.length; i++) {
		close[i].onclick = function() {
			let div = this.parentElement;
			div.remove();
		};
	}
}

//permite tachar los elementos de la lista
function lineThru() {
	for (i = 0; i < listElements.length; i++) {
		listElements[i].onclick = function() {
			if (this.style.textDecoration == 'line-through') {
				this.style.textDecoration = 'none';
			} else {
				this.style.textDecoration = 'line-through';
			}
		};
	}
}

function addItem() {
	let value = document.getElementById('textbox_id').value;
	if (value == '') {
		alert('Empty field');
	} else {
		let node = document.createElement('LI');
		let textnode = document.createTextNode(value);
		let closeButton = document.createElement('span');
		let text = document.createTextNode('\u00D7');
		node.appendChild(textnode);
		node.appendChild(closeButton);
		closeButton.appendChild(text);
		closeButton.className = 'close';
		document.getElementById('todo_list').appendChild(node);
		document.getElementById('textbox_id').value = '';
	}

	lineThru();

	closeItem();
}

document.getElementById('textbox_id').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		addItem();
	}
});

closeItem();
lineThru();
