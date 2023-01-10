const fs = require ('fs');
const read = function (){
    return fs.readFileSync('./data.txt','utf8')
const note = { 
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]
    }
    console.log(note.employee)
}
module.exports=read