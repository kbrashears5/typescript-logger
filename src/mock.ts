import { ILogger } from './interface';
import { LogLevel } from './log-level';

/**
 * Mock implementation of ILogger
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

  public Debug(message: any): string {
    return this.Log(message);
  }

  public Error(message: any): string {
    return this.Log(message);
  }

  public Information(message: any): string {
    return this.Log(message);
  }

  public Trace(message: any): string {
    return this.Log(message);
  }

  public Warning(message: any): string {
    return this.Log(message);
  }

  // eslint-disable-next-line class-methods-use-this
  private Log(message: any): string {
    return message;
  }
}
