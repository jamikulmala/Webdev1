
const drawArrows = (actors, timeout, drawArrow, i = 0) => {
  if(i >= actors.length){
    return;
  }
  drawArrow(actors, i);
  setTimeout(() => drawArrows(actors, timeout, drawArrow, i + 1), timeout);
}

const drawArrowsSync = (actors, drawArrow) => {
  actors.forEach((actor, index) => drawArrow(index, -1, actors.length - 1));
}

const drawAll = (actors = ["mobile client", "router", "controller", "model", "mongoDB"], timeout = 200) => {
  draw = getCanvasInBrowser();
  drawActors(actors);
  drawArrows(actors, timeout, drawArrow);
}

exports.drawArrows = drawArrows; //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored
exports.drawArrowsSync = drawArrowsSync; //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored