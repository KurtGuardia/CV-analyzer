import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'
import Navbar from '~/components/Navbar'

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } =
    usePuterStore()
  const navigate = useNavigate()
  const [files, setFiles] = useState<FSItem[]>([])

  const loadFiles = async () => {
    const files = (await fs.readDir('./')) as FSItem[]
    setFiles(files)
  }

  useEffect(() => {
    loadFiles()
  }, [])

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate('/auth?next=/wipe')
    }
  }, [isLoading])

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path)
    })
    await kv.flush()
    loadFiles()
    navigate('/')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  return (
    <main className="bg-[url('images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className='main-section'>
        <div className='page-heading'>
          <h1>Wipe App Data</h1>
          <p>Authenticated as: {auth.user?.username}</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <h2>Existing files:</h2>
          <ul className='list-disc list-inside'>
            {files.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 gap-4'>
          <button
            className='bg-red-800 text-white px-3 py-2 rounded-md cursor-pointer w-fit text-xl font-semibold'
            onClick={() => handleDelete()}
          >
            Wipe App Data
          </button>
        </div>
      </section>
    </main>
  )
}

export default WipeApp
