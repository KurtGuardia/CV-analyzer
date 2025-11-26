import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'

export const meta = () => [
  { title: 'Resumind | Auth' },
  { name: 'description', content: 'Log into your account' },
]

export default function auth() {
  const { isLoading, auth } = usePuterStore()
  const location = useLocation()
  const navigate = useNavigate()
  const next = location.search.split('next=')[1]

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next)
  }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('images/bg-main.svg')] bg-cover min-h-screen flex flex-col gap-18 items-center">
      <div className='flex flex-col gap-4 bg-white rounded-2xl p-10 mx-8'>
        <h2>
          You need a Puter account to use Resumind's AI
          features - don't worry it won't even ask your
          credit card :)
        </h2>
        <h3>
          If the Verify popup won't close automatically,
          manually do it and press Continue again on the
          Puter popup and create a free account
        </h3>
      </div>
      <div className='gradient-border-shadow-lg'>
        <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
          <div className='flex flex-col items-center gap-2 text-center'>
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='auth-button animate-pulse'>
                <p>Signing you in....</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button
                    className='auth-button'
                    onClick={auth.signOut}
                  >
                    <p> Log Out</p>
                  </button>
                ) : (
                  <button
                    className='auth-button'
                    onClick={auth.signIn}
                  >
                    <p>Log in</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
