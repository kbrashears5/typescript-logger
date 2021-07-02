import { LogLevel } from './log-level';
import { Logger } from './logger';

const message = 'test message';
const emptyMessage = '';
const traceMessage = `[TRACE]-${message}`;
const debugMessage = `[DEBUG]-${message}`;
const informationMessage = `[INFORMATION]-${message}`;
const warningMessage = `[WARNING]-${message}`;
const errorMessage = `[ERROR]-${message}`;
const loggerDefault = new Logger();
const loggerTrace = new Logger(LogLevel.Trace);
const loggerDebug = new Logger(LogLevel.Debug);
const loggerInformation = new Logger(LogLevel.Information);
const loggerWarning = new Logger(LogLevel.Warning);
const loggerError = new Logger(LogLevel.Error);
const loggerOff = new Logger(LogLevel.Off);

/**
 * Test the default logging
 */
describe(`${Logger.name}-default`, () => {
  test(`trace`, () => {
    const actual = loggerDefault.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerDefault.Debug(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`info`, () => {
    const actual = loggerDefault.Information(message);
    return expect(actual).toEqual(informationMessage);
  });
  test(`warn`, () => {
    const actual = loggerDefault.Warning(message);
    return expect(actual).toEqual(warningMessage);
  });
  test(`error`, () => {
    const actual = loggerDefault.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the trace logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Trace]}`, () => {
  test(`trace`, () => {
    const actual = loggerTrace.Trace(message);
    return expect(actual).toEqual(traceMessage);
  });
  test(`debug`, () => {
    const actual = loggerTrace.Debug(message);
    return expect(actual).toEqual(debugMessage);
  });
  test(`info`, () => {
    const actual = loggerTrace.Information(message);
    return expect(actual).toEqual(informationMessage);
  });
  test(`warn`, () => {
    const actual = loggerTrace.Warning(message);
    return expect(actual).toEqual(warningMessage);
  });
  test(`error`, () => {
    const actual = loggerTrace.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the debug logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Debug]}`, () => {
  test(`trace`, () => {
    const actual = loggerDebug.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerDebug.Debug(message);
    return expect(actual).toEqual(debugMessage);
  });
  test(`info`, () => {
    const actual = loggerDebug.Information(message);
    return expect(actual).toEqual(informationMessage);
  });
  test(`warn`, () => {
    const actual = loggerDebug.Warning(message);
    return expect(actual).toEqual(warningMessage);
  });
  test(`error`, () => {
    const actual = loggerDebug.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the information logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Information]}`, () => {
  test(`trace`, () => {
    const actual = loggerInformation.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerInformation.Debug(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`info`, () => {
    const actual = loggerInformation.Information(message);
    return expect(actual).toEqual(informationMessage);
  });
  test(`warn`, () => {
    const actual = loggerInformation.Warning(message);
    return expect(actual).toEqual(warningMessage);
  });
  test(`error`, () => {
    const actual = loggerInformation.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the warning logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Warning]}`, () => {
  test(`trace`, () => {
    const actual = loggerWarning.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerWarning.Debug(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`info`, () => {
    const actual = loggerWarning.Information(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`warn`, () => {
    const actual = loggerWarning.Warning(message);
    return expect(actual).toEqual(warningMessage);
  });
  test(`error`, () => {
    const actual = loggerWarning.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the error logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Error]}`, () => {
  test(`trace`, () => {
    const actual = loggerError.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerError.Debug(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`info`, () => {
    const actual = loggerError.Information(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`warn`, () => {
    const actual = loggerError.Warning(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`error`, () => {
    const actual = loggerError.Error(message);
    return expect(actual).toEqual(errorMessage);
  });
});

/**
 * Test the off logging
 */
describe(`${Logger.name}-${LogLevel[LogLevel.Off]}`, () => {
  test(`trace`, () => {
    const actual = loggerOff.Trace(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`debug`, () => {
    const actual = loggerOff.Debug(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`info`, () => {
    const actual = loggerOff.Information(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`warn`, () => {
    const actual = loggerOff.Warning(message);
    return expect(actual).toEqual(emptyMessage);
  });
  test(`error`, () => {
    const actual = loggerOff.Error(message);
    return expect(actual).toEqual(emptyMessage);
  });
});
