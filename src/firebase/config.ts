import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBrnEKBqPKmmHZ_LjJdQxiSB2qiqTnEtPo',
  authDomain: 'fifo-challenge-react.firebaseapp.com',
  projectId: 'fifo-challenge-react',
  storageBucket: 'fifo-challenge-react.firebasestorage.app',
  messagingSenderId: '826437308287',
  appId: '1:826437308287:web:596ea6b8a0f8f252f2544a',
  measurementId: 'G-NXWSXPT1QY',
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
