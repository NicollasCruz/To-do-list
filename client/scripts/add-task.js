function addTask() {
  let nome = document.querySelector("#nomeTask").value;
  let prazo = document.querySelector("#prazoTask").value;
  let descricao = document.querySelector("#descricaoTask").value;

  let div = document.createElement("div");
  div.classList.add("novaTarefa");

  let liNome = document.createElement("li");
  let liPrazo = document.createElement("li");
  let liDesc = document.createElement("li");

  let remove = document.createElement("button");
  remove.classList.add("remover");

  let imgRemove = document.createElement("img");
  imgRemove.src = "../images/x.svg";

  let addNome = document.createTextNode("Nome: " + nome);
  let addPrazo = document.createTextNode("Prazo: " + prazo);
  let addDesc = document.createTextNode("Drescrição: " + descricao);

  liNome.appendChild(addNome);
  liPrazo.appendChild(addPrazo);
  liDesc.appendChild(addDesc);
  remove.appendChild(imgRemove);

  div.appendChild(liNome);
  div.appendChild(liPrazo);
  div.appendChild(liDesc);
  div.appendChild(remove);
  document.getElementById("tarefas").appendChild(div);

  remove.addEventListener("click", () => {
    div.parentNode.removeChild(div);
  });
}

export default addTask;
