"use strict";
//window.addEventListener("load", start);
//function start() {
  console.log("start");
  // Add event listener to the button
 


const node1={
    prev:null,
    next:null,
    value:"A"
}

class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
    }
    dumpList(){
        let current=this.head;
        while(current){
            console.log(`
            node: ${current.value}
            ----------
             prev: ${current.prev?.value}
             next: ${current.next?.value}`);
            current=current.next;
        }
    }
    addLast(node){
        //add a new node to the end of the list
        if(!this.head){
            this.head=node;
            this.tail=node;
            return;
        }
        this.tail.next=node;
        node.prev=this.tail;
        this.tail=node;

    }
    addFirst(node){
        //add a new node to the beginning of the list
    if(!this.head){
        this.head=node;
        this.tail=node;
        return;
    }
    this.head.prev=node;
    node.next=this.head;
    this.head=node;

    }
    removeLast(){
        this.tail=this.tail.prev;
        this.tail.next=null;
        
    }
}
 const node2={
    prev:null,
    next:null,
    value:"B"};

    const node3={
        prev:null,
        next:null,
        value:"E"
    };
const list=new LinkedList();
 console.log(list);
// node1.next=node2;
// node2.prev=node1;
// node2.next=node3;
// node3.prev=node2;
// list.tail=node3;
list.addLast(node1);
list.addFirst(node2);
list.addLast(node3);
console.log(list);
list.dumpList();
const node4={
    prev:null,
    next:null,
    value:"D"
};
