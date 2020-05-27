import { LogLevel } from './log-level';

/**
 * ILogger
 */
export interface ILogger {
    LogLevel: LogLevel;

    Debug(message?: any): void;

    Error(message?: any): void;

    Information(message?: any): void;

    Trace(message?: any): void;

    Warning(message?: any): void;
}
