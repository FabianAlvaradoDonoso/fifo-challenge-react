export function Features() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold">Features</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong className="font-semibold">User Authentication:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>
              Secure login and registration system implemented with{' '}
              <strong className="font-semibold">Firebase Authentication</strong>.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">Data Storage:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>
              Tasks are stored in <strong className="font-semibold">Firebase</strong> for
              authenticated users.
            </li>
            <li>
              Guest users manage tasks locally using{' '}
              <strong className="font-semibold">localStorage</strong>.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">Responsive Design:</strong>
          <p className="mt-1 pl-6">
            A clean and minimalist interface, designed with{' '}
            <strong className="font-semibold">Tailwind CSS</strong>, adapted for different screen
            sizes.
          </p>
        </li>

        <li>
          <strong className="font-semibold">Business Rules Compliance:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-6">
            <li>Duplicate tasks are not allowed.</li>
            <li>The &quot;Add&quot; button is disabled when the text field is empty.</li>
            <li>Tasks are processed following a FIFO scheme.</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
