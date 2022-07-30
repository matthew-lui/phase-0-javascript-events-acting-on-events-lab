function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
    if (right >= 179) {
      dodger.style.left = `${right + 1}px`;
    }
  }
  