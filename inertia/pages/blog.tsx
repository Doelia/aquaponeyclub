import Layout from "~/Layout";
import {Head, Link} from "@inertiajs/react";
import React from "react";
import {Dialog} from "primereact/dialog";
import {formatBlogBody, slug} from "~/lib/functions";

export default function Blog({articles}) {

  const [isVisible, setIsVisible] = React.useState(false);
  const [articleOpened, setArticleOpened] = React.useState<any>(null);

  function btnOpenModal(article) {
    setArticleOpened(article);
    setIsVisible(true);
    window.history.pushState({modalPost: article.id}, '', `/blog/article/${article.id}`)
  }

  function closeModal() {
    setIsVisible(false);
    window.history.back();
  }

  return (
    <Layout>
      <Head title="Blog" />
      <Dialog header={articleOpened ? articleOpened.title : ''}
              visible={isVisible}
              dismissableMask={true}
              style={{ width: '50vw' }}
              onHide={closeModal}
      >
        { articleOpened && <DialogContent article={articleOpened} /> }
      </Dialog>

      <ul className="grid gap-16 max-w-4xl mx-auto">
        {articles.map((article) => (
          <li key={article.id}>
            <Article article={article} onClick={() => btnOpenModal(article)} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

function Article({article, onClick}) {

  const dateFrench = new Date(article.created_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const href = "/blog/article/" + article.id + '/' + slug(article.title);

  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
      <picture>
        <Link href={href} >
          <img src={"data:image/webp;base64," + article.img_illustration_b64} className={"rounded aspect-video object-fill w-[400px]"} />
        </Link>
      </picture>
      <div>
        <button className="text-blue-400 uppercase tracking-wider text-sm font-medium" onClick={onClick}> Article </button>
        <Link href={href} >
          <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 "> {article.title} </h2>
        </Link>
        <div className="flex gap-2 mt-3">
          <span className="text-gray-400"> AquaPoney Club </span>
          <span
          className="text-gray-400">• </span>
          <div className="text-gray-400"> {dateFrench}</div>
        </div>
      </div>
    </div>
  )

}

function DialogContent({article}) {
  return (
      <p dangerouslySetInnerHTML={{__html: formatBlogBody(article.body)}}></p>
  )
}
