if(localStorage.getItem("testdata") == null){
    localStorage.setItem("testdata", JSON.stringify([]));
}
var testdata = JSON.parse(localStorage.getItem("testdata"));


new Vue({
    el: "#app",
    data : {
        todo : testdata,
        newTodoText : "",
        completed : testdata.reduce(function(i,item){
            return i + (item.isDone == false)
        }, 0)
    },
    methods : {
        add : function(){
            if(this.newTodoText.trim() == ""){
                return false
            } else {
                this.todo.push({text: this.newTodoText, isDone:false, id: this.todo.length});
                this.newTodoText = "";
            }
        }, 
        remove : function(item){    
            console.log(item)        
            this.todo.splice(this.todo.findIndex(obj => {
                return obj.id == item
            }), 1);      
        }
    },
    watch:{
        todo: function(){   
            localStorage.setItem("testdata", JSON.stringify(this.todo));
            this.completed = this.todo.reduce(function(i,item){
                return i + (item.isDone == false)
            }, 0);
        }, 
        deep : true
    }
})