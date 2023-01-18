
export default function Home() {
    return <div className="bg-[#F9FAFB]">
        {/* desktop navbar */}
        <div className="md:flex hidden items-center justify-between h-14 w-full px-40 py-6 border-b">
            <div className="flex items-center">
                <img src="bird.png" />
                <p className="ml-2 text-4xl font-bold font-[Gazpacho]">Tweetscrape</p>
                <p className="text-gray-700 text-lg ml-20 font-[Inter]">Pricing</p>
            </div>
            <div className="flex items-center text-lg gap-6 font-[Inter]">
                <button>Log in</button>
                <button className="rounded bg-blue-600 text-white px-4 py-2">Sign in</button>
            </div>
        </div>
        {/* mobile navbar */}
        <div className="md:hidden flex py-2 px-4 items-center justify-between">
            <div className="flex gap-2">
                <img src="dot.png" />
                <p className="ml-2 text-2xl font-bold">Untitled UI</p>
            </div>
            <div>
                <img src="menu.png" />
            </div>
        </div>
        {/* table */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:p-20 p-10 gap-10 font-[Inter]">
            <div className="flex flex-col md:mx-10">
                <p className="md:text-6xl text-4xl text-5xl font-bold md:text-left text-center">
                    Scrape email of Twitter Users
                </p>
                <p className="text-gray-700 text-xl mt-4 md:text-left text-center">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
                </p>

                <div className="mt-10">
                    <a href="#" className="text-blue-500 text-lg font-bold">Join our beta</a>
                    <div className="w-11/12 border border-gray-600 rounded-lg flex flex-row overflow-hidden">
                        <input type="text" className="w-full p-1 px-2 rounded-tl-lg rounded-bl-lg" style={{ outline: "none" }} placeholder="hello@gmail.com" />
                        <button className="text-center w-28 grow-1 bg-blue-600 text-white p-2 flex items-center justify-center">
                            <span className="text-lg">Join</span>
                            <img src="arrow-right.png" className="mt-[1.5px] ml-2" alt="" />
                        </button>
                    </div>
                    <p className="text-gray-700 texl-lg mr-10 mt-4">
                        Tweetscrape is currently in beta and we're releasing spots to try it out gradually. If you're interested, sign up on our list and you'll be added to the queue for the beta version.
                        <br />
                        <br />
                        Signing up also grants you a special early-bird discount.
                        <br />
                        <br />
                        This is not a newsletter, we won’t spam you.
                        <br />
                    </p>
                    <p className="bg-blue-600 p-1 px-2 inline-block mt-4 rounded-full text-white">
                        <span className="font-bold">1,258</span>
                        /1,500 spots filled
                    </p>
                </div>
            </div>
            <div>
                <img src="table.png" alt="" />
            </div>
        </div>


    </div>
}