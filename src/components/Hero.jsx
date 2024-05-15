import "./Hero.css"

export default function Hero() {
    return (
        <>
            <div className="hero p-32 flex flex-row text-white ">

                <div className="left basis-1/2 ">
                    <div className="heading text-6xl font-medium m-4 pt-16">
                        One click to convert your legacy code
                    </div>
                    <div className="sub-heading m-4 text-2xl">
                        Revive your code</div>
                    <div className="sub-heading m-4 pt-12 text-lg text-white-900">
                        Our code converter application is designed to streamline the process of adapting legacy code to modern programming languages,
                        enhancing compatibility and efficiency. By leveraging advanced algorithms and a user-friendly interface, our tool facilitates
                        the conversion of code from one programming language to another, ensuring minimal invasiveness and preserving the integrity
                        of the original business logic.
                    </div>
                    <h1 id="about" className="text-white font-medium text-5xl decoration-purple-800
                    underline hover:underline-offset-8 pt-40">
                        About</h1>
                    <div className="content pt-8 sub-heading text-xl">
                        At ReCode, we're dedicated to providing you with
                        secure code convertion.
                        Enjoy Exploring our website!
                    </div>

                </div>
                <div className="right basis-1/2 pl-64 pb-128">
                    <img src="./paper.svg" alt="" srcset="" />
                </div>

                {/* <div className="left basis-1/2 ">
                    <h1 className="text-white font-medium text-5xl decoration-purple-800
                    underline hover:underline-offset-8 pt-36">
                        About</h1>
                    <div className="content pt-8 sub-heading text-xl">
                        At ReCode, we're dedicated to providing you with
                        secure code convertion.
                        Enjoy Exploring our website!
                    </div>
                </div> */}

            </div>


        </>
    )
}