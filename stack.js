class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}
	// Add to top of count
	push(element) {
		this.items[this.count] = element;
		console.log(`${element} : ${this.count}`);
		this.count += 1;
		return this.count - 1;
	}
	pop() {
		if (this.count == 0) return undefined;
		let popItem = this.items[this.count - 1];
		console.log(`the poppeditem is : ${popItem}`);
		this.count -= 1;
		return popItem;
	}
	peak() {
		console.log(`${this.items[this.count - 1]}`);
		return this.items[this.count - 1];
	}
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

stack.pop();
stack.pop();

stack.push(500);
stack.push(600);
stack.peak();
