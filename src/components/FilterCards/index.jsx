import React from 'react'

import { useState } from "react";
import Select from "react-tailwindcss-select";
import { PRIORITY } from '../../common/constants';


const FilterCards = ({ filterHandler, filterPriorityHandler, priorityData }) => {

  return (
    <div className='flex'>
      <div className="mb-3 w-44">
        <input
          onChange={filterHandler}
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-600 dark:placeholder:text-neutral-800 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Type query" />
      </div>
      <div className='w-64 ml-5 filter__select'>
        <Select
          value={priorityData}
          onChange={filterPriorityHandler}
          options={PRIORITY}
          isMultiple={true}
          primaryColor='black'
          placeholder='Priority'
        />
      </div>
    </div>
  );
}

export default FilterCards