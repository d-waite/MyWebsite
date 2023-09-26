
const InquiryForm = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  }

  const required = <span className="text-red-300">*</span>;

  return (
    <>
      <div>
        <h1 className="text-4xl">Contact Me!</h1>
      </div>
      <form id="contactMe" className="flex justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-wrap pt-3 items-center">
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="firstName">First Name: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="text" id="firstName" required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="lastName">Last Name: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="text" id="lastName" required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="email">Email: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="email" id="email" required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="phone">Phone:</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="phone" id="email" />
          </div>
          <div className="flex flex-col gap-1 w-full p-2">
            <label className="text-lg" htmlFor="inquiry">Inquiry: {required}</label>
            <textarea className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" rows={4} id="message" required />
          </div>
          <div className="flex justify-center p-2 w-full">
            <button className="text-lg p-3 w-full md:w-32 bg-altYellow text-altBlack rounded font-bold" type="submit">Submit</button>
          </div>
        </div>
      </form >
    </>
  )
}


export default InquiryForm;