// Instructions can be found in destructuring_arrays.md

export function sequence(order) {
    const [firsty, second, third] = [...order];

    return `${firsty}, ${second}, ${third}`;
}
