"use strict";
function handleSubmit() {
  // lấy giá trị input và chuyển sang in thường
  const emailValue = document.querySelector("#email").value.toLocaleLowerCase();
  const errorEmail = document.querySelector(".error-email");
  // đk check lỗi mail
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkmail = emailValue.match(regex);

  const sectionContent = document.querySelector(".section-content");
  const submitEmail = document.querySelector(".submit-email");
  if (checkmail) {
    sectionContent.style.display = "block";
    submitEmail.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng Email";
  }
}

function handleOnmouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnmouseOut(element) {
  const viewMore = element.querySelector(".control-view");

  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  // trỏ đến phần tử cha
  const parentElement = element.closest(".parent");
  const sectionContent = parentElement.querySelectorAll(".section-content");

  const viewMore = parentElement.querySelector(".control-view");
  // ẩn or hiện button qua control-view, less-more
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "less-more";
    console.log(viewMore.innerHTML, viewMore.classList.value);
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.add("view-more");
    viewMore.classList.remove("less-more");
    viewMore.innerHTML = "view-more";
  }
}
