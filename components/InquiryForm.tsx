'use client'

import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as Toast from '@radix-ui/react-toast';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiry: string;
}

async function submitForm(data: FormData) {
  // POST form data
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

const InquiryForm = () => {
  const [toastOpen, setToastOpen] = React.useState(false);
  const { handleSubmit, reset, register } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await submitForm(data);
      setToastOpen(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  }

  const required = <span className="text-red-300">*</span>;

  return (
    <Toast.Provider>

      <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-3 gap-1 w-80 max-w-full m-0 z-50" />

      <Toast.Root className="rounded py-3 px-4 bg-green-400 text-slate-900 shadow-lg transition-all opacity-0 duration-300 ease-in-out data-[state=open]:opacity-100" open={toastOpen} onOpenChange={setToastOpen}>
        <Toast.Description className="text-lg font-bold">
          Your submission has been received!
        </Toast.Description>
      </Toast.Root>

      <div>
        <h1 className="text-4xl">Contact Me!</h1>
      </div>
      <form id="contactMe" className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap pt-3 items-center">
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="firstName">First Name: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="text" id="firstName" {...register("firstName")} required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="lastName">Last Name: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="text" id="lastName" {...register("lastName")} required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="email">Email: {required}</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="email" id="email" {...register("email")} required />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
            <label className="text-lg" htmlFor="phone">Phone:</label>
            <input className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" type="phone" id="phone" {...register("phone")} />
          </div>
          <div className="flex flex-col gap-1 w-full p-2">
            <label className="text-lg" htmlFor="message">Inquiry: {required}</label>
            <textarea className="w-full p-2 rounded text-gray-100 bg-slate-800 border border-lightBlue" rows={4} id="message" {...register("inquiry")} required />
          </div>
          <div className="flex justify-center p-2 w-full">
            <button className="text-lg p-3 w-full md:w-32 bg-altYellow text-altBlack rounded font-bold" type="submit">Submit</button>
          </div>
        </div>
      </form >
    </Toast.Provider >
  )
}


export default InquiryForm;