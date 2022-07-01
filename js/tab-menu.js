const projectsTab = document.getElementById('projects-tab');
const aboutTab = document.getElementById('about-tab');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');

function showProjects() {
  this.classList.add('active');
  aboutTab.classList.remove('active');

  projectsSection.classList.add('show');
  aboutSection.classList.remove('show');
}

function showAbout() {
  this.classList.add('active');
  projectsTab.classList.remove('active');

  aboutSection.classList.add('show');
  projectsSection.classList.remove('show');
}

aboutTab.addEventListener('click', showAbout);
projectsTab.addEventListener('click', showProjects);
