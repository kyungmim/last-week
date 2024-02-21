import "@/styles/main.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "@/assets/santa.png";

import { button } from "@/styles/main.module.css";

// 동적 자산 (assets) 이미지를 가져오는 방법

console.log(santa);

const app = getNode("#app");

const template = `
  <figure class="container ">
    <img style="width:30vw" src="${santa}" />
    <figcaption>산타모자를 쓴 호랑이 로고</figcaption>
  </figure>
  <button class="${button}" type="button">버튼</button>
`;

insertLast(app, template);

console.log(app);
