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
      <h1 className="mb-10 w-auto text-center text-xl font-semibold text-gray-900 underline dark:text-white">
        Add items to the list
      </h1>
      <div className="flex w-auto flex-row items-center space-x-10">
        <section className="w-96 max-w-sm space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gray-900/90">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              id="item"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter item: e.g. 'Buy milk'"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={item === ''}
              className={`${item === '' ? 'cursor-not-allowed opacity-50' : ''} w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Add Item
            </button>
          </form>
          <button
            disabled={data.items.length === 0}
            className={`${data.items.length === 0 ? 'cursor-not-allowed opacity-50' : ''} w-full rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white dark:border-red-800 dark:text-red-500 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800`}
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
        <section className="w-96 max-w-sm space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gray-900/90">
          <h2 className="w-auto text-center text-lg font-semibold text-gray-900 dark:text-white">
            Items
          </h2>
          {data.items.length === 0 ? (
            <p className="text-center text-sm text-gray-900 dark:text-white">No items added yet</p>
          ) : (
            <ul className="w-auto rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
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
