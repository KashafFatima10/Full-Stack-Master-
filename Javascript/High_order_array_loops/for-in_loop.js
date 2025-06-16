//Objects are iterable with for-in loop

const myObject={
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    rb:"ruby"
}

for (const key in myObject) {
    console.log(key);
    
}