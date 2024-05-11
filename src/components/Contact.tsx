import { FormEvent, useState } from "react";
import { Title } from "./Title"
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Input } from "./Input";
import { useLang } from "@/hooks/useLang";
import axios from "axios";
import { validationForm } from "@/utils/validationForm";

type keys = 'name' | 'email' | 'message'

type IError = {
  [key in keys]?: {
    message: string;
  }

}


export function Contact() {

  const { scoped } = useLang();
  const { form } = scoped.contact;
  const [errors, setErros] = useState<IError>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validationForm({ name, email, message });
    if (!validation.success) {
      const dataErrors = {};
      validation.error.issues.forEach(error => {
        const errorMessage = { message: form[error.path[0]]['errorValidation'] }
        const field = error.path[0] as keys
        dataErrors[field] = errorMessage
      });
      setErros(() => dataErrors);
      return
    }

    const { data } = await axios.post('/api/email', {
      name,
      email,
      message
    }, { validateStatus: () => true })

    if (data.success) {
      setName('');
      setEmail('');
      setMessage('');
      setErros({});
      toast.success(form.notification.success)
    } else {
      toast.warning(form.notification.warning)
    }
  };


  return (
    <section
      id={scoped.navbar.navLink_5th.replace(' ', '-').toLowerCase()}
      className="py-8 md:py-11 lg:py-[95px]"
    >
      <Title
        title={scoped.contact.title}
        subTitle={scoped.contact.subtitle}
      />
      <div>
        <ToastContainer />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 px-8 py-10 max-w-[700px] drop-shadow-[0_0_15px_rgba(0,0,0,0.02)] bg-lotion rounded-xl"
          method="POST"

        >
          <Input
            error={errors?.name}
            name={form.name.name}
            placeholder={form.name.placeholder}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />

          <Input
            error={errors.email}
            name={form.email.name}
            placeholder={form.email.placeholder}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />


          <div className="flex flex-col gap-3">

            {errors['message'] && (
              <span className="text-rosso-corsa capitalize text-sm font-medium">
                {form.message.errorValidation}
              </span>
            )}

            <label
              className="font-medium text-independence"
              htmlFor="message"
            >
              {form.message.name}
            </label>
            <textarea
              name="message"
              className="bg-[transparent] h-[120px] border-b-[1px] border-bright-gray resize-none p-2"
              id="message"
              placeholder={form.message.placeholder}
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </div>

          <button
            type="submit"
            className="relative border-[1px] w-fit py-2 px-8 group overflow-hidden hover:text-white transition-colors duration-500"
          >
            <span className="absolute top-[50%] left-[50%] bg-eerie-black group-hover:w-[4px] group-hover:h-[4px] group-hover:scale-[50] transition-transform  rounded-[50%] duration-700 -z-10">

            </span>
            Send
          </button>
        </form>
      </div>
    </section >
  );
}