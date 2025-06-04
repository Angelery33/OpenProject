// const apikey =
//   "17be44a82d106ac77058c4b24a4896fb4c3cfaf090f379418a778265473cc6ec";
const apikey =
  "09899365ed55e01666f2ca96d6dc4649eee9e97809c71db4a296d0e946da6efd";
const basicAuth = btoa(`${"apikey"}:${apikey}`);
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
    const contenedor = document.getElementById("entrada1");
    // La lista de proyectos viene en data._embedded.elements
    const projects = data._embedded.elements.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const elementoTabla = document.createElement("table");

    const cabecera = document.createElement("tr");

    const thSubject = document.createElement("th");
    thSubject.textContent = "Subject";
    cabecera.appendChild(thSubject);

    const thId = document.createElement("th");
    thId.textContent = "ID";
    cabecera.appendChild(thId);

    const thFecha = document.createElement("th");
    thFecha.textContent = "Fecha de creación";
    cabecera.appendChild(thFecha);

    elementoTabla.appendChild(cabecera);

    projects.forEach((work_packages) => {
      // const li = document.createElement('li');
      // li.textContent = `Subject: ${work_packages.subject} (ID: ${work_packages.id})(Fecha de creacion: ${work_packages.id})`;
      // list.appendChild(li);

      const elementoTr = document.createElement("tr");

      const tdSubject = document.createElement("td");
      tdSubject.textContent = work_packages.subject;
      elementoTr.appendChild(tdSubject);

      const tdId = document.createElement("td");
      tdId.textContent = work_packages.id;
      elementoTr.appendChild(tdId);

      const tdCreatedAt = document.createElement("td");
      tdCreatedAt.textContent = work_packages.createdAt;
      tdCreatedAt.setAttribute("class", "filtro");
      elementoTr.appendChild(tdCreatedAt);

      elementoTabla.appendChild(elementoTr);
    });
    contenedor.appendChild(elementoTabla);
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
    const contenedor = document.getElementById("entrada2");
    // La lista de proyectos viene en data._embedded.elements
    const projects = data._embedded.elements.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const elementoTabla = document.createElement("table");

    const cabecera = document.createElement("tr");

    const thSubject = document.createElement("th");
    thSubject.textContent = "Subject";
    cabecera.appendChild(thSubject);

    const thId = document.createElement("th");
    thId.textContent = "ID";
    cabecera.appendChild(thId);

    const thFecha = document.createElement("th");
    thFecha.textContent = "Fecha de creación";
    cabecera.appendChild(thFecha);

    const tdDuration = document.createElement("th");
    tdDuration.textContent = "Horas de trabajo";
    cabecera.appendChild(tdDuration);

    elementoTabla.appendChild(cabecera);

    projects.forEach((work_packages) => {
      // const li = document.createElement('li');
      // li.textContent = `Subject: ${work_packages.subject} (ID: ${work_packages.id})(Fecha de creacion: ${work_packages.id})`;
      // list.appendChild(li);

      const elementoTr = document.createElement("tr");

      const tdSubject = document.createElement("td");
      tdSubject.textContent = work_packages.subject;
      elementoTr.appendChild(tdSubject);

      const tdId = document.createElement("td");
      tdId.textContent = work_packages.id;
      elementoTr.appendChild(tdId);

      const tdCreatedAt = document.createElement("td");
      tdCreatedAt.textContent = work_packages.createdAt;
      elementoTr.appendChild(tdCreatedAt);

      const tdDuration = document.createElement("td");
      tdDuration.textContent = work_packages.duration;
      tdDuration.setAttribute("class", "filtro");
      elementoTr.appendChild(tdDuration);

      elementoTabla.appendChild(elementoTr);
    });
    contenedor.appendChild(elementoTabla);
  })
  .catch((error) => console.error("Error al obtener proyectos:", error));

fetch(`http://localhost:8080/api/v3/work_packages`, {
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
    const contenedor = document.getElementById("entrada3");
    // La lista de proyectos viene en data._embedded.elements
    const projects = data._embedded.elements.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const elementoTabla = document.createElement("table");

    const cabecera = document.createElement("tr");

    const thSubject = document.createElement("th");
    thSubject.textContent = "Subject";
    cabecera.appendChild(thSubject);

    const thId = document.createElement("th");
    thId.textContent = "ID";
    cabecera.appendChild(thId);

    const thFecha = document.createElement("th");
    thFecha.textContent = "Fecha de creación";
    cabecera.appendChild(thFecha);

    const tdDuration = document.createElement("th");
    tdDuration.textContent = "Horas de trabajo";
    cabecera.appendChild(tdDuration);

    const tdproyecto = document.createElement("th");
    tdproyecto.textContent = "Proyecto";
    cabecera.appendChild(tdproyecto);

    elementoTabla.appendChild(cabecera);

    projects.forEach((work_packages) => {
      // const li = document.createElement('li');
      // li.textContent = `Subject: ${work_packages.subject} (ID: ${work_packages.id})(Fecha de creacion: ${work_packages.id})`;
      // list.appendChild(li);

      const elementoTr = document.createElement("tr");

      const tdSubject = document.createElement("td");
      tdSubject.textContent = work_packages.subject;
      elementoTr.appendChild(tdSubject);

      const tdId = document.createElement("td");
      tdId.textContent = work_packages.id;
      elementoTr.appendChild(tdId);

      const tdCreatedAt = document.createElement("td");
      tdCreatedAt.textContent = work_packages.createdAt;
      elementoTr.appendChild(tdCreatedAt);

      const tdDuration = document.createElement("td");
      tdDuration.textContent = work_packages?.duration || "Sin definir";
      elementoTr.appendChild(tdDuration);

      const tdproyecto = document.createElement("td");
      tdproyecto.textContent =
        work_packages._links.project?.title || "Sin nombre";
      tdproyecto.setAttribute("class", "filtro");
      elementoTr.appendChild(tdproyecto);

      elementoTabla.appendChild(elementoTr);
    });
    contenedor.appendChild(elementoTabla);
  })
  .catch((error) => console.error("Error al obtener proyectos:", error));
