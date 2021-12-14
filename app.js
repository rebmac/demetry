
const menuBtn = document.getElementById('hamburger')
const navList = document.getElementById('navList')
const navLinks = document.querySelectorAll('#navList a')
// const iL = document.getElementsByClassName('insideList')

function toggleButton() {
  const navList = document.getElementById('navList')
  navList.classList.toggle('show')
  console.log('Ive been clicked')

}

menuBtn.addEventListener('click', toggleButton)

navLinks.forEach(
  (link) => link.addEventListener('click', handleNavLinkClick)
)

function handleNavLinkClick(ev){
  ev.preventDefault();
  toggleButton();
  const scrollTarget = document.getElementById(ev.target.href.split('#')[1]);

  const navBar = document.querySelector('nav');
  const { height } = navBar.getBoundingClientRect();
  //getboundingrect gets cooridinates and positioning of an element
  window.scrollTo( 0 , scrollTarget.offsetTop - height );
}