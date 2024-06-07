'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { ContactSchema } from './formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { Input } from '../components/input/Input';
import { sendEmail } from './sendEmail';
import { useState, ChangeEvent } from 'react';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ContactSchema) });
  const [selectedOption, setSelectedOption] = useState('annet');
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  const onSubmit = (data: FieldValues) => {
    const formData: FieldValues = {
      name: data.name,
      email: data.email,
      message: data.message,
      subject: selectedOption,
    };
    sendEmail(formData); 
  };
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[50rem] w-full flex flex-col gap-4"
    >
      <Input
        type="text"
        label="Navn"
        id="name"
        name="name"
        required={true}
        optional={false}
        register={register}
        error={errors?.name?.message as string}
        errorRef={errors.name?.ref as HTMLElement}
      />
      <Input
        label="E-postadresse"
        type="email"
        id="email"
        name="email"
        required={true}
        optional={false}
        register={register}
        error={errors?.email?.message as string}
        errorRef={errors.email?.ref as HTMLElement}
      />

      <fieldset className="border rounded-md py-2 md:py-5  px-4   flex flex-col justify-center md:flex-row ">
        <legend>Hva gjelder henvendelsen</legend>
        <label className="grow flex gap-2">
          <input
            type="radio"
            value="annet"
            checked={selectedOption === 'annet'}
            onChange={handleRadioChange}
          />
          Annet
        </label>
        <label className="grow flex gap-2">
          <input
            type="radio"
            value="freelance"
            checked={selectedOption === 'freelance'}
            onChange={handleRadioChange}
          />
          Freelance
        </label>

        <label className="grow flex gap-2">
          <input
            type="radio"
            value="samarbeid"
            checked={selectedOption === 'samarbeid'}
            onChange={handleRadioChange}
          />
          Samarbeid
        </label>

        <label className="grow flex gap-2">
          <input
            type="radio"
            value="testing"
            checked={selectedOption === 'testing'}
            onChange={handleRadioChange}
          />
          Beta-testing
        </label>

        <label className="grow flex gap-2">
          <input
            type="radio"
            value="jobb"
            checked={selectedOption === 'jobb'}
            onChange={handleRadioChange}
          />
          Jobb i Lovha
        </label>
      </fieldset>

      <label className="flex flex-col gap-1" htmlFor="message">
        <p className="flex items-center gap-2">
          Beskjed <span className="text-xs">(påkrevd)</span>
        </p>
        <textarea
          id="message"
          className="border rounded-md py-1 min-h-[25vh]"
          {...register('message')}
        ></textarea>
      </label>
      <PrimaryButton type="submit" width="full">
        Send beskjed
      </PrimaryButton>
    </form>
  );
};
