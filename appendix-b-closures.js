function range(start, end) {

    if (end === undefined) {
        //return another function that expects end arg
        function secondFunctionArg(funcend) {
            let desiredRange = [];
            
            for (let i = start; i <= funcend; i++) {
                desiredRange.push(i);
            }
            
            console.log(desiredRange)                    
        }
        
        return secondFunctionArg

    } else {
        let desiredRange = [];
    
        for (let i = start; i <= end; i++) {
            desiredRange.push(i);
        }
        console.log(desiredRange)
    }

}

range(3,3) //[3]
range(3,8)  // [3...8]
range(3,0) //[]


var start3=range(3)


start3(3) //[3]
start3(8)  //[3..8]
start3(0)  // []

var start4=range(4)
start4(6) //[4...6]