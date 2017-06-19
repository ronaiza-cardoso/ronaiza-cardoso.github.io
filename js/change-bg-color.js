const bgColors = 
[
  'bg-aqua-gradient',
  'bg-navy-gradient',
  'bg-green-gradient',
  'bg-yellow-gradient',
  'bg-red-gradient',
  'bg-purple-gradient',
  'bg-lime-gradient',
  'bg-orange-gradient',
  'bg-fuchsia-gradient',
  'bg-maroon-gradient',
  'bg-blue-gradient',
  'bg-teal-gradient',
  'bg-lime-gradient',
  'bg-orange-gradient',
  'bg-fuchsia-gradient',
  'bg-maroon-gradient'
]


document.getElementById('clickMe').addEventListener('click', changeBgColor)

function changeBgColor() {
  document.getElementById('body').className = bgColors[Math.floor(Math.random() * 16 )]
}


