console.log("main.js");

console.log(document);

// tương tác với html bằng id
let text = document.getElementById("text");
console.log("text: ", text);

// innerHTML: dùng để đọc/lấy nội dung, hoặc gán nội dung cho thẻ html
// đọc/lấy nội dung của thẻ
{
  /* <div>
    innerHTML: nội dung nằm bên trong thẻ thông thường (div, h, p, span,...)
</div> */
}
let contentText = text.innerHTML;
console.log("contentText: ", contentText);

// gán nội dung cho thẻ
text.innerHTML = "Em ăn cơm chưa?";

// tương tác với html bằng querySelector
// + khi gặp nhiều thẻ cùng 1 selector: chỉ lấy thẻ đầu tiên từ trên xuống
// let tagH3 = document.querySelector("h3");
let tagH3 = document.querySelector(".tag__h3");

console.log("tagH3: ", tagH3);

//tương tác với css
let title = document.querySelector(".title");
// style.tenThuocTinh: thay đổi style của thẻ
/*
    convert tên thuộc tính css => js
    color => color
    background => background
    font-size => fontSize 
    background-color => backgroundColor
*/
// title.style.color = "red";
// title.style.background = "gray";

// .classList.add: thêm class vào thẻ được dom tới
// .classList.remove: xóa class vào thẻ được dom tới
title.classList.add("title__main");
title.classList.add("test");
title.classList.remove("test");

// title.classList.add("title");

console.log("title.className", title.className);

// title.className = "title";
// title.className = "title1";
// title.className = "title2";
// title.className = "title3";

// title.className = title.className + " title3";
title.className += " title3";

// Bài tập
let tagP1 = document.querySelector(".content");
let tagP1Text = tagP1.innerHTML;
console.log("tagP1Text: ", tagP1Text);
tagP1.innerHTML = "Nội dung bất kì của thẻ p ngoài box";

let tagP2 = document.querySelector(".box .content");
let tagP2Text = tagP2.innerHTML;
console.log("tagP2Text: ", tagP2Text);
tagP2.innerHTML = "abc";
let box = document.querySelector(".box");
box.classList.add("style");

// tương tác với input
let firstName = document.querySelector("#firstName");
let contentFirstName = firstName.value;
console.log("contentFirstName: ", contentFirstName);

firstName.value = "Nguyễn Văn A";

//xử lý sự kiện
// cách đầu tiên
let formLogin = document.querySelector("#myForm");
// formLogin.onsubmit = function (event) {
//   console.log("event: ", event);
//   // trong này là code xử lý khi click btn
//   console.log("Tôi vừa mới click btn login");
//   //   preventDefault(): chặn sự kiện mặc định của thẻ
//   event.preventDefault();
//   // tất cả value lấy từ input về đề là string
//   let firstName = document.querySelector("#firstName").value;
//   let lastName = document.querySelector("#lastName").value;

//   //   document.querySelector("#result").innerHTML = firstName + " " + lastName;
//   //   templateString
//   document.querySelector("#result").innerHTML = `
//     <span class="text-red-500">${firstName}</span>
//     <span class="text-yellow-500">${lastName}</span>
//   `;
// };

// addEventListener: lắng nghe sự kiện cần thực hiện
// formLogin.addEventListener("submit", function (event) {
//   console.log("event: ", event);
//   // trong này là code xử lý khi click btn
//   console.log("Tôi vừa mới click btn login để gọi addEventListener");
//   //   preventDefault(): chặn sự kiện mặc định của thẻ
//   event.preventDefault();
//   // tất cả value lấy từ input về đề là string
//   let firstName = document.querySelector("#firstName").value;
//   let lastName = document.querySelector("#lastName").value;

//   //   document.querySelector("#result").innerHTML = firstName + " " + lastName;
//   //   templateString
//   document.querySelector("#result").innerHTML = `
//       <span class="text-red-500">${firstName}</span>
//       <span class="text-yellow-500">${lastName}</span>
//     `;
// });

function hanldeFormSubmit(event) {
  console.log("event: ", event);
  // trong này là code xử lý khi click btn
  console.log("Tôi vừa mới click btn login để gọi function hanldeFormSubmit");
  //   preventDefault(): chặn sự kiện mặc định của thẻ
  event.preventDefault();
  // tất cả value lấy từ input về đề là string
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;

  //   document.querySelector("#result").innerHTML = firstName + " " + lastName;
  //   templateString
  document.querySelector("#result").innerHTML = `
    <span class="text-red-500">${firstName}</span>
    <span class="text-yellow-500">${lastName}</span>
  `;
}

// bài tập bật, tắt đèn
/*
bước 1: input 
    dom được tới button bật, tắt, hình ảnh đèn

Bước 2: xử lý 
    thay đổi hình ảnh => thay đổi url của src thẻ img
*/
let batDen = document.querySelector("#batDen");
let tatDen = document.querySelector("#tatDen");
let image = document.querySelector("#den");

// batDen.onClick = function() {
//     /// code trong này
// }

function hanldeBatDen() {
  console.log("bật đèn");

  image.src = "./images/pic_bulbon.gif";
}

function hanldeTatDen() {
  console.log("bật đèn");

  image.src = "./images/pic_bulboff.gif";
}

batDen.addEventListener("click", hanldeBatDen);

tatDen.addEventListener("click", function () {
  image.src = "./images/pic_bulboff.gif";
});

//------------- create element ---------//
/*
  cú pháp: document.createElement('tagName');
  đưa thẻ vừa tạo lên giao diện:
    document.querySelector('id').appendChild(tag);

    khi sử dụng appendChild: 
    1. nơi mà cần in thẻ html vào (id, class, div)
    2. thẻ mà mình cần in
*/
let button = document.querySelector("#createTagP");

// button.onclick
button.addEventListener("click", function () {
  console.log("clicked btn");

  //tạo tag P
  let tagP = document.createElement("p");
  console.log("tagP: ", tagP);

  // gán nội dung cho tag P
  let textContent = document.querySelector("#textContent").value;
  tagP.innerHTML = textContent;
  console.log("tagP đã thêm nội dung: ", tagP);

  // đưa tag P lên giao diện
  let content = document.querySelector("#content");
  content.appendChild(tagP);
});

document.querySelector("#hanldeBackground").onclick = function (event) {
  // khi gọi sự kiện thì sự kiện sẽ trả về 1 event
  // event: sự kiện event là chính thẻ mà gọi sự kiện
  console.log("change bg", event);

  let content = document.querySelector("#content");
  // content.style.background = "red";
  // content.classList.remove("bg-gray-500");
  // content.classList.add("bg-red-500");
  // content.className += "bg-red-500";

  let targetBtn = event.target;
  console.log("targetBtn: ", targetBtn);
  // targetBtn.parentElement.parentElement.style.background = "red";
  targetBtn.closest("#content").style.background = "red";
};

// xử lý dark mode
document.querySelector("#darkMode").onclick = function () {
  console.log("dark mode");

  document.querySelector("body").classList.toggle("dark");
};
