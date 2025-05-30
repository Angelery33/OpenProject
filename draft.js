 fetch("http://localhost:8080/api/v3/projects", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`
    },
  })
  .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json(); // Convertimos la respuesta a JSON
    })
      .then(data => {
      const list = document.getElementById('entrada3');
      // La lista de proyectos viene en data._embedded.elements
     const projects = data._embedded.elements.sort((b,a) => new Date(b.createdAt) - new Date(a.createdAt));

      projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `Proyecto: ${project.name} (ID: ${project.id}) ${project.createdAt}`;
        list.appendChild(li);
      });

    })
    .catch(error => console.error('Error al obtener proyectos:', error));




    fetch("http://localhost:8080/api/v3/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`
    },
  })
  .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json(); // Convertimos la respuesta a JSON
    })
      .then(data => {
      const list = document.getElementById('entrada3');
      // La lista de proyectos viene en data._embedded.elements
      const projects = data._embedded.elements.filter(paco => (paco.id <= 5 ));

      projects.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Proyecto: ${user.name} (ID: ${user.id})`;
        list.appendChild(li);
      });
    })
    .catch(error => console.error('Error al obtener proyectos:', error));

