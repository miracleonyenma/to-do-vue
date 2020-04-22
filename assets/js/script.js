var testdata = [
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

new Vue({
    el: "#app",
    data : {
        todo : testdata,
        newTodoText : ""
    },
    methods : {
        add : function(){
            this.todo.push({text: this.newTodoText, isDone:false})
            this.newTodoText = "";
            this.idFunc(this.todo);
        }, 
        remove : function(item){            
            this.todo.splice(item, 1);         
        },
        idFunc : function(arr){
            arr = arr.map((i, index) => {
                i.id = index
                console.log("mapping")
            })
        }
    }
})