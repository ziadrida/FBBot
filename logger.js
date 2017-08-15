
module.exports = class Logger {
   constructor(logfile) {
     console.log("Logger: constructor");
       this.logfile = logfile;
   }
   display() {
       console.log("logFile:"+this.logfile );
   }
   log(out1,out2,out3,out4,out5) {
     console.log("********* LogFile:",this.logfile);
     console.log((out1?out1:"")+(out2?out2:"")+(out3?out3:"")+(out4?out4:"")+(out5?out5:""))

   }
}
