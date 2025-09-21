export default function ProjectsList() {
  return (
    <div className="py-16 md:py-24">
      <dl className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-xl leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div className="relative pl-9">
          <dt className="inline font-semibold text-gray-900">
            <svg
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-1 top-1 h6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M 20.469999 6.619999 L 12.57 2.18 C 12.41 2.059999 12.21 2 12 2 C 11.79 2 11.59 2.059999 11.43 2.18 L 3.53 6.619999 C 3.21 6.790001 3 7.119999 3 7.5 L 3 16.5 C 3 16.879999 3.21 17.209999 3.53 17.379999 L 11.43 21.82 C 11.59 21.940001 11.79 22 12 22 C 12.21 22 12.41 21.940001 12.57 21.82 L 20.469999 17.379999 C 20.790001 17.209999 21 16.879999 21 16.5 L 21 7.5 C 21 7.119999 20.790001 6.790001 20.469999 6.619999 M 17.5 10.84"></path>
            </svg>
            RPG do Mestre.&nbsp;
          </dt>

          <dd className="inline text-gray-600">
            Meu blog sobre Roleplaying Game (RPG). Desde 2009, publico textos
            relacionados a RPG de mesa lá.
            <p>
              <a
                href="https://www.rpgdomestre.com/"
                className="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                aria-describedby="featured-post"
                target="_blank"
              >
                Visitar <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-1 top-1 w-6 h-6"
            >
              {" "}
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>{" "}
            </svg>
            Criador de Cartas.&nbsp;
          </dt>

          <dd className="inline text-gray-600">
            Para quem curte jogos de cartas e sempre quis criar suas próprias,
            esse é um App simples que ajuda exatamente nisso. Crie cartas
            customizadas para Magic the Gathering, Tarô, Pokémon, Pôquer, e
            outros jogos.
            <p>
              <a
                href="https://cards.rpgdomestre.com"
                className="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                aria-describedby="featured-post"
                target="_blank"
              >
                Visitar <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
}
