import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import ConnectButton from './ConnectButton'

const Navbar: FC = () => {
	return (
		<div className="fixed left-0 top-0 flex w-full px-4 py-4 items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
			<Link href="/">Home</Link>
			<ConnectButton />
		</div>
	)
}

export default Navbar
