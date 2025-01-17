import type { IFifo, IFifoContext } from '@/types'

import { useState, useEffect, createContext } from 'react'
import { where, query, setDoc, addDoc, getDocs, collection } from 'firebase/firestore'

import { FirebaseDb } from '../auth/firebase/config'
import { useAuthContext } from '../auth/useAuthContext'

export const FifoContext = createContext<IFifoContext | undefined>(undefined)

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export const FifoProvider = ({ children }: IElement) => {
  const [data, setData] = useState<IFifo>({ userId: '', items: [] })
  const { userId } = useAuthContext()

  const getItemsFirebase = async (id: string) => {
    const q = query(collection(FirebaseDb, 'fifo'), where('userId', '==', id))
    const querySnapshot = await getDocs(q)
    const d = querySnapshot.docs.map((dc) => dc.data())
    if (d.length) setData(d[0] as IFifo)
  }

  const getItemsGuest = async () => {
    const d = localStorage.getItem('fifo')
    if (d) setData(JSON.parse(d) as IFifo)
  }

  const getItems = async (id: string) => {
    if (id === 'guest') {
      return getItemsGuest()
    }
    return getItemsFirebase(id)
  }

  const saveItemsFirebase = async (id: string, items: string[]) => {
    try {
      const q = query(collection(FirebaseDb, 'fifo'), where('userId', '==', id))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        await addDoc(collection(FirebaseDb, 'fifo'), {
          userId: id,
          items,
        })
      } else {
        const docRef = querySnapshot.docs[0].ref
        await setDoc(docRef, {
          userId: id,
          items,
        })
      }

      setData({ userId: id, items })
    } catch (error) {
      console.error('Error guardando items:', error)
    }
  }

  const saveItemsGuest = async (id: string, items: string[]) => {
    const d = JSON.stringify({ userId: id, items })
    localStorage.setItem('fifo', d)
  }

  const saveItems = async (id: string, items: string[]) => {
    if (id === 'guest') {
      return saveItemsGuest(id, items)
    }
    return saveItemsFirebase(id, items)
  }

  useEffect(() => {
    getItems(userId || 'guest')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FifoContext.Provider
      value={{
        data,
        setData,
        saveItems,
      }}
    >
      {children}
    </FifoContext.Provider>
  )
}
