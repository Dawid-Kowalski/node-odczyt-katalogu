const fs = require("fs");

fs.readdir("../images", function(err, data) {
    
    for(let i=0; i<data.length; i++){

    	fs.appendFile("../results.txt", data[i] + "\r\n" , "utf-8", function(err){
    		if(err){
    			throw err;
    		}
    	})
    }
    
});