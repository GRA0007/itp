import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAHeIAMzbw3n0zWdTwmUBNdDYqXG0vzIn4",
  authDomain: "ilo-toki-pona.firebaseapp.com",
  projectId: "ilo-toki-pona",
  storageBucket: "ilo-toki-pona.appspot.com",
  messagingSenderId: "330400170989",
  appId: "1:330400170989:web:c00d14dea32720b042dde4",
  measurementId: "G-KXVPYH4N0J"
}

const app = initializeApp(firebaseConfig)

if (process.env.NODE_ENV !== 'development') getAnalytics(app)

export default app