export const composeCb = (events) => () => events.flat(2).forEach(event => event && event());
