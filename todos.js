let appService = document.getElementById("appBackground");
appService.style.display = "block";
appService.style.filter = "brightness(20%)"


setTimeout(()=>{startPrompt()},200);

function startPrompt() {
    let input = prompt  (`What would you like to do? 
            
"list" = View list of all tasks
"add" / "new" = Add a task
"delete" / "d" = Delete a task of your choice
"quit" / "q" = Quit the app

`);
    const todos = ["Go to the supermarket", "Clean the house", "Water the plants"];
    while(input !== "quit" && input !== "q") {
        if(input === "list") {
            if(todos.length != 0){
                var finalList = "";
                for(let i = 0; i < todos.length; i++){
                    if(finalList!=="") {
                            var finalList = `${finalList}
${i+1}: ${todos[i]}`;
                    }else{
                        var finalList = `${i+1}: ${todos[i]}`;
                    }}
            prompt(`Your list:
                
${finalList}

                        (press "Enter" to return to main menu)`);
                finalList = "";
            }else{
                prompt(`Your list is empty.
                    
                        (press "Enter" to return to main menu)`)
            }
        } else if (input === "new" || input === "add"){
            const newTodo = prompt(`What task would you like to add?
                `);
            todos.push(newTodo);
            var finalListN = "";
            for(let i = 0; i < todos.length; i++){
                if(finalListN!=="") {
                        var finalListN = `${finalListN}
${i+1}: ${todos[i]}`;
                }else{
                    var finalListN = `${i+1}: ${todos[i]}`;
                }}
            prompt(`"${newTodo}" added to the list!

Your new list is:

${finalListN}
                
                        (press "Enter" to return to main menu)`);
            finalListN = "";
        } else if (input === "delete" || input === "d"){
            if(todos.length != 0){
                var finalListD = "";
                for(let i = 0; i < todos.length; i++){
                    if(finalListD!=="") {
                            var finalListD = `${finalListD}
    ${i+1}: ${todos[i]}`;
                    }else{
                        var finalListD = `${i+1}: ${todos[i]}`;
                    }}
                const index = parseInt(prompt(`Which task would you like to delete? (choose a number)
                    
    ${finalListD}
    `));
                finalListD = "";
                if(!Number.isNaN(index) && index <= todos.length){
                    var tempDeleted = `${index}: "${todos[index-1]}"`;
                    todos.splice(index-1,1)
                    var finalListD = "";
                for(let i = 0; i < todos.length; i++){
                    if(finalListD!=="") {
                            var finalListD = `${finalListD}
    ${i+1}: ${todos[i]}`;
                    }else{
                        var finalListD = `${i+1}: ${todos[i]}`;
                    }}
                    if(todos.length != 0){
                        prompt(`Task ${tempDeleted} was deleted successfully!
                        
    Your new list is:
                        
    ${finalListD}

                            (press "Enter" to return to main menu)`)
                finalListD = "";
                    }else{
                        prompt(`Task ${tempDeleted} was deleted successfully!
                        
    Your list is now empty.

                            (press "Enter" to return to main menu)`)
                finalListD = "";
                    }
                } else {
                    prompt("This task does not exist! (type anything to return to main menu)");
                }
            }else{
                prompt(`Your list does not contain any tasks.
                    
                            (press "Enter" to return to main menu)`);
            }
        }
        input = prompt(`What would you like to do? 
            
"list" = View list of all tasks
"add" / "new" = Add a task
"delete" / "d" = Delete a task of your choice
"quit" / "q" = Quit the app

`)
    }
    prompt(`Are you sure you want to quit?

                                (press "Enter" to confirm)`)
    appService.style.display = "none";
}