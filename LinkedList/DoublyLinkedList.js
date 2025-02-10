class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null; 
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null; 
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    // O(1)
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node
      }
      this.size++
    }
  
    // O(1) if tail is maintained
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
      }
      this.size++
    }
  
    // O(n)
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return null;
      }
      if (index === 0) {
        this.prepend(value)
      } else if (index === this.size) {
        this.append(value);
      } else {
        const node = new Node(value);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
          curr = curr.next;
        }
        node.next = curr.next;
        node.prev = curr;
        curr.next.prev = node;
        curr.next = node;
        this.size++;
      }
    }
  
    removeFromIndex(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removeNode;
      if (index === 0) {
        removeNode = this.head;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        }
        if (this.size === 1) {
          this.tail = null;
        }
      } else if (index === this.size - 1) {
        removeNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
          curr = curr.next;
        }
        removeNode = curr;
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      this.size--;
      return removeNode.value;
    }
  
    removeFromValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      let curr = this.head;
      while (curr && curr.value !== value) {
        curr = curr.next;
      }
      if (!curr) {
        return null;
      }
      if (curr === this.head) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        }
        if (this.size === 1) {
          this.tail = null;
        }
      } else if (curr === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      this.size--;
      return curr.value;
    }
  
    search(value) {
      if (this.isEmpty()) {
        return -1;
      }
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  
    reverse() {
      if (this.isEmpty()) return;
      let curr = this.head;
      let temp = null;
      while (curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        curr = curr.prev; 
      }
    
      temp = this.head;
      this.head = this.tail;
      this.tail = temp;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is Empty");
      } else {
        let curr = this.head;
        let listValues = "";
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues.trim());
      }
    }
  }
  
  // Testing the DoublyLinkedList
  const list = new DoublyLinkedList();
  
  list.append(10);
  list.print();
  list.prepend(50);
  list.print();
  list.append(30);
  list.print();
  list.insert(40, 2);
  list.print();
  list.removeFromIndex(1);
  list.print();
  list.removeFromValue(30);
  list.print();
  list.reverse();
  list.print();
  