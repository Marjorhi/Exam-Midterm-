const add = require('./add')
const write = require('./write')
const read = require ('./read')



// get user input
const cmd = process.argv

var note = {}

if(cmd[2]) {
    // Build Object
    note = { 
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to data.txt
    add(note, oldNote)

    console.log(note)
}

if(cmd[2] == 'read') {
    // Import present
    const present = require('./present')
    present(read())
    
}