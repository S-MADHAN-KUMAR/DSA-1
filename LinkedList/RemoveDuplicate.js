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
  
    removeDuplicates(){
      let curr = this.head
      while(curr){
          let runner = curr
          while(runner.next){
              if(runner.next.value === curr.value){
                  runner.next = runner.next.next
              }else{
                runner =  runner.next
              }
          }
          curr=curr.next
      }
  }
  
    printList() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(" | "));
    }
  }
  
  const list = new LinkedList();
  list.append(1);
  list.append(1);
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(3);
  
  console.log("Original List:");
  list.printList();
  
  list.removeDuplicates();
  
  console.log("List After Removing Duplicates:");
  list.printList();
  