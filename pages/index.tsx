import InquiryForm from "@/components/InquiryForm"
import ShowProjectButton from "@/components/ShowProjectButton"
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 max-w-5xl mx-auto px-6">
        <Profile />
        <div>
          <h1 className="text-4xl pb-3">Projects</h1>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <img className="lg:w-1/3 w-full p-3 max-w-md mx-auto" src="/undraw_programming_re_kg9v.svg"></img>
            <ul className="flex flex-col gap-3 lg:w-2/3 w-full">
              <ShowProjectButton name="CLUE Game" imageHref="./cluepic.PNG">
                <p>
                  A semester-long project written in Java and using Swing UI. Complete with JUnit testing, the program allows a user to play against 5 AI players.
                  Find the source code here: <a href="https://github.com/d-waite/ClueGame" target="_blank">CLUE Game Code</a>
                </p>
              </ShowProjectButton>
              <ShowProjectButton name="Field Session" imageHref="undraw_medicine_b-1-ol.svg">
                <p>
                  {" I worked on a software team on behalf of Cobalt, Inc., where I helped to create the front-end of a medical test designed to improve a patient's cognitive ability and mental health. This included taking raw data and transforming it into numbers that could be displayed using bar graphs and spider charts. The graphs were responsive to the data being received at any moment, and also synchronized with different frequencies of sound for those who are hearing impaired. I also connected the software to hardware API and tested it using synthetic data. The project was done mainly in .NET C# and XAML, with the exception of some Python. "}
                </p>
              </ShowProjectButton>
            </ul>
          </div>
        </div>
        <InquiryForm />
      </main>
    </>
  )
}
