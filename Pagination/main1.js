const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
];
const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DisplayList(list_items, list_element, rows, page) {
  list_element.innerHTML = "";
  page--;
  let start = rows * page;
  let end = start + rows;
  let paginatedItems = list_items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerText = item;

    list_element.appendChild(item_element);
  }
}
function SetupPagination(list_items, pagination_element, rows) {
  pagination_element.innerHTML = "";
  let page_count = Math.ceil(list_items.length / rows);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, list_items);
    pagination_element.appendChild(btn);
  }
}
function PaginationButton(page, list_items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(list_items, list_element, rows, current_page);
    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
