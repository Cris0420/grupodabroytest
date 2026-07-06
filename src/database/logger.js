class Logger{

    info(...data){

        console.log("[INFO]",...data);

    }

    warning(...data){

        console.warn("[WARNING]",...data);

    }

    error(...data){

        console.error("[ERROR]",...data);

    }

}

export default new Logger();
