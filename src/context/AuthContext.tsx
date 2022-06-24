import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CognitoUser } from '@aws-amplify/auth'
import { Auth, Hub } from 'aws-amplify'

interface UserContextType {
  user: CognitoUser | null
  setUser: Dispatch<SetStateAction<CognitoUser | null>>
  loading: boolean
}

const UserContext = createContext<UserContextType>({} as UserContextType)

interface Props {
  children: React.ReactElement
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null)
  const [loading, setLoading] = useState(false)
  console.log('🚀 ~ file: AuthContext.tsx ~ line 27 ~ AuthContext ~ user', user)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    Hub.listen('auth', () => {
      // perform some action to update state whenever an auth event is detected.
      checkUser()
    })
  }, [])

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser()
      if (amplifyUser) setUser(amplifyUser)
    } catch (error) {
      // No current signed in user.
      setUser(null)
      console.error(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useSession = (): UserContextType => useContext(UserContext)