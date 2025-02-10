class Node {
    constructor(value) {
      this.value = value;
      this.next = null;  
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;  
      this.size = 0;     
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    print() {
      let prev = this.head;
      let list = '';
      while (prev) {
        list += ` ${prev.value}`;
        prev = prev.next;
      }
      console.log(list.trim())
    }
  
    append(value) {
      const node = new Node(value)
      if (this.isEmpty()) {
        this.head = node
      } else {
        let prev = this.head;
        while (prev.next) { 
          prev = prev.next;
        }
        prev.next = node; 
      }
      this.size++; 
    }
  }

  function arr2list(arr){
    const list = new LinkedList()

    for(let i of arr){
        list.append(i)
    }

    return list.print()
  }

let arr =[1,2,3,4,5]
arr2list(arr)
  