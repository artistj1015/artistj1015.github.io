// 전역변수 vs 지역변수
document.querySelector("body").addEventListener("mousemove", eyeball);
const btn = document.getElementById("btn");
const box = document.querySelector(".box");
const eye = document.querySelectorAll(".eye");

function eyeball(event) {
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 45;
    eye.style.transform = "rotate(" + rotation + "deg )";
  });
}

btn.addEventListener("click", function (e) {
  
  let boxchange = box.classList;

  console.log(boxchange.contains("active"));
  if (boxchange.contains("active") == false) {
    boxchange.add("active");
    boxchange.remove("inactive");
  } else {
    boxchange.remove("active");
    boxchange.add("inactive");
  }

  for (let i = 0; i < eye.length; i++) {
    const element = eye[i];
    let eyechange = element.classList;
    console.log(eyechange.contains("act"));
    if (eyechange.contains("act") == false) {
      eyechange.add("act");
      eyechange.remove("inact");
    } else {
      eyechange.remove("act");
      eyechange.add("inact");
    }
  }
});

console.log(box);
