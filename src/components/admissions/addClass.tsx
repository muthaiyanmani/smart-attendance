export default function AddClass() {
  return (
    <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          Class
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="py-2 px-4 border block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-700"
        >
          Section
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="py-2 px-4 border block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Class Advisor
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="py-2 px-4 block border w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Academic Year
        </label>
        <div className="mt-1">
          <select
            id="email"
            name="email"
            autoComplete="email"
            className="py-2 px-4 border block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          >
            <option>{`${new Date().getFullYear()} - ${
              new Date().getFullYear() + 1
            }`}</option>
          </select>
        </div>
      </div>
      <br />
      <div className="sm:col-span-2 grid grid-cols-2 gap-8 md:gap-10">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </div>
    </form>
  );
}
