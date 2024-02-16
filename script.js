"use strict";
//window.addEventListener("load", start);
//function start() {
  console.log("start");
  // Add event listener to the button
 



class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.lenght=null;
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
     addLast(payload){
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;                
            
        }
        else if(payload.value){
            node.value=payload.value;
        }
        this.lenght++;

       // add a new node to the end of the list
        if(!this.head){
            this.head=node;
            this.tail=node;
           
            return;
        }
        this.tail.next=node;
        node.prev=this.tail;
        this.tail=node;
        node.next=null;
        
    }
    
    addFirst(payload){
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;                
            
        }
        else{
            node.value=payload.value;
        }
        this.lenght++;
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
        this.lenght--;
    }
    removeFirst(){
        this.head=this.head.next;
        this.head.prev=null;
        this.lenght--;
    }
    clear(){
       while(this.tail.prev){
        
            this.tail=this.tail.prev;
            this.tail.next=null    
       } 
       this.head=null;
       this.tail=null;
       this.lenght=null;
    }
    remove(index){
        //removes node at index
        const iNode=this.get(index);
        iNode.prev.next=iNode.next; //index' previous' new next points to index' next
        iNode.next.prev=iNode.prev;
        iNode.next=null;
        iNode.prev=null;
        this.lenght--;
    }
    get(index){
        //returns element at index, first element is index 0        
        
        for(let i=0;i<=index;i++){
           if(index<0 || index>=this.lenght){
            throw new Error("Index is out of bounds");
           } 
           let current=this.head;
           for(let i=0;i<index; i++){
            if(!current){
                throw new Error("index is out of bounds");
            }
            current=current.next;
           }
           return current;
        }
    }
    indexOf(payload){
        //returns index of node.value===payload
        let current=this.head;
        let index=0;
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;               
        }
        else{
            node.value=payload.value;
        }
       
        while(node.value!==current.value){
            index++;
            current=current.next;
        }
        return parseInt(index);
    }
    insertBefore(index,payload){
        //inserts payload before node at index
        const pNode={
            prev:null,
            next:null,
            value:null
        };
        const iNode=this.get(index);
        if(!payload.value){
            pNode.value=payload;
            pNode.next=iNode;
            pNode.prev=iNode.prev;
            iNode.prev.next=pNode; 
            iNode.prev=pNode;        
        }
        else{
            pNode.value=payload.value;
            pNode.next=iNode; //payloads next points to index
            pNode.prev=iNode.prev;//payloads prev points to index' prev
            iNode.prev.next=pNode   //index' previous' new next points to payload
            iNode.prev=pNode;//index' new prev points payload
        }
        this.lenght++;
    }
    insertAfter(index,payload){
         //inserts payload before node at index
         const pNode={
            prev:null,
            next:null,
            value:null
        };
        const iNode=this.get(index);
        if(!payload.value){
            pNode.value=payload;
            pNode.prev=iNode; //payloads prev points to index
            pNode.next=iNode.next; //payloads next points to index' next
            iNode.next.prev=pNode;//index' nexts new prev points payload
            iNode.next=pNode      //index new next points to payload   
        }
        else{
            pNode.value=payload.value;
            pNode.prev=iNode;
            pNode.next=iNode.next;
            iNode.next.prev=pNode     
        }
        this.lenght++;
    }
    first(){
        //returns first element i.e. head
        this.get(0);
    }
    last(){
        // returns last i.e. tail
        this.get(this.lenght-1)
    }
    swapNodes(nodeA,nodeB){
       // swaps two nodes i.e. nodeA.value shifts to nodeB and vice versa
       const a=this.get(this.indexOf(nodeA));
       const b=this.get(this.indexOf(nodeB));
       const swap=a.value
       a.value=b.value;
       b.value=swap;
       
    }
}

const list=new LinkedList();
const node1={
    prev:null,
    next:null,
    value:"A"
};

 const node2={
    prev:null,
    next:null,
    value:"B"};

    const node3={
        prev:null,
        next:null,
        value:"E"
    };
 //console.log(list);
// node1.next=node2;
// node2.prev=node1;
// node2.next=node3;
// node3.prev=node2;
// list.tail=node3;
//list.addLast(node1);
//list.addFirst(node2);
//list.addLast(node3);
//console.log(list);
//list.dumpList();
const node4={
    prev:null,
    next:null,
    value:"D"
};
const p={value:"tt"};
console.log("test addFirst ");
list.addFirst(node4);
list.addFirst(node3);
list.addFirst(node2);
list.addFirst(node1);
list.dumpList();
console.log("test addLast:")
list.addLast(p);
list.addLast('123a');
list.dumpList();
console.log("remove last: removing node 123a, last node is D ");
list.removeLast();
list.dumpList();
console.log("remove first: removing node A, first node is B");
list.removeFirst();
list.dumpList();

console.log("test indexOf node4: "+list.indexOf(node4));
console.log("test indexOf D: "+list.indexOf("D"));
console.log("test get(1): "+list.get(1).value)
// console.log(list);
 console.log("test insertBefore")
 list.insertBefore(2,"Før D");
 list.dumpList();
 console.log("test insertAfter: ");
 list.insertAfter(3,"Efter D");
 list.dumpList();
 console.log("test remove(index): 4, 'Efter D'")
 list.remove(4);
 list.dumpList();
 console.log("test Swap: tt bytte med E")
 list.swapNodes("tt",node3);
 list.dumpList();

// console.log("clear: ")
// list.clear();

