import clsx from "clsx"
import { useState } from "react"
export default function FocusedScrapping() {

    const tabs = [
        {
            title: "Scrape user followers",
            desc: "Scrape user followers",
            link: "#"
        },
        {
            title: "Scrape user followings",
            desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
            link: "#"
        },
        {
            title: "Scrape tweet likes",
            desc: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
            link: "#"
        }
    ]

    const emails = [
        {
            name: "Smantha Smith",
            email: "samantha.smith@gmail.com"
        },
        {
            name: "Michael Brown",
            email: "michael@brown.com"
        },
        {
            name: "David Garcia",
            email: "ddgarcia.1@hotmail.com"
        }
    ]
    const [select, setSelect] = useState(tabs[0]?.title)
    return <div className="md:p-20 p-10 px-4">
        <div className="flex flex-col gap-y-3">
            <a href="#" className="text-blue-600 font-bold">Laser focused scraping</a>
            <p className="text-3xl font-bold">
                Choose the best targeting for you
            </p>
            <p className="text-gray-600 text-lg">
                From our dashboard, you have countless options to target your perfect audience
            </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col mt-10">
                {
                    tabs.map((e, i) => <div key={i} onClick={ev => setSelect(e.title)} className={clsx("flex flex-col p-6 border-l-4 gap-3 cursor-pointer", select === e.title ? "border-blue-500" : "")}>
                        <span className="text-xl font-bold">{e.title}</span>
                        <span className="text-md text-gray-600 leading-5">{e.desc}</span>
                        <a href={e.link} className="text-blue-600 flex items-center justify-between w-28">
                            <span className="text-md">Try Now </span>
                            <img className="w-10 h-4 mt-1" src="arrow-right-blue.svg" alt="" />
                        </a>
                    </div>)
                }
            </div>
            <div className="bg-[url('BG.png')] w-full h-full bg-cover bg-[length:100%_100%]">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <img src="mrbeast.png" className="w-24 h-24" alt="" />
                        <div className="flex justify-center w-40 text-center">
                            <span className="text-lg font-bold ml-4">Mr Beast</span>
                            <img src="verified.svg" alt="" />
                        </div>
                        <div className="p-1 px-2 border border-black rounded-full mt-2">
                            <span className="font-bold">1,826</span>
                            <span className="ml-1">following</span>
                        </div>
                    </div>

                    <div className="p-1 px-2 bg-blue-600 text-white rounded-full mt-auto mb-[1.5px]">
                        <span className="font-bold">17,5Mln</span>
                        <span className="ml-1">following</span>
                    </div>

                </div>
                <div className="flex justify-center mt-[-2px]">
                    <div className="w-1 h-20 bg-blue-600 ml-40"></div>
                </div>
                <p className="text-center text-5xl font-bold">Tweetscrape</p>
                <div className="flex flex-col items-center gap-2 mt-5">
                    {
                        emails.map((e, i) => <div key={i} className="md:text-lg text-sm rounded-full p-1 px-2 border border-black flex items-center">
                            <p className="text-gray-500 basis-full">{e.name}</p>
                            <span className="font-bold text-black ml-2">{e.email}</span>
                            <img src="verified.svg" className="h-5 w-5" alt="" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}