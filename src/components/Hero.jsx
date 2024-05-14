import "./Hero.css"

export default function Hero() {
    return (
        <>
            <div className="hero p-32 flex flex-row text-white ">

                <div className="left basis-1/2 ">
                    <div className="heading text-6xl font-medium m-4">
                        One click to convert your legacy code
                    </div>
                    <div className="sub-heading m-4 text-xl">
                        Revive your code</div>
                    <h1 id="about" className="text-white font-medium text-5xl decoration-purple-800
                    underline hover:underline-offset-8 pt-36">
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