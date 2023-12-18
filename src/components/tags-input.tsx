'use client';
interface TagsInputProps {}
import { useState } from 'react';
import {
  AiTwotoneEdit,
  AiOutlinePlus,
  AiOutlineFileSearch,
  AiOutlineSave,
  AiOutlineFilePdf,
  AiOutlineClear,
  AiOutlineClose,
} from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import { RxDividerVertical } from 'react-icons/rx';

const FiltersOptions = [
  '$VISIT_ID',
  '$SUBSCRIBER_ID',
  '$DOCTOR_ID',
  '$DATE',
  '$DATE_RANGE',
];

const defaultFilters = [
  {
    option: FiltersOptions[0],
    value: '',
  },
  {
    option: FiltersOptions[1],
    value: '',
  },
  {
    option: FiltersOptions[2],
    value: '',
  },
];
const TagsInput = ({}: TagsInputProps) => {
  const [filters, setFilters] =
    useState<{ option: any; value: any }[]>(defaultFilters);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="my-4 mt-0 flex flex-wrap items-center relative col-span-8">
      <h4 className="px-3 py-[2px] bg-[#ffffff] mt-2 font-bold">Filters:</h4>
      {filters.map((item, index) => (
        <div
          key={index}
          className="flex border border-solid border-[#ccc] mr-3 mt-2"
        >
          {isEditing ? (
            <select
              id="countries"
              defaultValue={item.option}
              onChange={(e) => {
                // get current item THEN update option THEN update filters
                const value = e.target.value;
                let currentItemIndex = filters.findIndex(
                  (v) => v.option === item.option,
                );

                const tempFilters = filters.map((object) => ({ ...object }));

                tempFilters[currentItemIndex].option = value;

                setFilters(tempFilters);
              }}
              className="bg-[#f2f2f2] p-1 w-24 text-gray-900 text-sm block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="">Choose Filter</option>
              {FiltersOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <h5 className="p-1 text-sm bg-[#f2f2f2] w-24">{item.option}</h5>
          )}

          {item.option !== '$DATE' && item.option !== '$DATE_RANGE' && (
            <input
              type="text"
              value={item.value}
              className="pr-2 pl-2 w-39"
              onChange={(e) => {
                const value = e.target.value;
                let currentItemIndex = filters.findIndex(
                  (v) => v.option === item.option,
                );

                const tempFilters = filters.map((object) => ({ ...object }));

                tempFilters[currentItemIndex].value = value;

                setFilters(tempFilters);
              }}
            />
          )}
          {item.option === '$DATE' && (
            <input
              type="date"
              value={item.value}
              onChange={(e) => {
                const value = e.target.value;
                let currentItemIndex = filters.findIndex(
                  (v) => v.option === item.option,
                );

                const tempFilters = filters.map((object) => ({ ...object }));

                tempFilters[currentItemIndex].value = value;

                setFilters(tempFilters);
              }}
              className="custom-input-date custom-input-date-1 w-full bg-white px-1 font-medium outline-none transition dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          )}
          {item.option === '$DATE_RANGE' && (
            <div className="flex">
              <input
                type="date"
                className="custom-input-date custom-input-date-1 w-full bg-white px-1 font-medium outline-none transition dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              <span> - </span>
              <input
                type="date"
                className="custom-input-date custom-input-date-1 w-full bg-white px-1 font-medium outline-none transition dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          )}

          {isEditing && (
            <div className="w-6">
              <RiCloseLine
                color={'#d02222'}
                size={25}
                className="pt-1 hover:cursor-pointer"
                onClick={() => {
                  const res = filters.filter((v) => v.option !== item.option);
                  setFilters(res);
                }}
              />
            </div>
          )}
        </div>
      ))}
      <div className="flex mt-2">
        {isEditing && (
          <AiOutlinePlus
            size={30}
            className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#e91e630f]"
            onClick={() => {
              let filtersTemp = filters.map((object) => ({ ...object }));
              filtersTemp.push({
                option: FiltersOptions[filters.length],
                value: '',
              });
              setFilters(filtersTemp);
            }}
          />
        )}
        {isEditing ? (
          <AiOutlineClose
            size={30}
            className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#e91e630f]"
            onClick={() => setIsEditing(!isEditing)}
          />
        ) : (
          <AiTwotoneEdit
            size={30}
            className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#e91e630f]"
            onClick={() => setIsEditing(!isEditing)}
          />
        )}
        <RxDividerVertical size={30} />
        <AiOutlineFileSearch
          size={30}
          className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#8bc34a24]"
        />
        <AiOutlineSave
          size={30}
          className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#8bc34a24]"
        />
        <AiOutlineClear
          size={30}
          className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#8bc34a24]"
          onClick={() => {
            setIsEditing(false);
            setFilters(defaultFilters);
          }}
        />
        <RxDividerVertical size={30} />
        <AiOutlineFilePdf
          size={30}
          className="cursor-pointer mr-1 border p-0.5 rounded-sm border-solid border-[#ccc] bg-[#ffffff] hover:bg-[#3f51b517]"
        />
      </div>
    </div>
  );
};

export default TagsInput;
