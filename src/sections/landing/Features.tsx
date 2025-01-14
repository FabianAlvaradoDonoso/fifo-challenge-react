export function Features() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Características</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong className="font-semibold">Autenticación de Usuarios:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>
              Sistema de inicio de sesión y registro seguro implementado con{' '}
              <strong className="font-semibold">Firebase Authentication</strong>.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">Almacenamiento de Datos:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>
              Las tareas se almacenan en <strong className="font-semibold">Firebase</strong> para
              usuarios autenticados.
            </li>
            <li>
              Los usuarios invitados gestionan las tareas localmente mediante{' '}
              <strong className="font-semibold">localStorage</strong>.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">Diseño Responsivo:</strong>
          <p className="mt-1 pl-6">
            Interfaz limpia y minimalista, diseñada con{' '}
            <strong className="font-semibold">Tailwind CSS</strong>, adaptada para diferentes
            tamaños de pantalla.
          </p>
        </li>

        <li>
          <strong className="font-semibold">Cumplimiento de Reglas de Negocio:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>No se permiten tareas duplicadas.</li>
            <li>El botón &quot; Añadir&quot; se desactiva cuando el campo de texto está vacío.</li>
            <li>Las tareas se procesan siguiendo un esquema FIFO.</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
