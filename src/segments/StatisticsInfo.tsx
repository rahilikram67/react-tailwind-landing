export default function StatisticsInfo() {
    const arr = [
        {
            icon: "check.png",
            heading: "Verified emails",
            desc: "lorem ipsum"
        },
        {
            icon: "electricity.png",
            heading: "100% in cloud",
            desc: "lorem ipsum"
        },
        {
            icon: "box-arrow.png",
            heading: "No accpounts or proxies needed",
            desc: "lorem ipsum"
        },
        {
            icon: "happy-emoji.png",
            heading: "Laser focus targetting",
            desc: "lorem ipsum"
        },
        {
            icon: "zigzag.png",
            heading: "Trusted by hundreds",
            desc: "lorem ipsum"
        },
        {
            icon: "heart.png",
            heading: "First 300 emails free",
            desc: <>
                Dont believe us? <a href="#" className="text-blue-600">Sign up for our trial</a>,
                you can scrape your first 300 emails
                from any profile, completely for FREE!
            </>
        }
    ]
    return <div className="md:p-20 py-20 px-5">
        <div className="flex flex-col items-center gap-4">
            <a href="" className="text-lg text-blue-600 mx-auto font-bold">One of a kind</a>
            <p className="md:text-4xl text-2xl text-center font-bold md:w-8/12">
                For every 100 Twitter users, we have 87 verified emails
            </p>
            <p className="text-center md:w-8/12 text-lg">
                Thanks to our fingerprinting technology, no one in the industry comes even close to our success percentage.
            </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-20 my-20">
            {
                arr.map((e, i) => <div key={i} className="flex flex-col items-center gap-1">
                    <img className="rounded-full bg-blue-200 p-2 border-8 border-blue-50" src={e.icon} />
                    <span className="text-xl font-bold text-center">{e.heading}</span>
                    <span className="text-lg text-gray-600 text-center">{e.desc}</span>
                </div>)
            }
        </div>
    </div>
}