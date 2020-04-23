if(localStorage.getItem("testdata") == null){
    localStorage.setItem("testdata", JSON.stringify([
        {
            text : "Feed the dog",
            isDone : true,
            id : 0
        },
        {
            text : "Feed the dog again",
            isDone : false,
            id : 1
        },
        {
            text : "Feed the dog again, again",
            isDone : false,
            id : 2
        }
    ]
    ));
    alert(localStorage.getItem("testdata"))
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
            this.todo.splice(item, 1);         
        }
    },
    watch:{
        todo: function(){   
            alert(JSON.stringify(this.todo));
            localStorage.setItem("testdata", JSON.stringify(this.todo));
            this.completed = this.todo.reduce(function(i,item){
                return i + (item.isDone == false)
            }, 0);
        }, 
        deep : true
    }
})