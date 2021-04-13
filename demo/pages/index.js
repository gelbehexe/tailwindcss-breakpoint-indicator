import Head from 'next/head'

const Main = () => {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Tailwindcss Breakpoint Indicator</title>
      </Head>
      <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="space-y-3">
          <div className="flex items-center justify-start space-x-2">
            <svg className="h-10" viewBox="0 0 162 162">
              <g>
                <rect width="162" height="162" className="fill-current text-purple-700" />
                <circle cx="81" cy="81" r="59.5" className="fill-current text-purple-300" />
              </g>
            </svg>
            <h1 className="text-3xl font-bold flex-grow">Tailwindcss Breakpoint Indicator</h1>
            <a
                href="https://github.com/gelbehexe/tailwindcss-dev-breakpoint-indicator"
                className="inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-800 text-gray-300 text-sm leading-5 font-medium shadow-lg hover:bg-gray-700 transition ease-in-out duration-100"
            >
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="space-y-4">
            <p className="italic">A breakpoint indicator for using while development with tailwind</p>
            <hr />
            <div className="bg-purple-200 text-purple-800 border border-purple-600 px-4 py-2 rounded-md shadow-md">
              Look at the left corner to see the indicator and resize view port.
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

            <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>

            <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>          </div>

          <hr />
        </article>
      </div>
      <div className="breakpoint-indicator fixed left-0 top-0 px-3 text-sm"></div>
    </div>
  )
}

export default Main

export const config = {
  unstable_runtimeJS: false,
}
