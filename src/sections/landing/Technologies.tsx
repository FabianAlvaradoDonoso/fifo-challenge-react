export function Technologies() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Technologies Used</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong className="font-semibold">React</strong>: For building the user interface.
        </li>
        <li>
          <strong className="font-semibold">TypeScript</strong>: To ensure type safety and improve
          code quality.
        </li>
        <li>
          <strong className="font-semibold">Firebase</strong>:
          <ul className="ml-2 list-inside list-disc space-y-1 pl-4">
            <li>
              <em className="italic">Authentication</em>: For managing user login and registration.
            </li>
            <li>
              <em className="italic">Firestore/Database</em>: For persisting tasks of authenticated
              users.
            </li>
          </ul>
        </li>
        <li>
          <strong className="font-semibold">Tailwind CSS</strong>: For creating a modern and
          responsive design.
        </li>
      </ul>
    </section>
  )
}
