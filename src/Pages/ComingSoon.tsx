import React from 'react'

const ComingSoon = () => {
    return (
        <section id="comming_soon">
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-72 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-dark-red">Thanks For visting!</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-highlight-red sm:text-5xl">Page is Under Development</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry for the inconvenience currently page is under development, soon it will be available.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-dark-red px-3.5 py-2.5 text-sm font-semibold text-custom-bg-black shadow-sm  hover:bg-custom-bg-black hover:text-dark-red hover:border-2 hover: border-dark-red "
                        >
                            Go back home
                        </a>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default ComingSoon