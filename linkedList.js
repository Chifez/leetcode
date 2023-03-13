class Node {
	constructor(val) {
		this.val = val; // this sets the current value of the node to the value
		this.next = null; // this sets value, linked to the next node to null;
	}
}
// instantiating several nodes
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// a function to print the linked list
const PrintLinkedList = (head) => {
	let current = head; // sets the current node as the head
	// a traversal condition to check if the current node is not null
	while (current != null) {
		console.log(current.val);
		current = current.next;
	}
};
PrintLinkedList(a);
