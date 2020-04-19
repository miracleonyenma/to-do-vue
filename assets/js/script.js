var testdata = [
    {
        text : "Feed the dog",
        isDone : true
    },
    {
        text : "Feed the dog again",
        isDone : false
    },
    {
        text : "Feed the dog again, again",
        isDone : false
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
        }
    }
})