// TODO: not very efficient, maybe use lodash
export const deepCopy = <T>(object: T): T => JSON.parse(JSON.stringify(object));
