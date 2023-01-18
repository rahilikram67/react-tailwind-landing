export default function Footer() {
    const arr = [
        {
            text: "Overview",
            link: "#"
        },
        {
            text: "Features",
            link: "#"
        },
        {
            text: "Pricing",
            link: "#"
        },
        {
            text: "Help",
            link: "#"
        },
        {
            text: "Privacy",
            link: "#"
        }
    ]
    return <div className="bg-[#1D2939] md:p-20 p-5">
        <div className="flex items-center gap-4 justify-center">
            <img src="dot.png" alt="" />
            <p className="text-white text-xl">Untitled UI</p>
        </div>
        <div className="mx-auto grid md:grid-cols-5 grid-cols-1 gap-5 text-white md:w-6/12 mt-8">
            {
                arr.map((e, i) => <a href={e.link} className="text-lg mx-auto" key={i}>
                    {e.text}
                </a>)
            }
        </div>
        <hr className="w-full mt-10 border-gray-500" />
        <div className="flex md:flex-row flex-col gap-6 justify-between mt-5 text-gray-400 text-base text-center">
            <p>© 2077 Untitled UI. All rights reserved.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
            </div>
        </div>
    </div>
}