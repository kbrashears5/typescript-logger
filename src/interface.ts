/* eslint-disable no-unused-vars */
import { LogLevel } from './log-level';

/**
 * ILogger
 */
export interface ILogger {
  LogLevel: LogLevel;

  Debug(message: any): string;

  Error(message: any): string;

  Information(message: any): string;

  Trace(message: any): string;

  Warning(message: any): string;
}
