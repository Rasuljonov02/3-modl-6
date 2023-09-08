



const boxes = document.querySelectorAll(".item"),
  image = document.querySelectorAll(".column");

boxes.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("is-dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("is-dragging");
  });
});

image.forEach((zone) =>{
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone ,e.clientY);
    const curTask = document.querySelector(" .is-dragging");
    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask,bottomTask);
    }
  });
});

const insertAboveTask = ( zone, mouseY) =>{
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closest0ffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const {top} = task.getBoundingClientRect();

    const offset = mouseY - top;
    if (offset < 0 && offset > closest0ffset) {
      closest0ffset = task;
      closestTask = offset;
    }
  });
  return closestTask;
}




