//exports.world = function(){
//    console.log("Hello World!");
//}

function Hello(){
    var name;
    this.setName = function(thyName){
        this.name = thyName;
    };
    this.getName = function(){
        return this.name;
    };
    this.say = function(){
        console.log('Hello' + name);
    };
}
module.exports = Hello;
