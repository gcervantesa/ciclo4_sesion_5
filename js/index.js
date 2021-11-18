let empleados = [];

const $form = document.getElementById('form'),
  $modal = document.getElementById('exampleModal'),
  $template = document.getElementById('row-persona').content,
  $fragment = document.createDocumentFragment(),
  $listado = document.querySelector('.lista-empleados');
console.log($template);

const guardar = () => {
  let nombre = $form.nombre.value,
    doc = $form.documento.value,
    tel = $form.telefono.value,
    correo = $form.correo.value;

  if (!nombre.trim() || !doc.trim() || !tel.trim() || !correo.trim()) {
    alert('Todos los datos son necesarios');
    return;
  }

  let persona = {
    nombre,
    doc,
    tel,
    correo,
  };

  empleados.push(persona);

  console.log(empleados);

  alert('Guardado con exito');
  $form.reset();
};

const listar = () => {
  $listado.innerHTML = '';

  if (empleados.length === 0) {
    $listado.innerHTML = `
    <tr>
      <td colspan="4">No hay datos guardados</td>
    </tr>`;
    return;
  }

  empleados.forEach((empleado) => {
    let $clone = $template.cloneNode(true);
    $clone.querySelector('.row-nom').textContent = empleado.nombre;
    $clone.querySelector('.row-doc').textContent = empleado.doc;
    $clone.querySelector('.row-tel').textContent = empleado.tel;
    $clone.querySelector('.row-correo').textContent = empleado.correo;
    $fragment.appendChild($clone);
  });

  $listado.appendChild($fragment);
};

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-guardar')) {
    guardar();
  }

  if (e.target.matches('.btn-listar')) {
    listar();
  }
});
