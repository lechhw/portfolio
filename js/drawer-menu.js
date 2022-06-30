const drawerList = document.querySelectorAll('.drawer-btn');

const openProject = (e) => {
  const projectItem = e.target.parentElement;
  const chevronIcon = e.target.childNodes[1];
  const projectInfo = e.target.nextElementSibling;

  projectItem.classList.toggle('open');
  chevronIcon.classList.toggle('open');
  projectInfo.classList.toggle('open');
};

drawerList.forEach((drawer) => {
  drawer.addEventListener('click', openProject);
});
