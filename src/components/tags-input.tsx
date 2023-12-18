interface TagsInputProps {
}

const TagsInput = ({ }: TagsInputProps) => {


  return (

    <div className="m-4 relative col-span-8 ">

      <label htmlFor="tags-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search Query Tags</label>

      <input type="text" id="tags" placeholder="Type to search..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </input>
      <div id="tags-suggestions" className="mt-2 bg-white border border-gray-300 rounded-lg shadow-md hidden">
      </div>

      <div id="tags-container" className="mt-2">
      </div>

      {/* <p id="tags-helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Separate tags with commas. Example: programming, design, web development</p> */}

    </div>
  );
};

export default TagsInput;
