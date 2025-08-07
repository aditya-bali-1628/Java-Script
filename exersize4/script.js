function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('resolve promise one'), 1000);
    });
}
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('resolve promise two'), 1000);
    });
}
function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('resolve promise three'), 1000);
    });
}

async function resultP() {
    try {
        const result = await Promise.all([promise1(), promise2(), promise3()]);
        console.log("parallel result:", result);
    } catch (error) {
        console.error("Error in parallel execution:", error);
    }
}

resultP();

