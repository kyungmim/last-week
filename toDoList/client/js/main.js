import {
  getNode as $,
  clearContents,
  insertLast,
  setStorage,
  getStorage,
} from "../lib/index.js";

const form = $(".form");
const input = $(".form__input");
const list = $(".toDoList");

let todoArray = [];

const createItem = (value, id) => {
  return `<li data-id="${id}">${value}</li>`;
};

const renderItem = ({ target, todoItem, id }) => {
  insertLast(target, createItem(todoItem, id));
};

const addItemArray = (id, todoItem) => {
  todoArray.push({ id, todoItem });
  console.log(todoArray);
};

const removeItem = (id) => {
  const li = $(`[data-id = "${id}"]`);
  li.remove();
};

const removeItemArray = (id) => {
  todoArray = todoArray.filter((item) => item.id !== +id);
  console.log(todoArray);
};

function handleSubmit(e) {
  e.preventDefault();

  const todoItem = input.value;
  const id = Date.now();

  renderItem({ target: list, todoItem, id });

  addItemArray(id, todoItem);
  clearContents(input);

  setStorage("todo", todoArray);
}

function handleRemove(e) {
  const target = e.target;
  const id = target.dataset.id;

  if (!target) return;

  removeItem(id);
  removeItemArray(id);

  setStorage("todo", todoArray);
}

form.addEventListener("submit", handleSubmit);
list.addEventListener("click", handleRemove);

(async () => {
  const data = await getStorage("todo");

  if (!data) return;

  data?.forEach(({ todoItem, id }) => {
    renderItem({ target: list, todoItem, id });
  });
})();
