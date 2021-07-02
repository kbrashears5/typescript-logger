import { ILogger } from './interface';
import { LogLevel } from './log-level';

/**
 * Implementation of ILogger
 */
export class Logger implements ILogger {
  /**
   * Logging level
   */
  public LogLevel: LogLevel;

  /**
   * Create new instance of Logger
   * @param logLevel {LogLevel} Logging level
   */
  constructor(logLevel: LogLevel = LogLevel.Information) {
    this.LogLevel = logLevel;
  }

  /**
   * Logs with Debug LogLevel
   * @param log {any} Message to log
   */
  public Debug(message: any): string {
    return this.Log(LogLevel.Debug, message);
  }

  /**
   * Logs with Error LogLevel
   * @param log {any} Message to log
   */
  public Error(message: any): string {
    return this.Log(LogLevel.Error, message);
  }

  /**
   * Logs with Information LogLevel
   * @param log {any} Message to log
   */
  public Information(message: any): string {
    return this.Log(LogLevel.Information, message);
  }

  /**
   * Logs with Trace LogLevel
   * @param log {any} Message to log
   */
  public Trace(message: any): string {
    return this.Log(LogLevel.Trace, message);
  }

  /**
   * Logs with Warning LogLevel
   * @param log {any} Message to log
   */
  public Warning(message: any): string {
    return this.Log(LogLevel.Warning, message);
  }

  /**
   * Logs with given LogLevel
   * @param level {LogLevel} Logging level to log at
   * @param log {any} Message to log
   */
  private Log(level: LogLevel, message: any): string {
    if (this.LogLevel !== LogLevel.Off && this.LogLevel >= level) {
      // create the message to log
      const logMessage = `[${LogLevel[level].toUpperCase()}]-${message}`;
      switch (level) {
        case LogLevel.Error:
          console.error(logMessage);
          break;
        case LogLevel.Warning:
          console.warn(logMessage);
          break;
        default:
          console.log(logMessage);
          break;
      }

      return logMessage;
    }

    return '';
  }
}
