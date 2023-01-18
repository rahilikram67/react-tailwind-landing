import Faqs from "./segments/Faqs"
import FocusedScrapping from "./segments/FocusedScrapping"
import Footer from "./segments/Footer"
import Home from "./segments/Home"
import Pricing from "./segments/Pricing"
import Results from "./segments/Results"
import Statistics from "./segments/Statistics"
import StatisticsInfo from "./segments/StatisticsInfo"

function App() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Home />
      <div className="font-[Inter]">
        <Statistics />
        <StatisticsInfo />
        <FocusedScrapping />
        <Results />
        <Pricing />
        <Faqs />
        <Footer />
      </div>
    </main>
  )
}

export default App
