class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      if (!this.head) {
        this.head = new ListNode(value);
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  
    isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    removePrimeNumbers() {
      while (this.head && this.isPrime(this.head.value)) {
        this.head = this.head.next;
      }
  
      let current = this.head;
      while (current && current.next) {
        if (this.isPrime(current.next.value)) {
          current.next = current.next.next; 
        } else {
          current = current.next;
        }
      }
    }

    printList() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join("  - "))
    }
  }
  
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  list.append(6);
  
  console.log("Original List:");
  list.printList();
  
  list.removePrimeNumbers();
  
  console.log("List After Removing Prime Numbers:");
  list.printList();
  