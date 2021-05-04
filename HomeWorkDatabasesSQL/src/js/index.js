import "../css/style.css";

const url = "http://localhost:5051/databases/mySQL";

const init = () => {
  const content = document.querySelector(".content");
  const all_residents_count = document.querySelector("#all_residents_count");
  const average_residents_age = document.querySelector(
    "#average_residents_age"
  );
  const alphabetical_surnames_without_repetitions = document.querySelector(
    "#alphabetical_surnames_without_repetitions"
  );
  const surnames_with_repeat_count = document.querySelector(
    "#surnames_with_repeat_count"
  );
  const surnames_with_midle_b = document.querySelector(
    "#surnames_with_midle_b"
  );
  const without_home_list = document.querySelector("#without_home_list");
  const minors_Pravdy_Avenue = document.querySelector("#minors_Pravdy_Avenue");
  const alphabetical_streets_with_how_many_residents = document.querySelector(
    "#alphabetical_streets_with_how_many_residents"
  );
  const consists_six_letters = document.querySelector("#consists_six_letters");
  const streets_less_then_three_residents = document.querySelector(
    "#streets_less_then_three_residents"
  );
  all_residents_count.addEventListener("click", (e) =>
    getRequest(url, "?option=1").then((data) =>
      render_all_residents_count(data, content)
    )
  );
  average_residents_age.addEventListener("click", (e) => {
    getRequest(url, "?option=2").then((data) =>
      render_average_residents_age(data, content)
    );
  });
  alphabetical_surnames_without_repetitions.addEventListener("click", (e) => {
    getRequest(url, "?option=3").then((data) =>
      render_alphabetical_surnames_without_repetitions(data, content)
    );
  });
  surnames_with_repeat_count.addEventListener("click", (e) => {
    getRequest(url, "?option=4").then((data) =>
      render_surnames_with_repeat_count(data, content)
    );
  });
  surnames_with_midle_b.addEventListener("click", (e) => {
    getRequest(url, "?option=5").then((data) =>
      render_surnames_with_midle_b(data, content)
    );
  });
  without_home_list.addEventListener("click", (e) => {
    getRequest(url, "?option=6").then((data) =>
      render_without_home_list(data, content)
    );
  });
  minors_Pravdy_Avenue.addEventListener("click", (e) => {
    getRequest(url, "?option=7").then((data) =>
      render_minors_Pravdy_Avenue(data, content)
    );
  });
  alphabetical_streets_with_how_many_residents.addEventListener(
    "click",
    (e) => {
      getRequest(url, "?option=8").then((data) =>
        render_alphabetical_streets_with_how_many_residents(data, content)
      );
    }
  );
  consists_six_letters.addEventListener("click", (e) => {
    getRequest(url, "?option=9").then((data) =>
      render_consists_six_letters(data, content)
    );
  });
  streets_less_then_three_residents.addEventListener("click", (e) => {
    getRequest(url, "?option=10").then((data) =>
    render_streets_less_then_three_residents(data, content)
    );
  });
};

init();

const getRequest = async (url, query_param) => {
  const responce = await fetch(url + query_param);
  return responce.json();
};

const render_all_residents_count = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newp = document.createElement("p");
  newDiv.setAttribute("class", "body__title");
  newDiv.appendChild(newp);
  newp.textContent = `Общее число жителей : ${data[0].count}`;
  node.appendChild(newDiv);
};
const render_average_residents_age = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newp = document.createElement("p");
  newDiv.setAttribute("class", "body__title");
  newDiv.appendChild(newp);
  newp.textContent = `Средний возраст жителей : ${data[0].avg_AGE} лет`;
  node.appendChild(newDiv);
};

const render_alphabetical_surnames_without_repetitions = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список фамилий по алфавиту без повторений`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${data[i].LASTNAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};

const render_surnames_with_repeat_count = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список фамилий и количество их повторений`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `Фамилия ${data[i].LASTNAME} , Количество повторений : ${data[i].REPEAT_COUNT}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};

const render_surnames_with_midle_b = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список фамилий и c буквой 'б' по центру`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) Фамилия ${data[i].LASTNAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};

const render_without_home_list = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список людей у которых нет дома :(`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${data[i].FIRSTNAME} ${data[i].LASTNAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};

const render_minors_Pravdy_Avenue = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список несовершеннолетних людей, проживающих на проспекте Правды`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${data[i].FIRSTNAME} ${data[i].LASTNAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};
const render_alphabetical_streets_with_how_many_residents = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список несовершеннолетних людей, проживающих на проспекте Правды`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${
      data[i].NAME
    } на которой количество жильцов равно ${data[i].NUMBER_NAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};

const render_consists_six_letters = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список улиц состоящих из 6 букв`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${data[i].NAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};
const render_streets_less_then_three_residents = (data, node) => {
  node.innerHTML = "";
  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");
  const newH1 = document.createElement("h1");
  newDiv.setAttribute("class", "content__body");
  newUl.setAttribute("class", "body__ul");
  newH1.setAttribute("class", "body__title");
  newH1.textContent = `Список улиц с количеством жильцов на них меньших 3`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newUl);
  for (let i = 0; i < data.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newLi.setAttribute("class", "body__item");
    newP.setAttribute("class", "body__item-text");
    newP.textContent = `${i + 1}) ${data[i].NAME}, на которой количество жильцов: ${data[i].NUMBER_NAME}`;
    newLi.appendChild(newP);
    newUl.appendChild(newLi);
  }
  node.appendChild(newDiv);
};
