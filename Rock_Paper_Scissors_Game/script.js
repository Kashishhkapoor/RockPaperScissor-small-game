// get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener("click",(e) =>{
    image.classList.add("active");
     
    userResult.src = cpuResult.src = "rock-paper-scissor-game-images/images/rock.png";
    result.textContent = "Wait....."



// loop through each option image again
    optionImages.forEach((image2,index2) => {
        //if the current index doesn't match the clicked index
        //remove the "active " class from the other option images
        index !== index2 && image2.classList.remove("active");
    
    });

    gameContainer.classList.add("start");
    
    //set  a timeout to delay the result calculation
    let time = setTimeout(() =>{
         
    gameContainer.classList.remove("start");
      // get the source of the  clicked option image
    let imageSrc = e.target.querySelector("img").src;
    //set the user image to the clicked option image
    userResult.src = imageSrc;
    //Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()* 3);
    console.log(randomNumber);

    //create an array of CPU image options
    let cpuImages = ["rock-paper-scissor-game-images/images/rock.png","rock-paper-scissor-game-images/images/paper.png","rock-paper-scissor-game-images/images/scissors.png"];

    //set the CPU images to a random option from the array

    cpuResult.src = cpuImages[randomNumber];

    //assign a letter value to the CPU option (R for rock, P for paper, S for scissors)

    let cpuValue = ["R","P","S"][randomNumber]

    //assign a letter value to clicked option(based on index)
    let userValue = ["R","P","S"][index];
    
    //create an object with all possible outcomes
    let outcomes = {
        RR: "Draw",
        RP: "User2",
        RS: "User1",
        PP: "Draw",
        PR: "User2", 
        PS: "User1",
        SS: "Draw",
        SR: "User2",
        SP: "User1",
    };

    //look up the outcome value based on user and CPU options
    let outComeValue = outcomes[userValue + cpuValue];

    //Display the result
    result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue}  Won!!`;

    },2500);

    });
    });

