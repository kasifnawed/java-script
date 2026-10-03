#Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-viq7leqr?file=index.html)

# Solution code

# Project 5 Solution

```javascript

```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6;i++){
color += hex [Math.floor(Math.random()*16)]
  }
  return color;
};

let intervelId ;
const startChangingColor = function(){
if(!intervelId){
  intervelId = setInterval(changebgColor,1000)
}

  function changebgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervelId);
  intervelId = null;
};

document.getElementById("start").addEventListener
('click',startChangingColor);


document.getElementById("stop").addEventListener
('click',stopChangingColor);

```
