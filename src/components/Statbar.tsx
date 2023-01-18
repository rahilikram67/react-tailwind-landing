export function StatbarMd() {
    const arr = [
        {
            heading: "200M+",
            desc: "Scrapped accounts"
        },
        {
            heading: "87%",
            desc: "User to email ration"
        },
        {
            heading: "No",
            desc: "Proxies or accounts needed"
        }
    ]
    return <div className="p-7 grid md:grid-cols-3 grid-cols-1 bg-blue-600 mix-blend-mutiply w-full rounded-lg">
       
        {
            arr.map((e, i) => <div key={i} className="flex flex-col items-center text-white">
                <p className="text-5xl font-bold">
                    {e.heading}
                </p>
                <p className="text-md mt-2">{e.desc}</p>
            </div>)
        }
    </div>
}


export function StatbarMobile() {
    const arr = [
        {
            heading: "200M+",
            desc: "Scrapped accounts"
        },
        {
            heading: "87%",
            desc: "User to email ration"
        },
        {
            heading: "No",
            desc: "Proxies or accounts needed"
        }
    ]
    return <div className="md:hidden mx-4">
        <div className="grid grid-cols-1 gap-10 bg-blue-600 w-full rounded-lg p-10">
            <div className="flex flex-col items-center text-white">
                <p className="text-3xl font-bold text-center">
                    We help you get hyper-targeted emails in a simple, yet powerful way
                </p>
                <p className="mt-5 text-lg text-center">
                    Take a look at Tweetscrape statistics
                </p>
            </div>
            {
                arr.map((e, i) => <div key={i} className="flex flex-col items-center text-white">
                    <p className="text-5xl font-bold">
                        {e.heading}
                    </p>
                    <p className="text-md mt-2">{e.desc}</p>
                </div>)
            }
        </div>
    </div>
}