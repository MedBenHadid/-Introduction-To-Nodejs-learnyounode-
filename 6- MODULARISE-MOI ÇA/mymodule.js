var fs = require('fs')
 
module.exports = function Recherche(dir, ext , callback) {
    array = [] ;
    j=0;
    fs.readdir(dir, function (err ,data){

        if (err) return callback(err)
        
        // array =  data.map(el => {
        //      if (el.lastIndexOf('.' + ext) > -1) {
        //          return el;
        //      }
        //  });

         for (i=0;i<data.length;i++){
              if (data[i].lastIndexOf('.' + ext) > -1) {
                  array[j]=data[i];
                  j++;
              }
         }
        
         callback(array);
    });

};
