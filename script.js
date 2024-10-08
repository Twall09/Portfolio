document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Pet Paradise Online Store",
      description: "E-commerce Store based on Pet essentials.",
      link: "petparadise.html",
      image: "Images/Pets.png",
    },
    {
      title: "Gary Blue's Restaurant",
      description: "The Home page of Gary Blue's Restaurant.",
      link: "restaurant.html",
      image: "Images/shop.png",
    },
  ];

  const projectList = document.querySelector(".project-list");

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.className = "project-image";

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.textContent = "View Project";

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDesc);
    projectItem.appendChild(projectImage);
    projectItem.appendChild(projectLink);

    projectList.appendChild(projectItem);
  });

  const buttons = document.querySelectorAll(".rps-btn");
  const result = document.getElementById("result");

  const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    )
      return "You win!";
    return "You lose!";
  }

  function handleClick(event) {
    const userChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    result.textContent = `Computer chose ${computerChoice}. ${determineWinner(
      userChoice,
      computerChoice
    )}`;
    setTimeout(() => {
      result.textContent = "Make your choice:";
    }, 3000);
  }

  buttons.forEach((button) => button.addEventListener("click", handleClick));
});
