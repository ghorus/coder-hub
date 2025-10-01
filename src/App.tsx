import './App.css'
import NavBar from './NavBar'
function App() {


  return (
    <>
        <NavBar></NavBar>
        <main>
          <h1>Perks of Enrolling</h1>
          <ul>
            <li>
              <h2>Be Prepared for the Job</h2>
              <p>Handpick the skills & tech stack you need.</p>
            </li>
            <li>
              <h2>Highly detailed roadmaps</h2>
              <p> Know exactly what you’ll get out of the course - from beginner to publishing. </p>
            </li>
            <li>
              <h2>Tools and Resources</h2>
              <p>
                <ol>
                  <li><strong>Notes</strong> instantly access the notes you took from.</li>
                  <li><strong>Access live chat tutoring</strong> when stuck on a problem.</li>
                  <li><strong>Instant access to references</strong> for times when you forget a concept.</li>
                </ol>
              </p>
            </li>
          </ul>
        </main>
    </>
  )
}

export default App
