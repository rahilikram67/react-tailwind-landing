import { StatbarMd, StatbarMobile } from "../components/Statbar";

export default function Statistics() {
    return <div className="font-[Inter]">
        <div className="md:flex hidden p-20 flex-col items-center">
            <p className="text-3xl font-bold w-7/12 text-center">
                We help you get hyper-targeted emails in a simple, yet powerful way
            </p>
            <p className="text-gray-700 mt-3 text-lg">
                Take a look at Tweetscrape statistics
            </p>
            <div className="mt-10 w-10/12">
                <StatbarMd />
            </div>
        </div>
        <StatbarMobile />
    </div>
}


