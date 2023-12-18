import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CheckboxFive from './CheckboxFive';

interface SideFiltersProps {
}

const SideFilters = ({ }: SideFiltersProps) => {
  const location = useLocation();

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">

      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear px-5">
        <div>
          <h3 className="mb-4 text-sm font-semibold text-bodydark2">
            Severity
          </h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            <li>
              <CheckboxFive label="Fraud" />
            </li>
            <li>
              <CheckboxFive label="Waste" />
            </li>
            <li>
              <CheckboxFive label="Normal" />
            </li>
            <li>

            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-bodydark2">
            Date Period
          </h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            <li>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </li>
            <li>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideFilters;
