// import screenshot1 from "../assets/my-website-screenshot.png";
// import screenshot2 from "../assets/playlyst-project-screenshot.png";
// import screenshot3 from "../assets/weather-now-screenshot.png";
// import screenshot4 from "../assets/game-studio-screenshot.png";

const projects = [
  {
    name: "My Website",
    description: "This is my personal website/portfolio",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AWS Lambda",
    ],
    image: "../assets/my-website-screenshot.png",
    github_link: "https://github.com/keleviss/vissarion-kelesidis-website"
  },
  {
    name: "Playlyst",
    description: "A web app for creating and saving Spotify playlists.",
    technologies: [
      "React",
      "CSS Modules",
      "JavaScript",
    ],
    image: "../assets/playlyst-project-screenshot.png",
    github_link: "https://github.com/keleviss/playlyst"
  },
  {
    name: "Weather Widget",
    description: "A weather widget using the OpenWeather API.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AWS Lambda",
    ],
    image: "../assets/weather-now-screenshot.png",
    github_link: "https://github.com/keleviss/weather-widget"
  },
  {
    name: "Gaming Studio",
    description: "A website design concept for a gaming studio.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "../assets/game-studio-screenshot.png",
    github_link: "https://github.com/keleviss/game-studio-website-design"
  }
];

function loadProjects(projects) {
  const grid = document.querySelector(".projects-grid");

  projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("card-item");

    const projectName = document.createElement("h3");
    projectName.innerHTML = `
      <a target="_blank" href="${project.github_link}">
        ${project.name}
        <i class="fa-solid fa-up-right-from-square fa-xs"></i>
      </a>
    `;

    const projectTeck = document.createElement("div");
    projectTeck.classList.add("project-tech");
    project.technologies.forEach(tech => {
      const techSpan = document.createElement("span");
      techSpan.textContent = tech;
      projectTeck.appendChild(techSpan);
    });
    
    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;

    const projectImg = document.createElement("img");
    projectImg.classList.add("project-img");
    projectImg.src = project.image;

    projectItem.appendChild(projectName);
    projectItem.appendChild(projectTeck);
    projectItem.appendChild(projectDesc);
    projectItem.appendChild(projectImg);

    grid.appendChild(projectItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects(projects);
});