import Layout from "~/Layout";

export default function NotFound({message}) {
  return (
    <Layout>
      <div className="container">
        <div className="title">Page not found</div>

        <span>{message}</span>
      </div>
    </Layout>
  )
}
