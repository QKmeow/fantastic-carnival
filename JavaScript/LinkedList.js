/*
   我第一次聽到 Linkedlist 是在看 Jserv 大神的課才知道的東西，也是我工作一年以後才接觸到，我想以他來當開頭應該是不錯的~
   
   簡單介紹 linkedlist，linked lsit 分為兩種 singal linked list 和 doubly linked list
    - singal 
    指的是資料只會單向的鏈接下一筆資料，在其資料結構中，只包含 data 和 next pointer，最後一個節點的 pointer 為 null。
    - doubly
    則是指雙向，也就是在單向的結構中增加一個記錄前一個節點的pointer，使其可以前後搜尋，與最後一個節點類似，第一個節點的前一個 pointer 同為 null。

    singalNode[data, next]

    [100,Node2] -> [200,Node3] -> [300,null]

    doublyNode[prev, data, next]
    [null,100,Node2] -> [Node1,200,Node3] ->[Node2,300,null]

*/


function Node(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function Linkedlist(){
    this.head = null;
    this.tail = null;
}
// var node1 = new Node(100,'node2', null);
// console.log(node1);
/*
 * this is clear method, but may comfertbo
 *
Linkedlist.prototype.addToHead = function(value){
    var newNode = new Node(value,this.head,null)
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};
*/
Linkedlist.prototype.addToHead = function(value){
    var newNode = new Node(value,this.head,null)
    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }
    this.head =newNode;
};

var ll = new Linkedlist();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);