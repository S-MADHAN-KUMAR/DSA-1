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
  
    getSize() {
      return this.size;
    }
  
     // O(1)
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }

    // O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head 

            for(let i=0 ; i < index -1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode= prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeFromValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            const removedNode = this.head;
            this.head = this.head.next;
            this.size--
            return removedNode.value
        }
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }
        if (prev.next) {
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return removedNode.value
        }
        return null;
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let current = this.head;
        let previous = null;
    
        while (current) {
          let nextNode = current.next;
          current.next = previous;
          previous = current;
          current = nextNode;
        }
    
        this.head = previous;
        return this;
      }
    
  
    print() {
      if (this.isEmpty()) { 
        console.log('List is Empty');
      } else {
        let curr = this.head;
        let listValues = '';
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues.trim());
      }
    }
  }
  
  const list = new LinkedList();
  
  console.log("List is Empty ?", list.isEmpty());
  console.log("List Size: ", list.getSize());
  list.print();
  
  list.append(10);
  list.print();
  
  list.append(40);
  list.append(50);
  list.print();
  list.append(60);
  list.print();
  list.insert(20,1)
  list.print();
  list.insert(30,2)
  list.print();
  list.removeFromValue(50)
  list.print();
  list.reverse();
  console.log("Reversed List:");
  list.print();

