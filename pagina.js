const basicAuth = btoa(
  `${"apikey"}:${"17be44a82d106ac77058c4b24a4896fb4c3cfaf090f379418a778265473cc6ec"}`
);
const apikey =
  "17be44a82d106ac77058c4b24a4896fb4c3cfaf090f379418a778265473cc6ec";
//  const basicAuth = btoa(`${"apikey"}:${"6463c1a8e24d301bfb601be136d3c0acdb2c918ab92ded4484ab421a2ad907b5"}`);

const baseURL = "http://localhost:8080/api/v3/";

async function Consulta(url, apikey, method = "GET", bodyData = null) {
  try {
    const response = await fetch(baseURL + url, {
      method: method,
      headers: {
        Authorization: "Basic " + btoa(`apikey:${apikey}`),
        "Content-Type": "application/json",
      },
      body: bodyData != null ? JSON.stringify(bodyData) : nul,
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }
    let data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos recibidos
  } catch (error) {
    console.error("Error al conectar con la API de OpenProject:", error);
    return null; // Return null explicitly on error
  }
}
document.getElementById("btnCargar").addEventListener("click", async () => {
  const apikey = document.getElementById("apikey").value;
  const lista = document.getElementById("listaProyectos");

  // Vaciar la lista anterior
  lista.innerHTML = "";

  const data = await HacerPeticion("projects", apikey);

  if (!data || !data._embedded || !data._embedded.elements) {
    lista.innerHTML = "<li>Error al cargar proyectos</li>";
    return;
  }

  const projects = data._embedded.elements.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = `Proyecto: ${project.name} (ID: ${project.id}) ${project.createdAt}`;
    lista.appendChild(li);
  });
});


fetch("http://localhost:8080/api/v3/work_packages", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicAuth}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then((data) => {
    const list = document.getElementById("entrada1");
    // La lista de proyectos viene en data._embedded.elements
    const projects = data._embedded.elements.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    projects.forEach((work_packages) => {
      // const li = document.createElement('li');
      // li.textContent = `Subject: ${work_packages.subject} (ID: ${work_packages.id})(Fecha de creacion: ${work_packages.id})`;
      // list.appendChild(li);

      const tr = document.createElement("tr");

      const tdSubject = document.createElement("td");
      tdSubject.textContent = work_packages.subject;
      tr.appendChild(tdSubject);

      const tdId = document.createElement("td");
      tdId.textContent = work_packages.id;
      tr.appendChild(tdId);

      const tdCreatedAt = document.createElement("td");
      tdCreatedAt.textContent = work_packages.createdAt;
      tdCreatedAt.setAttribute("class", "filtro");
      tr.appendChild(tdCreatedAt);

      list.appendChild(tr);
    });
  })
  .catch((error) => console.error("Error al obtener proyectos:", error));

fetch(
  `http://localhost:8080/api/v3/work_packages?filters=[{"duration":{"operator":"*","values":[null]}}]&sortBy=[["duration","desc"]]`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`,
    },
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then((data) => {
    const list = document.getElementById("entrada2");
    // La lista de proyectos viene en data._embedded.elements
    const projects = data._embedded.elements;

    projects.forEach((work_packages) => {
      // const li = document.createElement('li');
      // li.textContent = `Subject: ${work_packages.subject} (ID: ${work_packages.id})(Fecha de creacion: ${work_packages.createdAt})(Duracion: ${work_packages.duration})`;
      // list.appendChild(li);

      const tr = document.createElement("tr");

      const tdSubject = document.createElement("td");
      tdSubject.textContent = work_packages.subject;
      tr.appendChild(tdSubject);

      const tdId = document.createElement("td");
      tdId.textContent = work_packages.id;
      tr.appendChild(tdId);

      const tdCreatedAt = document.createElement("td");
      tdCreatedAt.textContent = work_packages.createdAt;
      tr.appendChild(tdCreatedAt);

      const tdDuration = document.createElement("td");
      tdDuration.textContent = work_packages.duration;
      tdDuration.setAttribute("class", "filtro");
      tr.appendChild(tdDuration);

      list.appendChild(tr);
    });
  })
  .catch((error) => console.error("Error al obtener proyectos:", error));
