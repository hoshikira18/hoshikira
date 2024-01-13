import Link from 'next/link'
import Image from 'next/image'
import Icon from '../../public/icon.png'

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto mb-4 px-5 items-center flex w-64 shadow-md justify-between space-x-5 rounded-xl bg-gray-400 py-3 text-background">
      <div className='flex justify-center'>
        <Image src={Icon} width={30} height={30} alt='icon' />
      </div>

      <div className="space-x-3 w-4/5 flex justify-center font-medium">
        <Link href={'/'}>Home</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/about'}>About</Link>
      </div>
    </div>
  )
}

export default Navigation
