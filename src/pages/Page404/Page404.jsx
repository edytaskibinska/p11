import "./Page404.scss";

function Page404() {
  return <div className="page404">
    <div className="text404">404</div>
    <div className="oups">Oups! La page que vous demandez n'existe pas.</div>
    <a className="link" href="/">Retourner sur la page d’accueil</a>
   </div>;
}

export default Page404;
