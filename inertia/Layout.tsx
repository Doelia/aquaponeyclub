import Header from "~/includes/Header";
import {PrimeReactProvider} from "primereact/api";

export default function({children}) {

  return (
    <main>
      <div className="container mx-auto">
        <header>
          <Header/>
        </header>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </div>
    </main>
  )
}
