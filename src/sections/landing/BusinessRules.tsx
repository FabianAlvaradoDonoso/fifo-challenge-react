export function BusinessRules() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Reglas de Negocio</h2>
      <ol className="mb-6 list-decimal space-y-1 pl-6">
        <li>Evitar duplicados: No se permite añadir tareas repetidas.</li>
        <li>
          Validación del campo de texto: El botón &quot;Añadir&quot; solo está habilitado si el
          campo de texto contiene información.
        </li>
        <li>Gestión FIFO: Las tareas se procesan en el orden en que se añaden.</li>
      </ol>
    </section>
  )
}
