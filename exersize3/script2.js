function rejectAfter3Seconds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise rejected after 3 seconds'));
      }, 3000);  // Reject the promise after 3 seconds
    });
  }
  
  async function getValue() {
    try {
      const result = await rejectAfter3Seconds();
      console.log(result);  // This will not be executed as the promise will reject
    } catch (error) {
      console.error('Caught an error:', error.message);  // Error will be caught here
    }
  }
  
  getValue();  // Call the async function
  