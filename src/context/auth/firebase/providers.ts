import type { IAuthStateContext } from '@/types'

import { getDocs, collection } from 'firebase/firestore'
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { FirebaseDb, FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    return result.user
  } catch (e) {
    alert((e as Error).message)
    return null
  }
}

interface PropsRegister {
  email: string
  password: string
}

export const signInWithCredentials = async ({ email, password }: PropsRegister) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)

    return resp.user
  } catch (e) {
    alert((e as Error).message)
    return null
  }
}

export const loginWithCredentials = async ({ email, password }: PropsRegister) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    return resp.user
  } catch (e) {
    alert((e as Error).message)
    return null
  }
}

type StateDispatch = React.Dispatch<
  React.SetStateAction<Pick<IAuthStateContext, 'status' | 'userId' | 'userName'>>
>

export const onAuthStateHasChanged = (setSession: StateDispatch) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: 'no-authenticated', userId: null, userName: null })

    setSession({ status: 'authenticated', userId: user!.uid, userName: user!.displayName })
    return null
  })
}

export const logoutFirebase = async () => await FirebaseAuth.signOut()

export const getItemsByUser = async (userId: string) => {
  const productsRef = collection(FirebaseDb, 'fifo')
  const querySnapshot = await getDocs(productsRef)
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return products
}
