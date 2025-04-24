class Node {
    constructor(data){
        this.data = data;
        this.timestemp = Date.now();
        this.next = null;
    }
}

class TimeAwareLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data){
        const newNode = new Node(data);
        console.log(newNode)
        this.length++;

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data){
        const newNode = new Node(data);
        
        this.length++;

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    getRecentNodes(seconds) {
        if(seconds <= 0 || this.length === 0) {
            return []
        }

        const currentTime = Date.now();
        const timeFrame = currentTime - (seconds * 1000)
        console.log(currentTime, timeFrame)
        const recentNodes = [];

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.timestemp >= timeFrame) {
                console.log(currentNode)
                recentNodes.push(currentNode);
            }

            currentNode = currentNode.next;
        }

        return recentNodes;
    }
}

const list = new TimeAwareLinkedList();

list.append('Reading');

setTimeout(() => list.append('Eating'), 1200);
setTimeout(() => list.append('Writing'), 1000);
setTimeout(() => list.append('Sleeping'), 3000);

setTimeout(() => {
    const recent = list.getRecentNodes(2.8);
    console.log(recent.map(node => node.data))
}, 4000)