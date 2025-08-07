async function loadScript(src) {

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(`script loaded :${src}`);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.head.append(script);
                
});
}

async function init() {
    
    try {
        const message = await loadScript('https://code.jquery.com/jquery-3.6.0.min.js')
        alert(message)
        console.log(message)
        
    } catch (error) {
        
        console.error(error);
    }
    
}

init();