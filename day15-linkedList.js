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
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function mainProgram(input){
    let [T, ...rest] = input.split('\n');
    let head = null;
    let mylist=new Solution();

    for(i = 0; i < T; i++) {
        let data=parseInt(rest.shift());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		

mainProgram(input1);