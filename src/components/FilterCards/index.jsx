import React from 'react'

import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];

const FilterCards = ({ filterHandler }) => {

  const [animal, setAnimal] = useState(null);

  const handleChange = value => {
    console.log("value:", value);
    setAnimal(value);
  };
  return (
    <div className='flex'>
      <div className="mb-3 w-44">
        <input
          onChange={filterHandler}
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-600 dark:placeholder:text-neutral-400 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Type query" />
      </div>
      <div className='w-64 ml-5 '>
        <Select
          value={animal}
          onChange={handleChange}
          options={options}
          isMultiple={true}
          primaryColor='blue'
          placeholder='Prioritize'
        />
      </div>
    </div>
  );
}

export default FilterCards