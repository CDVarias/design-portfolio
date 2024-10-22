function loadData() {
  const loaderVar = document.getElementById("loader-id");
  if (loaderVar) {
    setTimeout(() => {
      loaderVar.style.display = "none";
    }, 2000);
  }
}

export function loadDataOnPage() {
  window.addEventListener("load", loadData);
}
