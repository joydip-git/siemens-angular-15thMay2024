function test() {
    //console.log(x) //undefined
    let x
    x = 10
    console.log(x) //10

    for (let i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x) //20
    }

    console.log(x) //10

    inner()
    //local function
    //1. function declaration syntax
    function inner() {
        console.log('inner')
    }

    //foo()
    //2. function expression syntax
    var foo
    foo = function () {

    }
}
test();
