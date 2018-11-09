var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/孔明灯.jpg') {
      myImage.setAttribute('src', 'images/孔明灯男.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = '你是我的小猫咪哦，' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '你是我的小猫咪哦，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }