import { useState } from 'react'
import { useAuthContext } from '@/context/auth/useAuthContext'
import { useFifoContext } from '@/context/fifo/useFifoContext'

const IndexPage = () => {
  const { handleLogOut, userId } = useAuthContext()
  const [item, setItem] = useState<string>('')
  const { data, setData, saveItems } = useFifoContext()

  return (
    <section className="flex w-auto flex-row items-center space-x-4">
      <section className="space-y-3">
        <label
          htmlFor="item"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Item
        </label>
        <input
          type="text"
          id="item"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <button
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            if (data.items.length >= 5) {
              return
            }

            const newItem = {
              userId: userId ? userId : '',
              items: [...data.items, item],
            }

            setData(newItem)
            saveItems(userId ? userId : '', newItem.items)
            setItem('')
          }}
        >
          Add Item
        </button>
        <button
          className="mt-3 w-full rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white dark:border-red-800 dark:text-red-500 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800"
          onClick={() => {
            if (data.items.length === 0) {
              return
            }

            const newItem = {
              userId: userId ? userId : '',
              items: data.items.slice(1),
            }

            setData(newItem)
            saveItems(userId ? userId : '', newItem.items)
          }}
        >
          Attend item
        </button>
        <button
          className="mt-3 w-full rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white dark:border-blue-800 dark:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </section>

      <section className="flex flex-col content-start justify-items-start">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Items</h2>
        <ul className="mt-2 space-y-2">
          {data.items.map((el, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">→{el}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default IndexPage
