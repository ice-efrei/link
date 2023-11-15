import Redirection from '@/components/redirection'
import SimpleCards from '@/components/simplecards'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen p-10'>
      <Redirection />
      <SimpleCards />
    </main>
  )
}
