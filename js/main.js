Vue.config.devtools = true;

const app = new Vue ({
    el: ".container",
    mounted() {
        this.startFlip();
    },
    data: {
        newToDo: "",
        toDos: [
            "learn VueJS",
            "learn PHP",
            "learn Laravel",
        ]
    },
    methods: {
       addToDo() {
           if (this.newToDo != "") {
            this.toDos.push(this.newToDo);
            this.newToDo = "";
           } 
       },
    }
});