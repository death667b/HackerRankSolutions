const input1 = `racecar`;
// Expected Output - The word, racecar, is a palindrome.

class Solution {
    constructor() {
        this.stack = new Array();
        this.queue = new Array();
    }

    pushCharacter(char) {
        this.stack.push(char);
    }

    popCharacter() {
        return this.stack.pop();
    }

    enqueueCharacter(char) {
        this.queue.push(char)
    }

    dequeueCharacter() {
        return this.queue.shift();
    }
}

mainProgran(input1);
function mainProgran(s){
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}