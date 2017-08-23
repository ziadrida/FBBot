
module.exports = class Logger {
    logfile: string;
    path: string;
    logLevel: number;

   constructor(logfile: string) {
     console.log("Logger: constructor");
       this.logfile = logfile;
   }
   display() {
       console.log("logFile:"+this.logfile );
   }
   logLevel (level: number) {
    this.loglevel = level;
   }
   log(out1,out2,out3,out4,out5) {
     console.log("********* LogFile:",this.logfile);
     console.log((out1?out1:"")+(out2?out2:"")+(out3?out3:"")+(out4?out4:"")+(out5?out5:""))

   }

}

module.exports =  class SuperLogger extends Logger() {
   
 }
