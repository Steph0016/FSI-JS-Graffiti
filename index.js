
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogImages.length; i++){
	dogNames[i].style.borderRadius = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = '#379e35'
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.transform = 'rotate(180deg)'
}

