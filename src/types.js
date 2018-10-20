// @flow

/* eslint-disable import/exports-last, flowtype/require-types-at-top */

// eslint-disable-next-line no-use-before-define
type SerializableObjectValueType = string | number | boolean | null | SerializableObjectType | $ReadOnlyArray<SerializableObjectValueType>;

export type SerializableObjectType = {
  +[key: string]: SerializableObjectValueType
};

export type RoarrGlobalStateType = {|
  buffer: string,
  flush: (message: string) => void,
  prepend: SerializableObjectType,
  registeredFlush: boolean,
  sequence: number,
  versions: $ReadOnlyArray<string>,
  write: (message: string) => void
|};

export type SprintfArgumentType = string | number | boolean | null;

export type MessageContextType = SerializableObjectType;

export type MessageType = {|
  +context: MessageContextType,
  +message: string,
  +sequence: number,
  +time: number,
  +version: string
|};

export type TranslateMessageFunctionType = (message: MessageType) => MessageType;

declare function Logger (
  context: MessageContextType,
  message: string,
  c?: SprintfArgumentType,
  d?: SprintfArgumentType,
  e?: SprintfArgumentType,
  f?: SprintfArgumentType,
  g?: SprintfArgumentType,
  h?: SprintfArgumentType,
  i?: SprintfArgumentType,
  k?: SprintfArgumentType
): void;

// eslint-disable-next-line no-redeclare
declare function Logger (
  message: string,
  b?: SprintfArgumentType,
  c?: SprintfArgumentType,
  d?: SprintfArgumentType,
  e?: SprintfArgumentType,
  f?: SprintfArgumentType,
  g?: SprintfArgumentType,
  h?: SprintfArgumentType,
  i?: SprintfArgumentType,
  k?: SprintfArgumentType
): void;

/**
 * see https://twitter.com/kuizinas/status/914139352908943360
 */
export type LoggerType = {|
  // eslint-disable-next-line no-undef
  [[call]]: typeof Logger,
  +child: (context: TranslateMessageFunctionType | MessageContextType) => LoggerType,
  +debug: typeof Logger,
  +error: typeof Logger,
  +fatal: typeof Logger,
  +info: typeof Logger,
  +trace: typeof Logger,
  +warn: typeof Logger
|};
