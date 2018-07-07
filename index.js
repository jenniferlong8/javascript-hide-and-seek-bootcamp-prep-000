
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
//  return document.querySelector('div#nested div div div div')
//  return document.querySelector('#nested').querySelector('.target')
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = ((parseInt(lis[i].innerHTML)+n))
  }
}

function deepestChild() {
  var deepestChild = document.getElementById('grand-node').querySelectorAll('div')
  return deepestChild[deepestChild.length-1]
}
