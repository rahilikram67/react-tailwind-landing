import clsx from "clsx"
import { useState } from "react"

export default function Faqs() {
    const accords = [
        {
            title: "How quickly can you scrape emails?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            title: "How does the scraper works? Do I need some prerequisites?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            title: "Can I try it first before buying?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            title: "Does 1k users = 1k emails?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            title: "Do I need to leave my computer on while the scrape processes?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            title: "What is your refund policy?",
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
    ]
    const [select, setSelect] = useState(0)
    return <div className="md:p-20 p-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div>
                <a href="#" className="text-md text-blue-600 font-bold">Support</a>
                <p className="text-3xl font-bold my-2">
                    FAQS
                </p>
                <p className="text-lg text-gray-500">
                    Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our team.
                </p>
            </div>

            <div className="flex flex-col">
                {
                    accords.map((e, i) => <div onClick={ev => setSelect(i)} className={clsx("p-5 rounded-lg cursor-pointer", select == i ? "bg-[#F9FAFB]" : "")} key={i}>
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold">{e.title}</p>
                            <img src={select == i ? "minus-circle.svg" : "plus-circle.svg"} alt="" />
                        </div>
                        <p className={clsx("text-gray-700 mt-3", select == i ? "block" : "hidden")}>{e.desc}</p>
                    </div>)
                }
            </div>
        </div>
    </div>

}