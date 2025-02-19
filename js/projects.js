// import screenshot1 from "../assets/my-website-screenshot.png";
// import screenshot2 from "../assets/playlyst-project-screenshot.png";
// import screenshot3 from "../assets/weather-now-screenshot.png";
// import screenshot4 from "../assets/game-studio-screenshot.png";

const projects = [
  {
    name: "My Website",
    about: "Portfolio website for showcasing my skills and projects.",
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
    about: "A modern web application for creating and saving Spotify playlists",
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
    about: "A minimal weather widget for viewing current and future weather conditions",
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
    about: "Website design concept for a gaming studio with a fully responsive layout",
    description: "A website design concept for a gaming studio. This project is a fully <b>responsive</b> website designed and developed to showcase a concept for a game studio's portfolio, services, and contact information. The website is built using modern web technologies, including only <b>HTML</b> and <b>CSS</b>. The layout is crafted with <b>Flexbox</b> and is enhanced with <b>media queries</b> to ensure it is fully responsive across different screen sizes.",
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
  const gallery = document.querySelector(".project-gallery");

  projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("card-item");

    // Project Details DIV
    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");

    const div = document.createElement("div");
    div.classList.add("project-details-container");

    // Project Name
    const projectName = document.createElement("h3");
    projectName.id = String(project.name).toLowerCase().replace(" ", "");
    projectName.textContent = project.name;

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
    if (grid) {
      projectDesc.innerHTML = project.description;
    } else {
      projectDesc.textContent = project.about;
    }
    
    // Project Buttons Div
    const projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");
    
    const learnMoreButton = document.createElement("a");
    learnMoreButton.classList.add("btn");
    
    if (grid) {
      learnMoreButton.textContent = "Code";
      learnMoreButton.href = project.github_link;
      learnMoreButton.setAttribute("target", "_blank");
    } else {

      window.addEventListener("resize", () => {
        if (window.innerWidth < 520) {
          learnMoreButton.innerHTML = `View`;
        } else {
          learnMoreButton.innerHTML = `Learn more <i class="fa-solid fa-arrow-right"></i>`;
        }  
      })

      if (window.innerWidth < 520) {
        learnMoreButton.innerHTML = `View`;
      } else {
        learnMoreButton.innerHTML = `Learn more <i class="fa-solid fa-arrow-right"></i>`;
      }
      learnMoreButton.href = `./html/projects.html#${projectName.id}`;
    }
    
    const demoButton = document.createElement("a");
    demoButton.classList.add("btn");
    demoButton.textContent = "Live";
    demoButton.href = project.demo_link;
    demoButton.setAttribute("target", "_blank");

    projectButtons.appendChild(learnMoreButton);
    projectButtons.appendChild(demoButton);
    // Project Buttons Div Created

    div.appendChild(projectName);
    div.appendChild(projectTech);
    div.appendChild(projectDesc);

    projectDetails.appendChild(div);
    projectDetails.appendChild(projectButtons);
    // Project Details DIV created

    // Project Image
    const projectImgContainer = document.createElement("div");
    projectImgContainer.classList.add("project-img");

    const projectImg = document.createElement("img");
    projectImg.src = project.image;

    projectImgContainer.appendChild(projectImg);

    projectItem.appendChild(projectDetails);
    projectItem.appendChild(projectImgContainer);

    if (grid) {
      grid.appendChild(projectItem);
    } else {
      gallery.appendChild(projectItem);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects(projects);
});