export function drowCircle(context, canvas, x, k,startPoint, distance, percents, speed, color, flag) {
  context.beginPath();  
    context.arc(startPoint, distance, 50, 0, x * k, false);
    context.lineWidth = 3;
    context.lineCap = "round";
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    let timeout;
    if (x <= percents) {
      timeout = setTimeout(() => {
        drowCircle(context, canvas, x + 1, k, startPoint, distance, percents, speed);
      }, speed);
    } else clearTimeout(timeout);
  }
  
  export function drowBackground(canvas, context) {
    var box_Height = canvas.height;
    context.fillStyle = "rgba(94, 144, 252, 1)";
    context.fillRect(1, 1, canvas.width - 1, box_Height - 1);
    context.strokeRect(0.5, 0.5, canvas.width - 1, box_Height);
  }
  
  export function drowText(context, item, distance, startPoint, color, fontsize) {
    context.beginPath();
    context.font = `bold ${fontsize}px  serif`;
    context.fillStyle = color;
    context.fillText(item, startPoint - item.length * 2, distance);
    context.closePath();
  }

  export function drowFillCircle(context, startPoint, distance, color){
    context.beginPath();
    context.arc(startPoint, distance, 150, 0, 360, false);
    context.lineWidth = 3;
    context.lineCap = "round";
    context.fillStyle = color;
    context.fill();
    context.closePath();
  }