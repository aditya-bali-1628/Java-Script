function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(`Script loaded: ${src}`);
      console.log(script)
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      
      document.head.append(script);
    });
  }
  
  // Usage example:
  loadScript('https://code.jquery.com/jquery-3.6.0.min.')
  .then((message) => {
    alert(message); // This will alert when jQuery is loaded
    
  })
  .catch((error) => {
    console.error(error); // Handle error if the script fails
   
  });
js