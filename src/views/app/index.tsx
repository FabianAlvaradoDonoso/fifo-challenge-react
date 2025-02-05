import { toast } from 'sonner'
import { useState } from 'react'
import { useAuthContext } from '@/context/auth/useAuthContext'
import { useFifoContext } from '@/context/fifo/useFifoContext'

const IndexPage = () => {
  const { userId } = useAuthContext()
  const [item, setItem] = useState<string>('')
  const { data, setData, saveItems } = useFifoContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!item) {
      toast.error('Please enter an item')
      return
    }

    if (data.items.filter((el) => el === item).length > 0) {
      toast.error('Item duplicated')
      return
    }

    if (data.items.length >= 5) {
      toast.error('You can only add up to 5 items')
      return
    }

    const newItem = {
      userId: userId ? userId : '',
      items: [...data.items, item],
    }

    setData(newItem)
    saveItems(userId ? userId : 'guest', newItem.items)
    setItem('')
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 w-auto text-center text-xl font-semibold text-gray-800 underline md:mb-10 dark:text-gray-300">
        Add items to the list
      </h1>
      <div className="flex w-auto flex-col space-y-5 md:flex-row md:items-center md:space-x-10">
        <section className="w-72 max-w-sm space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow lg:w-96 dark:border-gray-700 dark:bg-gray-800 dark:bg-gray-900/90">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              id="item"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter item: e.g. 'Buy milk'"
              value={item}
              autoComplete="off"
              onChange={(e) => setItem(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={item === ''}
              className={`${item === '' ? 'cursor-not-allowed bg-blue-500/60' : 'bg-blue-500 hover:bg-blue-700'} w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium`}
            >
              Add Item
            </button>
          </form>
          <button
            disabled={data.items.length === 0}
            className={`${data.items.length === 0 ? 'cursor-not-allowed border-red-500/60 text-red-500/60' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-800 dark:text-red-800 dark:hover:bg-red-800 dark:hover:text-white'} w-full rounded-lg border px-5 py-2.5 text-center text-sm font-medium`}
            onClick={() => {
              if (data.items.length === 0) {
                return
              }

              const newItem = {
                userId: userId ? userId : '',
                items: data.items.slice(1),
              }

              setData(newItem)
              saveItems(userId ? userId : 'guest', newItem.items)
            }}
          >
            Attend item
          </button>
        </section>
        <section className="w-72 max-w-sm space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow lg:w-96 dark:border-gray-700 dark:bg-gray-800 dark:bg-gray-900/90">
          <h2 className="w-auto text-center text-lg font-semibold text-gray-900 dark:text-gray-300">
            Items
          </h2>
          {data.items.length === 0 ? (
            <p className="text-center text-sm text-gray-900 dark:text-gray-300">
              No items added yet
            </p>
          ) : (
            <ul className="w-auto rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
              {data.items.map((el, index) => (
                <li
                  key={index}
                  className={`w-full rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600 ${index !== data.items.length - 1 && 'border-b'}`}
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default IndexPage
