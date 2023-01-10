const fs = require ('fs');

const write = function(cmd="Nothing") {
    fs.writeFileSync('data.txt', cmd);
    
    
}
module.exports=write