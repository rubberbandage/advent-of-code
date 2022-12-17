export const sum = <T extends number>(a: T, b: T) => {
    return b ? a + b : a;
};
