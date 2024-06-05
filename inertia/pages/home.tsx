import Layout from "~/Layout";
import {Head, Link} from "@inertiajs/react";
import logo from '../../resources/images/logo.png';

export default function Home() {
  return (
    <Layout>
      <Head title={"Accueil"} />
      <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div className="py-6 md:order-1 hidden md:block">
          <picture>
            <img src={logo} alt=""/>
          </picture>
        </div>
        <div><h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Aquaponey club de l'écume enchantée
        </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">

          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
            href="/blog" target="_blank"
            rel="noopener"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center">
            Nos aventures
          </Link>
            <Link href="/" target="_blank"
                  className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center">
            Adherer
          </Link></div>
        </div>

      </main>

      <div className="mt-16 md:mt-0"><h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Bienvenue !
      </h2> <p className="text-lg mt-4 text-slate-600">
        Nous sommes ravis de vous accueillir dans un univers où l'amour des poneys rencontre le plaisir de l'eau. Que
        vous soyez un cavalier expérimenté ou un débutant curieux, notre club offre des activités et des programmes
        adaptés à tous les âges et niveaux.
      </p></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        <div className="flex gap-4 items-start">
          <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          </div>
          <div><h3 className="font-semibold text-lg">Cours d'Aqua Poney</h3>  <p
            className="text-slate-500 mt-2 leading-relaxed">Pour tous les niveaux, du débutant au confirmé. Apprenez à monter et à nager avec nos adorables poneys.</p></div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          </div>
          <div><h3 className="font-semibold text-lg">Stages et Camps</h3>  <p
            className="text-slate-500 mt-2 leading-relaxed">Pendant les vacances scolaires, offrez à vos enfants une expérience inoubliable avec nos stages et camps d'aqua poney.</p></div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          </div>
          <div><h3 className="font-semibold text-lg">Événements et Compétitions</h3>  <p
            className="text-slate-500 mt-2 leading-relaxed">Participez à nos événements spéciaux et compétitions pour montrer vos talents et rencontrer d'autres passionnés.</p></div>
        </div>
      </div>
    </Layout>
  )
}
