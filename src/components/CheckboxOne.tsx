import { useState } from 'react';

const CheckboxOne = ({label}: {label?: string}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const idRn = new Date().getTime();

  return (
    <div>
      <label
        htmlFor={`checkboxLabelOne${idRn}`}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={`checkboxLabelOne${idRn}`}
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
            ></span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default CheckboxOne;
