// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
const mashedPotatoesImg = document.getElementById("mashedPotatoesImg");
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;

          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          mashedPotatoesImg.removeAttribute("hidden");
        });
      });
    });
  });
});
// Iteration 2 - using promises

const steakImg = document.getElementById("steakImg");

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      obtainInstruction("steak", 2).then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        obtainInstruction("steak", 3).then((step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
          obtainInstruction("steak", 4).then((step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
            obtainInstruction("steak", 5).then((step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
              obtainInstruction("steak", 6).then((step6) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step6}</li>`;
                obtainInstruction("steak", 7).then((step7) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step7}</li>`;
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>Stake is ready!</li>`;
                  steakImg.removeAttribute("hidden");
                });
              });
            });
          });
        });
      });
    });
  })
  .catch((error) => {
    console.log("Be careful : ", error);
  });

// Iteration 3 using async/await

const broccoliImg = document.getElementById("broccoliImg");

async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      await obtainInstruction("broccoli", i).then((value) => {
        document.querySelector("#broccoli").innerHTML += `<li>${value}</li>`;
      });
    }
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>broccoli is ready!</li>`;
    broccoliImg.removeAttribute("hidden");
  } catch (e) {
    console.log("error here :", e);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

const brusselsSproutsImg = document.getElementById("brusselsSproutsImg");

const promiseAll = Promise.all(brusselsSprouts);
promiseAll
  .then((values) => {
    values.forEach((value) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>brussels sprouts is ready!</li>`;
    brusselsSproutsImg.removeAttribute("hidden");
  })

  .catch((error) => {
    console.log(error);
  });

// ...
