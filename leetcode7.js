//merge two sorted list
const mergeSortedList = (list1, list2) => {
	// ⇒ list1 and list2 are nodes of a singly ordered linkelist arranaged in ascending order
	if (!list1) return list2; // ⇒ this returns list2 if list1 is empty or null no matter what is contained in list 2
	if (!list2) return list1; // ⇒ this also does the same as above
	// ⇒ here we are comparing the values of both nodes AND then we push over to the next node
	if (list1.val <= list2.val) {
		// ⇒ this is where the magic happens; we are making a recursive call after checking the above condition;
		// ⇒ if list1.value is lesser or equal to that of list2.value, we set the list1 to list1.next
		// ⇒ simply if the above condition is true we are basically saying do this ⇒ current = current.next
		// ⇒ then make a recursive call using list1.next in the place of list1,then we return the value of list1(current) we got;
		list1.next = mergeSortedList(list1.next, list2);
		console.log(list1);
		return list1;
		// ⇒ same magic happens here
	} else {
		list2.next = mergeSortedList(list1, list2.next);
		console.log(list2);
		return list2;
	}
};

mergeSortedList([1, 2, 3, 4], [1, 5, 7, 8]);

//TODO

// ⇒ solve this using the iterative method
