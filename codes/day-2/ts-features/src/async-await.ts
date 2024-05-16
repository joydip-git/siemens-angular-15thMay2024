/*
const divide = (a: number, b: number) => {
    const p = new Promise<number>(
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('divisor should not be zero...')
                rejectFn(err)
            } else
                resolveFn(res)
        }
    )
    return p
}
*/
//const p = divide(12, 3)
// p
//     .then(
//         (data) => { console.log(data); },
//         (err) => { console.log(err); }
//     )
/*
p
.then(
    () => { }
)
.catch(() => { })
*/
const divide = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity)
        throw new Error("divisor should not be zero...")
    else
        return res
}

const addNumbers = (a: number, b: number) => a + b


async function callDivide() {
    try {
        const data = await divide(12, 3)
    } catch (error) {
        console.log(error);
    }
}
callDivide()

console.log(addNumbers(12, 3));