// Instructions can be found in rest_parameters.md

export function add(...args) {
    // Add a loop here
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}
