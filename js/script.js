// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1

// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, 
// impostare true e viceversa)

const { createApp } = Vue

createApp({
  data() {
    return {
        isError:false,
        newTask:'',
        tasks : [
         {
            text:'Butta la spazzatura',
            done : true ,
         },
         {
            text:'Porta fuori il cane',
            done : true ,
         },
         {
            text:'Buttare pianoforte',
            done : false ,
         },
         {
            text:'Fare la spesa',
            done : true ,
         },
        ]

    }
  },
  methods:{
     toggleDone(indexToChange){
        if(this.tasks[indexToChange].done === true){
          this.tasks[indexToChange].done = false;
        } else {
          this.tasks[indexToChange].done = true;
        }

     },
    deleteTask(indexToDelete){
   if(this.addNewTask === false) {
    this.tasks(indexToDelete) = true

}
    },
    deleteItem(indexToDelete){
        this.tasks.splice(indexToDelete,1);
    },
    addNewTask(){
       const trimstring = this.newTask.trim();
       newObject = {
       text : trimstring,
       done : false,
      }  
   
      if(trimstring.length >= 5 ){
        this.tasks.unshift(newObject);
        this.newTask='';
        this.isError  = false;
      } else{
        this.isError= true;
      }
    }
  }
}).mount('#app');

