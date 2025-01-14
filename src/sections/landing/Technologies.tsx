export function Technologies() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Tecnologías Utilizadas</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong className="font-semibold">React</strong>: Para la construcción de la interfaz de
          usuario.
        </li>
        <li>
          <strong className="font-semibold">TypeScript</strong>: Para garantizar la seguridad de
          tipos y mejorar la calidad del código.
        </li>
        <li>
          <strong className="font-semibold">Firebase</strong>:
          <ul className="ml-2 list-inside list-disc space-y-1 pl-4">
            <li>
              <em className="italic">Authentication</em>: Para gestionar el inicio de sesión y
              registro de usuarios.
            </li>
            <li>
              <em className="italic">Firestore/Database</em>: Para persistir las tareas de los
              usuarios autenticados.
            </li>
          </ul>
        </li>
        <li>
          <strong className="font-semibold">Tailwind CSS</strong>: Para crear un diseño moderno y
          responsivo.
        </li>
      </ul>
    </section>
  )
}
