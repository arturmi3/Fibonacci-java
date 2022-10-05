const message = 'Hello world'

draw()

function draw() {
  const canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    let fMinus2 = 0;
    let fMinus1 = 1;
    let fibb = 0;    
    let kierunek = 0;
    let x = 250;
    let y = 180;
    
    for (let i = 1; i < 11; i++) {
      fMinus2 = fMinus1; fMinus1 = fibb;
      fibb = fMinus1 + fMinus2;
			
      let b = 10 * fibb;           
			
      const rectangle = new Path2D();      
      switch(kierunek)
      {
      	case 0:
        		rectangle.rect(x, y, b, b);
            ctx.fillText(fibb, (2*x + b)/2, (2*y + b)/2);
      			x = x + b;  		
            y = y + b;
        		break;
          case 1:
          	rectangle.rect(x, y, b, -b);
            ctx.fillText(fibb, (2*x + b)/2, (2*y - b)/2);
            x = x + b;  		
          	y = y - b;
          	break;
          case 2:
          	rectangle.rect(x, y, -b, -b);
            ctx.fillText(fibb, (2*x - b)/2, (2*y - b)/2);
            x = x - b;  		
          	y = y - b;
          	break;
          case 3:
          	rectangle.rect(x, y, -b, b);
            ctx.fillText(fibb, (2*x - b)/2, (2*y + b)/2);
            x = x - b;  		
          	y = y + b;
          	break;      
      }
      
      ctx.stroke(rectangle);
      
      
      
      kierunek = (kierunek + 1) % 4;
    }
    //ctx.fill(circle);
  }
}
