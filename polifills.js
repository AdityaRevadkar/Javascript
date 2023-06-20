const obj1 = {
    name: "akash"
}

const obj2 = {
    name: "utkarsh",
    foo: function(a ,b,c,d, e) {
        console.log(this.name, a,b,c,d, e);
    }
} 

const fooBindedFunc = obj2.foo.bind(obj1, 1,2,3,4, "bind");
fooBindedFunc()


Function.prototype.myBind = function(context, ...args) {
    let func = this;

    return function() {
        func.call(context, ...args);
    }

}

const fooBindedFuncMyBind = obj2.foo.myBind(obj1, 1,2,3,4, "mybind");
fooBindedFuncMyBind();
