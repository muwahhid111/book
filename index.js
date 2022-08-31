//Сделал фичу про книгу. Не суди строго Расул


let bookReading = {
bookName: "Война и мир",
//Сколько страниц
numOfPages: 755,
//Прочитано
read : 9,
//Энергия
energy: 4,
//Дикция(по 100 бальной шкале)
diction: 38,
//день
day: 0,
getStatus(){
  console.log( `Название книги: ${this.bookName}, Энергия: ${this.energy}, Дикция: ${this.diction}, Прочитано страниц: ${this.read}, День: ${this.day}` )
},
//прочитать
bookRead(){
    this.read++
    this.energy--
    this.diction++
    if(this.energy === 0){
        console.log("Я устал")
    }
   
},
//если не читал книгу дольше дня
doNotRead(){
     this.day++
     this.energy++
     this.diction--
     if(this.day >= 1){
        console.log("Я хочу прочитать книгу")
     }
},
//Взять новую книгу
getAnewBook(){
    this.numOfPages = 500;
    this.bookName = "Цунами. 2009"
    this.energy = 5;
    this.read = 0;

},
//Заметка
theNote(){
    console.log("Поставлена заметка")
}










}
bookReading.getAnewBook()

bookReading.getStatus()