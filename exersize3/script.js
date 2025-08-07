function rejectvalue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('promise reject after 3 seconds'))
        }, 3000);
    });
}

async function getValue() {
    try {
        const result = await rejectvalue();
        console.log(result);
    }
    catch (error) {
        console.error('caught an error', error.message);
    }
}
getValue();