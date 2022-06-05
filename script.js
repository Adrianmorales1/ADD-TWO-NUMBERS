class listNode {
    constructor(data){
        this.data = data
        this.next = null;
    }
    
}

var addTwoNumbers = function(l1,l2) {
    var totalL1 = 0;
    var totalL2 = 0;
    var totall1l2 = 0;
    var array = [];
    var some = 0;
    let node1 = new listNode(2)

    for(var x = l1.length -1; x>=0; x--) {
        var multiple = Math.pow(10, x)
        totalL1 += l1[x] * multiple
    }
    
    for (var y = l2.length -1; y>= 0; y--) {
        var multiple = Math.pow(10, y)
        totalL2 += l2[y] * multiple
    }

    totall1l2 = totalL1 + totalL2;

    while(totall1l2 > 0) {
        array.push(totall1l2 % 10)
        totall1l2 /= 10
        totall1l2 = Math.floor(totall1l2)
    }

    return array
};

var l1test1 =[2,4,3] //342
var l2test1 = [5,6,4] //564
console.log(addTwoNumbers(l1test1,l2test1)) // 807 but returns [7,0,8]
var l1test2 = [0] //0
var l2test2 =[0] //0
addTwoNumbers(l1test2,l2test2)

var l1test3 = [9,9,9,9,9,9,9] //9999999
var l2test3 = [9,9,9,9] //9999
addTwoNumbers(l1test3,l2test3)