import { useState } from "react"
import clsx from "clsx"
export default function Pricing() {
    const [select, setSelect] = useState("1")
    const cards = [
        {
            price: "$49/m",
            title: "BASIC",
            desc: "Billed monthly",
            features: [
                "Twitter scraper",
                "Email support",
                "Single user",
                "Accounts 10k followers limit *",
                "3000 emails (1.6 cents per email)",
            ],
            link: "#"
        },
        {
            price: "$99/m",
            title: "STARTER",
            desc: "Billed monthly.",
            features: [
                "Twitter scraper",
                "Chat support",
                "Single user",
                "Accounts 100k followers limit*",
                "9000 emails (1.1 cents per email)"
            ],
            link: "#"
        },
        {
            price: "$149/m",
            title: "BUSINESS",
            desc: "Billed monthly.",
            features: [
                "Twitter scraper",
                "Chat support (24/7 priority)",
                "Up to 3 users",
                "All account emails unlocked",
                "18000 emails (0.8 cents per email)"
            ],
            link: "#"
        }
    ]
    return <div className="md:p-20 p-10 bg-[#F9FAFB]">
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
                <a href="#" className="text-md text-blue-600 font-bold">Pricing</a>
                <p className="text-3xl font-bold my-2">
                    Simple pricing, with no hidden costs
                </p>
                <p className="text-lg text-gray-500">
                    Aaaaand... First 300 emails are free! (No credit card required)
                </p>
            </div>
            <div></div>
        </div>
        {/* button group */}
        <div className="flex justify-center mt-10">
            <div className="border left-0 right-0 mx-auto rounded-lg overflow-hidden inline-flex">
                <button onClick={e => setSelect("1")} className={clsx("w-auto border-r p-1 px-2 text-base font-semibold rounded-tl-lg rounded-bl-lg", select === "1" ? "bg-[#F9FAFB]" : "bg-white")}>Monthly billing</button>
                <button onClick={e => setSelect("2")} className={clsx("w-auto border-l p-1 px-2 text-base font-semibold rounded-br-lg rounded-br-lg", select === "2" ? "bg-[#F9FAFB]" : "bg-white")}>Yearly billing (20% off)</button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 gap-x-10 mt-10 relative py-10">
            {
                cards.map((c, i) => <div className="bg-white p-5 border rounded-lg shadow-lg" key={i}>
                    {i == 1 && <div className="absolute top-0 left-0 right-0 mx-auto md:flex hidden text-lg text-blue-600 justify-center gap-2">
                        <img src="drawn-arrow.svg" className="ml-72" alt="" />
                        <p className="mb-10">Most Popular!</p>
                    </div>}
                    <p className="text-center text-gray-900 font-semibold text-5xl">{c.price}</p>
                    <p className="text-center text-gray-900 font-semibold text-xl mt-5">{c.title}</p>
                    <p className="text-center text-gray-600 text-base">{c.desc}</p>
                    <div className="mt-5 flex flex-col gap-3">
                        {
                            c.features.map((f, fi, arr) => <div className="flex items-center gap-2" key={fi}>
                                <img src="green-check.svg" className="w-8 h-8" alt="" />
                                <p className={clsx("font-base", fi == arr.length - 1 ? "font-semibold" : "")}>{f}</p>
                            </div>)
                        }
                    </div>
                    <div className="flex justify-center mt-5">
                        <a href={c.link} className="w-full p-2 text-center rounded-lg font-base bg-blue-600 text-white">
                            Sign up
                        </a>
                    </div>
                </div>)
            }
        </div>
    </div>
}