const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  }
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({x: positionX, y: positionY});
  }
  spriteAnimations[state.name] = frames;
});

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['idle'].loc.length;
    let frameX = spriteWidth * position;  //advanced calculation, pulled from internet
    let frameY = spriteAnimations['idle'].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   // if (gameFrame % staggerFrames == 0){
   //    if (frameX < 6) frameX++;
   //    else frameX = 0;
   //}

    gameFrame++;
    requestAnimationFrame(animate);

};
animate();
