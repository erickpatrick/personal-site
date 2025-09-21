export default function Projects() {
  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black">
        Alguns dos projetos que tenho trabalhado
      </h3>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-blue-600/5 p-8 sm:p-10">
              <a
                href="https://www.rpgdomestre.com/"
                title="RPG do Mestre"
                target="_blank"
                className="text-center"
              >
                <span className="inline-block">
                  <span className="block text-xl font-semibold -mb-2 mt-2">
                    RPG do
                  </span>
                  <span className="block text-2xl font-black">Mestre</span>
                </span>
              </a>
            </div>
            <div className="bg-blue-600/5 p-6 sm:p-10">
              <a
                href="https://cards.rpgdomestre.com/"
                title="Criador de Cartas"
                target="_blank"
                className="text-center"
              >
                <span className="inline-block">
                  <span className="block text-xl font-semibold -mb-2 mt-2">
                    Criador
                  </span>
                  <span className="block text-2xl font-black">de Cartas</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
