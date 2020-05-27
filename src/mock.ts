import { ILogger } from './interface';
import { LogLevel } from './log-level';

/**
 * Implementation of ILogger
 */
export class LoggerMock implements ILogger {
    /**
     * Logging level
     */
    public LogLevel: LogLevel;

    /**
     * Initialize new instance of Logger
     * @param logLevel {LogLevel} Logging level
     */
    constructor(logLevel: LogLevel = LogLevel.Information) {
        this.LogLevel = logLevel;
    }

    public Debug(message?: any): void {
        this.Log(message);
    }

    public Error(message?: any): void {
        this.Log(message);
    }

    public Information(message?: any): void {
        this.Log(message);
    }

    public Trace(message?: any): void {
        this.Log(message);
    }

    public Warning(message?: any): void {
        this.Log(message);
    }

    private Log(message?: any): void {
        message = message;
        return;
    }
}
