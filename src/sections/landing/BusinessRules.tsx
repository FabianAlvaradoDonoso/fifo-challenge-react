export function BusinessRules() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Business Rules</h2>
      <ol className="mb-6 list-decimal space-y-1 pl-6">
        <li>Avoid duplicates: Adding repeated tasks is not allowed.</li>
        <li>
          Text field validation: The &quot;Add&quot; button is only enabled if the text field
          contains information.
        </li>
        <li>FIFO Management: Tasks are processed in the order they are added.</li>
      </ol>
    </section>
  )
}
