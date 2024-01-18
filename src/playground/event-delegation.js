const container = document.querySelector(".container");
const eventPhases = ["none", "capturing", "target", "bubbling"];

const alertEventStatus = (event) => {
  alert(
    `event.target: ${event.target.className}\nevent.currentTarget: ${
      event.currentTarget.className
    }\nevent.eventPhase: ${eventPhases[event.eventPhase]}`
  );
};

/* capturing phase event */
container.addEventListener("click", alertEventStatus, true);

/* bubbling phase event */
container.addEventListener("click", alertEventStatus);
