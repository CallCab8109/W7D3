

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
      this.head = head  
    }

    size(){

        let node = this.head
        let count = 0

        while(node){
            count++
            node = node.next
     
        }
        return count
    }

    getLast(){
        let lastNode = this.head
        while(lastNode.next){
            lastNode = lastNode.next
        }
        return lastNode
    }

    isEmpty(){
        return this.size() === 0
    }

}

let nodeA = new Node('A')
let nodeB = new Node('B')

nodeA.next = nodeB

let list = new LinkedList(nodeA)


let nodeC = new Node('C')
nodeB.next = nodeC


let nodeE = new Node('E')
nodeC.next = nodeE

let nodeD = new Node('D')
nodeC.next = nodeD
nodeD.next = nodeE

let list2 = new LinkedList()

console.log(list2.isEmpty())