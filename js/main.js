Vue.config.devtools = true;

const app = new Vue ({
    el: ".container",
    data: {
        newToDo: "",
        toDos: [
            "Learn VueJS",
            "Learn PHP",
            "Learn Laravel",
        ],
    },
    methods: {
       addToDo() {
           if (this.newToDo != "") {
            this.toDos.push(this.newToDo.charAt([0]).toUpperCase() + this.newToDo.slice(1));
            this.newToDo = "";
           } 
       },
       removeToDo(index) {
           this.toDos.splice(index, 1)
       }
    }
});