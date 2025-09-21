export default function LaterstPosts() {
  return (
    <div>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black">
        Últimos artigos que escrevi
      </h3>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <time
              dateTime="2024-10-26 14:01:25"
              className="block text-sm leading-6 text-gray-600"
            >
              Oct 26, 2024
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Segurando o ímpeto de programar as soluções eu mesmo
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 line-clamp-3">
              Como lidar com a vontade de resolver os problemas por conta
              própria enquanto somos gerentes de software que cresceram na
              carreira?
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <a
                  href="/artigos/segurando-o-impeto-de-programar-as-solucoes-eu-mesmo"
                  className="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                  aria-describedby="featured-post"
                >
                  Continuar lendo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="divide-y divide-gray-900/10">
              <article className="py-6 relative flex flex-wrap gap-x-3">
                <time
                  dateTime="2024-02-26 11:54:37"
                  className="block text-sm leading-6 text-gray-600"
                >
                  Feb 26, 2024
                </time>
                <section className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                  <a
                    href="/artigos/proximo-desafio-ecossistema-elixir-otp-phoenix-e-liveview"
                    className="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                  >
                    Próximo desafio: ecossistema Elixir, OTP, Phoenix e LiveView
                  </a>
                </section>
                <section className="mt-2 w-full flex-none text-base leading-7 text-gray-600 line-clamp-2">
                  Meu próximo desafio de progrador é entrar no mundo da
                  programação funcional. Escolhi a linguagem de programação
                  Elixir por ser "brasileira" e por já ter "brincado" um pouco
                  com ela
                </section>
              </article>
              <article className="py-6 relative flex flex-wrap gap-x-3">
                <time
                  dateTime="2023-09-25 12:48:55"
                  className="block text-sm leading-6 text-gray-600"
                >
                  Sep 25, 2023
                </time>
                <section className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                  <a
                    href="/artigos/integrando-o-kit-do-laravel-jetstream-com-o-laravel-folio"
                    className="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                  >
                    Integrando o kit do Laravel Jetstream com o Laravel Folio
                  </a>
                </section>
                <section className="mt-2 w-full flex-none text-base leading-7 text-gray-600 line-clamp-2">
                  Aprenda a usar a navegação por rotas do Laravel Folio junto do
                  kit de aplicação Laravel Jetstream, e tenha o melhor dos dois
                  mundos.
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
