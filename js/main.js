Vue.config.devtools = true;

const app = new Vue ({
    el: ".container",
    data: {
        newToDo: "",
        toDos: [
            "learn VueJS",
            "learn PHP",
            "learn Laravel",
        ],
    },
    methods: {
       addToDo() {
           if (this.newToDo != "") {
            this.toDos.push(this.newToDo);
            this.newToDo = "";
           } 
       },
       removeToDo(index) {
           this.toDos.splice(index, 1)
       }
    }
});