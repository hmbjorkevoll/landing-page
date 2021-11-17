import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import good from "../public/good.jpg";

export default function Home() {
  return (
    <div className="container mx-auto px-5 bg-gray-50">
      <Head>
        <title>Bjørkevoll Helse</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Økt produktivitet gjennom bedre helse"
        />
        <meta
          name="keywords"
          content="helse, arbeid, produktivitet, trivsel, inntjening, fysioterapi"
        />
        <meta name="author" content="Hans Martin Bjørkevoll" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="max-w-6xl mx-auto">
        <nav className="py-5">
          <Link href="/" className="font-sans text-2xl">
            Bjørkevoll Helse
          </Link>
        </nav>
        <section className="grid grid-cols-1 md:grid-cols-2 mx-auto py-20">
          <div className="flex flex-col justify-center mx-5">
            <h1 className="text-center font-sans text-5xl text-green-900 font-semibold py-10">
              Økt produktivitet i bedriften gjennom bedre helse og trivsel for
              ansatte
            </h1>
            <form
              action="https://fierce-teacher-9326.ck.page"
              className="py-10 flex justify-center"
            >
              <button
                className="border bg-green-400 text-gray-50 text-xl p-2 font-sans hover:bg-green-500 active:bg-green-600"
                type="submit"
                value="Trykk for å avtale en gratis konsultasjon"
              >
                Gratis konsultasjon
              </button>
            </form>
            <h3 className="text-center font-sans">
              Book en gratis konsultasjon, og få nyttig info sendt rett i
              innboksen
            </h3>
          </div>
          <div className="flex justify-center py-10">
            <Image src={good} alt="Good health" height="400px" width="320px" />
          </div>
        </section>
        <section className="">
          <h2 className="font-sans text-xl text-center py-8">
            Ikke sløs bort penger på dyr teknologi - invester heller i helsen
            til dine ansatte
          </h2>
        </section>
      </main>
    </div>
  );
}
