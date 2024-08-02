import { AboutSection } from "./components/About"
import { Appbar } from "./components/Appbar"
import { Footer } from "./components/footer"
import PastExperience from "./components/Intern"
import { NameContent } from "./components/Namecontent"
import { Project } from "./components/Projects"

function App() {
 return (
   <div>
      <Appbar/>
      <NameContent/>
      <div className="flex gap-x-2">
          <div>
            <PastExperience 
              title="Web Developer Intern (June 2023 - January 2024)..." 
              description="Excelled in Software as a Service projects, skillfully leveraging Facebook, Shopify, Google, and OpenAI APIs to deliver exceptional products. Instrumental in crafting the official company website, resulting in a % increase in user engagement and a driving significant business growth and customer satisfaction..." 
              imageTag="—Pngtree—initials letter m logo vector_5066811.png" 
              link="https://mojowebtech.com"
              name="Mojo Tech"
            />
            <PastExperience 
              title="Software Development Cell ,USS" 
              description="Project lead of Attendance Management App & Website for our university which resulted in Digitalizing attendance-taking procedure and reducing paperwork by 85%. Maintained and significantly improved the performance of the Online Student Feedback System for our university by promptly addressing 95% of reported issues and implementing iterative enhancements..." 
              imageTag="—Pngtree—sd letter logo_4127536.png" 
              link="https://sdc-usict.github.io"
              name="Software Development Cell ,USS"
            />
          </div>
          <AboutSection/>
      </div>
      <Project/>
      <Footer/>
   </div>
  )
}

export default App
