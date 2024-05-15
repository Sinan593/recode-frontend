import Navbar from "./Navbar";

export default function CliGuide() {
    return (
        <>
            <Navbar />
            <div className="p-6">
                <section className="mb-8">
                    <h1 className="text-4xl font-normal mb-2">Welcome to ReCode API Guide</h1>
                    <p className="text-lg">
                        New to ReCode API? Welcome aboard! , <br></br><br></br> This series of Getting Started guides is tailored to assist you in mastering the ReCode API.
                        Dive into our fully functional and engaging examples below.
                        <br></br><br></br>Whether you're a seasoned API user or just getting started, these guides
                        are designed to cater to your needs. Explore them in any order; it's like embarking on a choose-your-own-adventure journey where every
                        path leads to success!
                    </p>
                </section>

                <section className="mb-8">
                    <h1 className="text-3xl font-normal mb-4">🚀Setting up LLAMA3 on your Local Machine</h1>
                    <h2 className="text-xl font-normal mb-2">Linux</h2>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>npm install</code></pre>
                    </div>

                    <h2 className="text-xl font-normal mb-2">Windows and Mac</h2>
                    <p className="mb-4">
                        Follow the <a className="text-blue-500 underline" href="https://ollama.com/download">OLLAMA documentation</a> to install OLLAMA on your PC.
                    </p>

                    <h2 className="text-xl font-normal mb-2">Serving OLLAMA on your Local Machine Port</h2>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>ollama serve</code></pre>
                    </div>

                    <h2 className="text-xl font-normal mb-2">Pulling the Large Language Model LLAMA3</h2>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>ollama pull llama3</code></pre>
                    </div>
                </section>

                <section className="mb-8">
                    <h1 className="text-3xl font-normal mb-4">🚀Setting up ReCode API on your Local Machine</h1>
                    <h2 className="text-xl font-normal mb-2">Forking a repository</h2>
                    <p className="mb-4">
                        Go to the following  <a className="text-blue-500 underline" href="https://github.com/Sinan593/recode">repository</a> and click on the <span className="underline">Fork</span> button on the top right corner.
                    </p>
                    <h2 className="text-xl font-normal mb-2">Clone the repository</h2>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>git clone your-forked-url</code></pre>
                    </div>

                    <h2 className="text-xl font-normal mb-2">Move inside the directory</h2>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>cd recode</code></pre>
                    </div>

                    <h2 className="text-xl font-normal mb-2">Run the python scripts</h2>
                    <p className="mb-4">
                        Create a virtual python environment
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>python -m venv venv</code></pre>
                    </div>
                    <p className="mb-4">
                        Activate the environment
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>source /bin/activate</code></pre>
                    </div>
                    <p className="mb-4">
                        Install the required libraries or modules
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>pip install -r requirements.txt</code></pre>
                    </div>
                    <p className="mb-4">
                        Create a virtual python environment
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4">
                        <pre className="text-sm text-gray-700 font-mono whitespace-pre"><code>python run app.py</code></pre>
                    </div>
                    <p className="mb-4">
                        And you are all set to communicate with the API! Good job on making it so far.
                    </p>
                </section>
            </div>
        </>
    );
};
