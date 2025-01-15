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

  const getItems = async (id: string) => {
    const q = query(collection(FirebaseDb, 'fifo'), where('userId', '==', id))
    const querySnapshot = await getDocs(q)
    const d = querySnapshot.docs.map((dc) => dc.data())
    if (d.length) setData(d[0] as IFifo)
  }

  const saveItems = async (id: string, items: string[]) => {
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

  useEffect(() => {
    if (userId) {
      getItems(userId)
    }
  }, [userId])

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
