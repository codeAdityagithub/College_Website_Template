const events_btn = document.querySelector(".events-btn");
const news_btn = document.querySelector(".news-btn");
const events_tab = document.querySelector(".events-tab");
const news_tab = document.querySelector(".news-tab");

const btns = document.querySelectorAll(".nav-dropdown");
const dialogs = document.querySelectorAll(".dialog");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active-nav")) {
      btn.classList.remove("active-nav");
    } else {
      btn.classList.add("active-nav");
    }
  });
});

events_btn.addEventListener("click", () => {
  events_tab.classList.add("active-tab");
  news_tab.classList.remove("active-tab");
  events_btn.classList.add("active-btn");
  news_btn.classList.remove("active-btn");
});
news_btn.addEventListener("click", () => {
  events_tab.classList.remove("active-tab");
  news_tab.classList.add("active-tab");
  events_btn.classList.remove("active-btn");
  news_btn.classList.add("active-btn");
});
