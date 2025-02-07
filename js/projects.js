// import screenshot1 from "../assets/my-website-screenshot.png";
// import screenshot2 from "../assets/playlyst-project-screenshot.png";
// import screenshot3 from "../assets/weather-now-screenshot.png";
// import screenshot4 from "../assets/game-studio-screenshot.png";

const projects = [
  {
    name: "My Website",
    description: "This is my personal website/portfolio. I designed this website in <b>Figma</b> and I used simple <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> to develop it. I focused on the <b>responsiveness</b> and the <b>performance</b> of the website in order to create a smooth and user-friendly experience. Also, I developed a <b>custom contact form</b> which works by sending a request to an <b>AWS Lambda function</b> which then uses the <b>Notion API</b> to create a record on a private Notion database. Then, with <b>Notion Database Automations</b>, an email is sent to the person who submitted the form and notifies me as well.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AWS Lambda",
    ],
    image: "../assets/my-website-screenshot.png",
    github_link: "https://github.com/keleviss/vissarion-kelesidis-website",
    demo_link: "https://www.vissarion-kelesidis.me/"
  },
  {
    name: "Playlyst",
    description: "Playlyst is a web application that was developed with <b>React</b>, <b>CSS Modules</b>, and <b>JavaScript</b> to provide a new look and a user friendly way of creating, saving and playing Spotify playlists using the Spotify API. The app is responsive and works on most browsers and devices. It features secure login using <b>Spotify's OAuth 2.0</b>, searches songs using the <b>Spotify API</b>, creates playlists and saves those playists to the user's Spotify account. Also, you can listen to your playlist via an embedded widget using your playlist's ID.",
    technologies: [
      "React",
      "CSS Modules",
      "JavaScript",
    ],
    image: "../assets/playlyst-project-screenshot.png",
    github_link: "https://github.com/keleviss/playlyst",
    demo_link: "https://playlyst.netlify.app/"
  },
  {
    name: "Weather Widget",
    description: "A weather widget using the <b>OpenWeather API</b> developed with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. Simply enter a city name to instantly view the current temperature, weather conditions, and a 5-day forecast. The app provides detailed metrics like humidity, wind speed, visibility, and atmospheric pressure, all displayed with a clean and user-friendly interface. The demo uses an <b>AWS Lambda function</b> in order to not expose the Open Weather API Token.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AWS Lambda",
    ],
    image: "../assets/weather-now-screenshot.png",
    github_link: "https://github.com/keleviss/weather-widget",
    demo_link: "https://w3athernow.netlify.app/"
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
    github_link: "https://github.com/keleviss/game-studio-website-design",
    demo_link: "https://keleviss.github.io/game-studio-website-design/"
  }
];

function loadProjects(projects) {
  const grid = document.querySelector(".projects-grid");

  projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("card-item");

    // Project Details DIV
    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");

    const div = document.createElement("div");

    // Project Name
    const projectName = document.createElement("h3");
    projectName.innerHTML = `
      <a target="_blank" href="${project.github_link}">
        ${project.name}
      </a>
    `;

    // Project TECH
    const projectTech = document.createElement("div");
    projectTech.classList.add("project-tech");
    project.technologies.forEach(tech => {
      const techSpan = document.createElement("span");
      techSpan.textContent = tech;
      projectTech.appendChild(techSpan);
    });
    
    // Project Description
    const projectDesc = document.createElement("p");
    projectDesc.innerHTML = project.description;
    
    // Project Buttons Div
    const projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");
    
    const codeButton = document.createElement("a");
    codeButton.classList.add("btn");
    codeButton.textContent = "Code";
    codeButton.href = project.github_link;
    codeButton.setAttribute("target", "_blank");
    
    const demoButton = document.createElement("a");
    demoButton.classList.add("btn");
    demoButton.textContent = "Demo";
    demoButton.href = project.demo_link;
    demoButton.setAttribute("target", "_blank");

    projectButtons.appendChild(codeButton);
    projectButtons.appendChild(demoButton);
    // Project Buttons Div Created

    div.appendChild(projectName);
    div.appendChild(projectTech);
    div.appendChild(projectDesc);

    projectDetails.appendChild(div);
    projectDetails.appendChild(projectButtons);
    // Project Details DIV created

    // Project Image
    const projectImg = document.createElement("img");
    projectImg.classList.add("project-img");
    projectImg.src = project.image;

    // projectItem.appendChild(projectName);
    // projectItem.appendChild(projectTech);
    // projectItem.appendChild(projectDesc);
    projectItem.appendChild(projectDetails);
    projectItem.appendChild(projectImg);

    grid.appendChild(projectItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects(projects);
});