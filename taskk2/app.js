class Message{
    constructor(name, message) {
        this.name = name;
        this.date=Date.now();
        this.message = message;
      }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
      toString(){
        return(`Muellif: ${this.name}, Mesaj: ${this.message}, Vaxt: ${this.gettime()}`)
      }
}
class Messenger{
    list=[];
    send(name,message){
        let new_message=new Message(name,message)
        this.list.push(new_message)
    };
    show_history(){
        this.list.forEach(message=>{
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Meryem', 'İkinci mesaj')
messenger.show_history()