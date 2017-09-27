// Expected Output
// 2 3 4 1
const input1 = `4
2
3
4
1`;

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
    this.insert=function(head,data){
        //complete this method
        if (head === null) {
            return new Node(data);
        } else if (head.next === null) {
            head.next = new Node(data);
        } else {
            this.insert(head.next, data);
        }

        return head;
    };

    this.display=function(head){
        var start=head;
        while(start){
            process.stdout.write(start.data+" ");
            start=start.next;
        }
        process.stdout.write("\n");
    };
}

function mainProgram(input){
    let [T, ...rest] = input.split('\n');
    let head = null;
    let mylist=new Solution();

    for(i = 0; i < T; i++) {
        let data=parseInt(rest.shift());
        head=mylist.insert(head,data);
        console.log(head)
    }
    mylist.display(head);
}		

mainProgram(input1);