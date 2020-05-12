const quaseArray = {0:'Pedro', 1:'Jose', 2:'Maria'};
console.log(quaseArray);

Object.defineProperty( quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0]);