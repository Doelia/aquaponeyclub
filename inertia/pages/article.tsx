import Layout from "~/Layout";
import {Head, Link} from "@inertiajs/react";
import {formatBlogBody} from "~/lib/functions";

export default function ({article}) {

  const dateFrench = new Date(article.created_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // nl2br

  return (
    <Layout>
      <Head title={article.title} />
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mx-auto max-w-3xl mt-14"><span
          className="text-blue-400 uppercase tracking-wider text-sm font-medium"> Article </span> <h1
          className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight"> {article.title} </h1>
          <div className="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap"><span className="text-gray-400"> AquaPoney Club </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400"> {dateFrench}</span>
            <span className="text-gray-400 hidden md:block">•</span>
            <div className="w-full md:w-auto flex flex-wrap gap-3"><span
              className="text-sm text-gray-500">#aquaponey</span><span
              className="text-sm text-gray-500">#cestsuper</span></div>
          </div>
        </div>
        <div className="mx-auto prose prose-lg mt-6 max-w-3xl">
          <p dangerouslySetInnerHTML={{__html: formatBlogBody(article.body)}}></p>
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">
            ← Tous les articles
          </Link>
        </div>
      </div>
    </Layout>
  )
}
