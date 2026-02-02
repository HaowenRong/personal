let projectsCache = null;

async function loadProjectsData() {
  if (projectsCache) return projectsCache;

  const res  = await fetch('public/assets/projects/projects.json');
  const data = await res.json();
  projectsCache = data.projects;

  return projectsCache;
}

function createProjectCard( template, link, title, desc, date ) {
  const clone = template.content.cloneNode(true);

  clone.querySelector("#link") .href        = link;
  clone.querySelector("#title").textContent = title;
  clone.querySelector("#desc") .textContent = desc;
  clone.querySelector("#date") .textContent = date;

  return clone
}

async function renderProjects() {
  const projects            = await loadProjectsData();
  const projectsContainer   = document.getElementById("projects-container");
  const projectCardTemplate = document.getElementById('project-card-template')

  projects.forEach(project => {
    let projectCard = createProjectCard(
      projectCardTemplate,
      project.link,
      project.title,
      project.desc,
      project.date
    )
    projectsContainer.appendChild(projectCard)
  });
}

renderProjects()