console.log("Connected");

let saveFile = () => {
    const name = document.getElementById('fname');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const textarea = document.getElementById('textarea');
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Mobile: ' +mobile.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        // 'Country: ' + country.value + ' \r\n ' + 
        'Message: ' + textarea.value;
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}