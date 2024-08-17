export enum ERRORS {
  USERNAME_EXISTS = "USERNAME_EXISTS",
  USER_NOT_FOUND = "USER_NOT_FOUND",
}

export function isErrorOfType({
  error,
  errorType,
}: {
  error: unknown;
  errorType: ERRORS;
}) {
  return (error as any).message.includes(errorType);
}
