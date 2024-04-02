'use client'

function Listings() {
	return (
		<main className="flex min-h-screen flex-col p-12 pt-24 gap-4">
			<div className="w-fit p-4 border-2 border-gray-400 rounded-lg">
				<p>Price: x USD</p>
				<p>Balance: x TKN</p>
			</div>

			<div className="p-4 border-2 border-gray-400 rounded-lg flex flex-col">
				<p className="text-lg">Meowing</p>
			</div>
		</main>
	)
}

export default Listings
