let ball = document.getElementsByClassName("pupils");
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    ball[i].style.left = x;
    ball[i].style.top = y;
    ball[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

let maincircle = document.querySelector(".maincircle");
let arms = document.querySelector(".arms");
let bgr = document.querySelector(".bg2");
let btn = document.getElementById("mouth");
let eye = document.querySelectorAll(".eye");
let tooth = document.querySelectorAll(".tooth");
let pupil = document.querySelectorAll(".pupils");
let mask = document.querySelector(".mask");

btn.addEventListener("click", function () {
  if (bgr.classList.contains("avir") == false) {
    bgr.classList.add("avir");
    bgr.classList.remove("dvir");
    arms.classList.add("avirOpt");
    arms.classList.remove("dvirOpt");
    maincircle.classList.add("avirBody");
    maincircle.classList.remove("dvirBody");
    btn.classList.add("avirMouth");
    btn.classList.remove("dvirMouth");
    mask.classList.add("avirMask");
    mask.classList.remove("dvirMask");
    for (let i = 0; i < eye.length; i++) {
      eye[i].classList.add("avirEye");
      eye[i].classList.remove("dvirEye");
    }
    for (let i = 0; i < tooth.length; i++) {
      tooth[i].classList.add("avirOpt");
      tooth[i].classList.remove("dvirOpt");
    }
    for (let i = 0; i < pupil.length; i++) {
      pupil[i].classList.add("avirPupil");
      pupil[i].classList.remove("dvirPupil");
    }
  } else {
    bgr.classList.remove("avir");
    bgr.classList.add("dvir");
    arms.classList.add("dvirOpt");
    arms.classList.remove("avirOpt");
    maincircle.classList.add("dvirBody");
    maincircle.classList.remove("avirBody");
    btn.classList.add("dvirMouth");
    btn.classList.remove("avirMouth");
    mask.classList.add("dvirMask");
    mask.classList.remove("avirMask");
    for (let i = 0; i < eye.length; i++) {
      eye[i].classList.add("dvirEye");
      eye[i].classList.remove("avirEye");
    }
    for (let i = 0; i < tooth.length; i++) {
      tooth[i].classList.add("dvirOpt");
      tooth[i].classList.remove("avirOpt");
    }
    for (let i = 0; i < pupil.length; i++) {
      pupil[i].classList.add("dvirPupil");
      pupil[i].classList.remove("avirPupil");
    }
  }
});

mask.addEventListener("click", function () {
  if (bgr.classList.contains("avir") == false) {
    bgr.classList.add("avir");
    bgr.classList.remove("dvir");
    arms.classList.add("avirOpt");
    arms.classList.remove("dvirOpt");
    maincircle.classList.add("avirBody");
    maincircle.classList.remove("dvirBody");
    btn.classList.add("avirMouth");
    btn.classList.remove("dvirMouth");
    mask.classList.add("avirMask");
    mask.classList.remove("dvirMask");
    for (let i = 0; i < eye.length; i++) {
      eye[i].classList.add("avirEye");
      eye[i].classList.remove("dvirEye");
    }
    for (let i = 0; i < tooth.length; i++) {
      tooth[i].classList.add("avirOpt");
      tooth[i].classList.remove("dvirOpt");
    }
    for (let i = 0; i < pupil.length; i++) {
      pupil[i].classList.add("avirPupil");
      pupil[i].classList.remove("dvirPupil");
    }
  } else {
    bgr.classList.remove("avir");
    bgr.classList.add("dvir");
    arms.classList.add("dvirOpt");
    arms.classList.remove("avirOpt");
    maincircle.classList.add("dvirBody");
    maincircle.classList.remove("avirBody");
    btn.classList.add("dvirMouth");
    btn.classList.remove("avirMouth");
    mask.classList.add("dvirMask");
    mask.classList.remove("avirMask");
    for (let i = 0; i < eye.length; i++) {
      eye[i].classList.add("dvirEye");
      eye[i].classList.remove("avirEye");
    }
    for (let i = 0; i < tooth.length; i++) {
      tooth[i].classList.add("dvirOpt");
      tooth[i].classList.remove("avirOpt");
    }
    for (let i = 0; i < pupil.length; i++) {
      pupil[i].classList.add("dvirPupil");
      pupil[i].classList.remove("avirPupil");
    }
  }
});
