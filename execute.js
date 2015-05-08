function say(word){
    console.log(word);
}

function execute(fn, value){
    fn(value);
}
execute(say, 'hello');
