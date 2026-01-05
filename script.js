const menu = document.getElementById('menu');

document.addEventListener('contextmenu', e=>{
  e.preventDefault();
  menu.style.display = 'block';
  menu.style.left = e.pageX + 'px';
  menu.style.top = e.pageY + 'px';
});

document.addEventListener('click', ()=>{
  menu.style.display = 'none';
});
