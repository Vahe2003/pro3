var fs = require('fs');
var obj =
{
    "first_name": "Vahe",
    "last_name": "Khachatryan",
    "age":14,
    "tumo_student": true
};
    var myJSON = JSON.stringify(obj);

    function main() {
        fs.writeFileSync("obj.json", myJSON);
        var objct = fs.readFileSync("obj.json").toString();
     }
     main();
     