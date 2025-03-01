
function formatTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;  
    return `${hours}:${minutes}:${seconds} ${amPm}`;
}

// Task 1 Button Click Event
document.getElementById("task-button-1")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-1").innerText;
        alert(name);

        const buttonDis = document.getElementById("task-button-1");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");


        const hr=document.getElementById("rh")
        hr.style.display = "block";

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";


            const formattedTime = formatTime();
            const titleSet = name; 

            
            
            message.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message.style.display = "block"; 
        }
    });

// Task 2 Button Click Event
document.getElementById("task-button-2")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-2").innerText;
        alert(name);

        const hr1=document.getElementById("rh1")
        hr1.style.display = "block";

        const buttonDis = document.getElementById("task-button-2");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";
            
            const formattedTime = formatTime();
            const titleSet = name; 

            
            message1.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message1.style.display = "block"; 

           
        }
    });


// button -3

    document.getElementById("task-button-3")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-3").innerText;
        alert(name);

        const buttonDis = document.getElementById("task-button-3");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");

        


        const hr2=document.getElementById("rh2")
        hr2.style.display = "block";

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";


            const formattedTime = formatTime();
            const titleSet = name; 

            
            
            message2.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message2.style.display = "block"; 
        }
    });

// buton 4

    document.getElementById("task-button-4")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-4").innerText;
        alert(name);

        const buttonDis = document.getElementById("task-button-4");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");


        const hr3=document.getElementById("rh3")
        hr3.style.display = "block";

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";


            const formattedTime = formatTime();
            const titleSet = name; 

            
            
            message3.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message3.style.display = "block"; 
        }
    });


    // button 5


    document.getElementById("task-button-5")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-5").innerText;
        alert(name);

        const buttonDis = document.getElementById("task-button-5");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");


        const hr4=document.getElementById("rh4")
        hr4.style.display = "block";

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";


            const formattedTime = formatTime();
            const titleSet = name; 

            
            
            message4.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message4.style.display = "block";
        }
    });


    // button 6


    document.getElementById("task-button-6")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("task-name-6").innerText;
        alert(name);

        const buttonDis = document.getElementById("task-button-6");
        const taskNum = document.getElementById("task-num");
        const taskCount = document.getElementById("task-count");
        const message = document.getElementById("message");


        const hr=document.getElementById("rh")
        hr.style.display = "block";

        const newTaskNum = parseInt(taskNum.textContent);
        const newTaskCount = parseInt(taskCount.textContent);

        if (newTaskNum > 0) {
            taskNum.textContent = newTaskNum - 1;
            taskCount.textContent = newTaskCount + 1;
            buttonDis.disabled = true;
            buttonDis.style.backgroundColor = "gray";


            const formattedTime = formatTime();
            const titleSet = name; 

            
           
            message5.innerHTML = `You have completed the task <strong>${titleSet}</strong> issue at ${formattedTime}`;
            message5.style.display = "block"; 
        }
    });