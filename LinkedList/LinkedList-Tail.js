class Node {
  constructor(value) {
      this.value = value; 
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  isEmpty() {
      return this.size === 0;
  }

  prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
          this.head = node;
          this.tail = node;
      } else {
          node.next = this.head;
          this.head = node;
      }
      this.size++;
  }
  
  append(value){
      const node = new Node(value)
      if(this.isEmpty()){
          this.head = node
          this.tail = node
      }
      else{
         this.tail.next = node
         this.tail = node
      }
      this.size++
  }
  
  removeById(index){
      if(index === 0){
          this.head = this.head.next
      }else{
          let prev = this.head
         for(let i =0 ;i< index-1;i++){
             prev = prev.next
         }
         this.tail = prev
         prev.next =null
      }
      this.size--
  }
  
removeByValue(value){
   if(this.head.value === value){
      this.head = this.head.next
   }else{
       let prev = this.head
       let curr= this.head.next
       while(curr){
           if(curr.value === value){
              prev.next = curr.next
           }
           prev = curr
           curr = curr.next
       }
   }
   this.size--
}

searchByValue(value){
   let curr = 0
   if(this.head.value === value){
       return console.log(1)
   }else{
      let prev = this.head
      while(prev){
          if(prev.value === value){
              return console.log(curr)
          }
          curr++
          prev = prev.next
      }
   }
   return console.log(-1)
}

searchById(index){
   if(index<0||index>this.size){
       return console.log(-1)
   }else{
       let curr = this.head
      for(let i=1;i<=index;i++){
          curr = curr.next
      }
          return console.log(curr.value)
   }
   return console.log(-1)
}


reverse() {
  if (this.isEmpty()) {
      console.log('List is Empty');
      return;
  }
  let curr = this.head
  let prev = null;
  let next = null;

  while (curr !== null) {
      next = curr.next;  
      curr.next = prev;  
      prev = curr;       
      curr = next;    
  }
  this.tail = this.head;  
  this.head = prev;      

  console.log('List reversed');
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

// Testing the LinkedList
const list = new LinkedList();
list.print(); // Output: List is Empty
list.prepend(10);
list.print(); // Output: 10
list.append(20);
list.append(30);
list.append(50);
list.prepend(100);
list.print(); // Output: 10
// list.removeById(3)
list.removeByValue(100)
//  list.removeByValue(30)
//  list.removeByValue(50)
list.print()
list.reverse()
list.print()
// list.searchById(3)
// list.searchByValue(30)