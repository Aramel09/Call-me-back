const messagesStorage = []

function messageInfo(name, message){
    return information ={
    nameOfPerson: name,
    messageLeft: message
    }
}

// console.log(messageInfo(`Alejandro`,`Prueba1`))

function addMessage(person){
    messagesStorage.push(person)
}

addMessage(messageInfo(`Alejandro`,`Prueba 1`))
addMessage(messageInfo(`Jasmin`,`Prueba 2`))
addMessage(messageInfo(`Jasmin`,`Prueba 3`))

function magicMesage(message){
    console.log(message)
}

function readOutMessages(personThatLeftMessage, callback) {
    for (let i = 0; i < messagesStorage.length; i++){
    if (messagesStorage[i].nameOfPerson === personThatLeftMessage){
        callback(messagesStorage[i].messageLeft)
        // console.log(messagesStorage[i].messageLeft)
        
    }
    }

}

console.log(messagesStorage)
readOutMessages(`Jasmin`, magicMesage)

function messageFormatter (objectMessage){
    for(let i = 0; i < messagesStorage.length; i++)
    if (messagesStorage[i].messageLeft === objectMessage) {
        console.log(`You have a message from ${messagesStorage[i].nameOfPerson} that says ${messagesStorage[i].messageLeft}`)
    }
}
messageFormatter(`Prueba 1`)
messageFormatter(`Prueba 2`)



// const trying = readOutMessages(`Jasmin`)
// console.log(trying)

// let nameForSearch = `Alejandro`
// for (let i = 0; i < messagesStorage.length; i++){
//     if (messagesStorage[i].nameOfPerson === nameForSearch){
        
//     }
// }   
