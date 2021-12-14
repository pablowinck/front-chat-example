const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const input = document.getElementById("text");
  const text = input.value;

  // testa se a String está vazia ou branca ex: "  "
  if (!text || /^\s*$/.test(text)) return;

  const content = document.querySelector(".messages");
  const contentItem = document.createElement("div");

  contentItem.classList.add("content-item");
  contentItem.innerHTML = `
                <div class="content-header">
                    <div class="avatar"></div>
                    <div class="name">Pablo Winter</div>
                </div>
                <div class="content-body">
                    <div class="text">${text}</div>
                </div>
            `;
  content.appendChild(contentItem);

  input.value = "";
  input.focus();
});
