import {Link} from "@inertiajs/react";

export default function () {
  return (<header className="flex flex-col lg:flex-row justify-between items-center my-5">
      <div className="flex w-full lg:w-auto items-center justify-between"><Link href="/" className="text-lg"><span
        className="font-bold text-slate-800">AquaPoney</span><span className="text-slate-500">Club</span> </Link>
      </div>
      <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          <li><Link href="/" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
            <span> Accueil</span> </Link></li>
          <li><Link href="/blog" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
            <span> Le club</span> </Link></li>
          <li><a href="/contact" className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900">
            <span> Contact</span> </a></li>
        </ul>
      </nav>
      <div>
        <div className="flex items-center gap-4">
          <a href="/admin" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent">
            Espace membre
          </a>
        </div>
      </div>
    </header>)
}
