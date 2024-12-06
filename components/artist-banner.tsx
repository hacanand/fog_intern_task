import { BadgeCheck } from 'lucide-react'

export function ArtistBanner() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-lg">
      <img
        src="/placeholder.svg"
        alt="Michael Jackson performing"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center">
          <BadgeCheck className="mr-2 h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">Verified Artist</span>
        </div>
        <h1 className="mt-2 text-4xl font-bold text-white">Michael Jackson</h1>
        <p className="mt-1 text-sm text-gray-300">27,852,501 monthly listeners</p>
      </div>
    </div>
  )
}
