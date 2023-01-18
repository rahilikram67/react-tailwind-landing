export default function Results() {
    const cards = [
        {
            icon: "mail.svg",
            title: "Email marketing",
            desc: "Cold email prospects with your offer."
        },
        {
            icon: "copy.svg",
            title: "Lead Generation",
            desc: "Find clients in your niche, and their emails."
        },
        {
            icon: "group.svg",
            title: "Lookalike Audiences",
            desc: "With a lookalike audience, you can easily achieve 10X ROAS."
        },
        {
            icon: "alert.svg",
            title: "Scrape competitors",
            desc: "Get a list of your competitors follows and their emails."
        },
    ]
    return <div className="md:p-20 p-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
                <a href="#" className="text-md text-blue-600 font-bold">Results</a>
                <p className="text-3xl font-bold my-2">
                    4 things you can do with Tweetscrape
                </p>
                <p className="text-lg text-gray-500">
                    We know our clients needs, so we make sure to enrich the data as much as possible, to give you freedom to use the data however you want.
                </p>
            </div>
            <div></div>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-20 mt-10">
            {
                cards.map((e, i) => <div className="rounded-lg border overflow-hidden shadow-lg" key={i}>
                    <div className="p-2 px-5 flex flex-start rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-blue-500 to-blue-800">
                        <img src={e.icon} className="h-8 w-8" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg p-6 bg-[#F9FAFB] h-full">
                        <p className="text-xl font-bold">{e.title}</p>
                        <p className="text-md text-gray-500 mt-2">{e.desc}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
}