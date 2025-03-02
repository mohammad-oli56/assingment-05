document.getElementById('his-btn').addEventListener("click", function (event) {
    event.preventDefault();  
    
    
    this.style.backgroundColor = '#8fff5b';
     document.getElementById('his-btn').innerText = "Look History";
       
   
        const result = document.getElementById("result");
        if (result.style.display === "none") {
            result.style.display = "block";
            document.getElementById('his-btn').innerText = "Clear History";
            this.style.backgroundColor = 'blue';
        } else {
            result.style.display = "none";
        }
    });

// function addMessage(messageId, hrId, messageContent) {
//     const messageElement = document.getElementById(messageId);
//     const hrElement = document.getElementById(hrId);

//     messageElement.innerHTML = messageContent;
//     messageElement.style.display = "block";
//     hrElement.style.display = "block";
// }
