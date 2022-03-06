import Input from "../../global/Input";
import { useFormik } from "formik";

export default function StudentForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    class: "",
    mediumOfInstruction: "",
    dateOfBirth: "",
    address: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    annualIncome: "",
    mobile: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="my-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 ">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1 mr-1 md:mr-5">
                <Input
                  label="First Name"
                  name="firstName"
                  formik={formik}
                  isRequired={true}
                />
              </div>
              <div>
                <Input
                  label="Last Name"
                  name="lastName"
                  isRequired={true}
                  formik={formik}
                />
              </div>
            </div>
            <div>
              <Input
                label="Class"
                name="class"
                isRequired={true}
                isDisabled={true}
                formik={formik}
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Medium of Instruction
                <span className="text-red-600 mx-1">*</span>
              </label>
              <div className="mt-1">
                <select
                  name="mediumOfInstruction"
                  value={formik.values.mediumOfInstruction}
                  onChange={formik.handleChange}
                  autoComplete="given-name"
                  className="block px-2 w-full py-3 border-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                >
                  <option>Tamil</option>
                  <option>English</option>
                </select>
              </div>
            </div>

            <Input label="Email" formik={formik} name="email" type="text" />
            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              isRequired={true}
              formik={formik}
            />

            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="how-can-we-help"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address<span className="text-red-600 mx-1">*</span>
                </label>
                <span
                  id="how-can-we-help-description"
                  className="text-sm text-gray-500"
                >
                  Max. 500 characters
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  className="block w-full px-2 py-3 border-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="md:flex justify-between space-y-4 md:space-y-0">
              <div className="md:w-8/12 mr-2">
                <Input
                  label="Father's Name"
                  name="fatherName"
                  isRequired={true}
                  formik={formik}
                />
              </div>
              <div className="md:w-4/12">
                <Input
                  label="Occupation"
                  formik={formik}
                  name="fatherOccupation"
                />
              </div>
            </div>
            <div className="md:flex justify-between space-y-4 md:space-y-0">
              <div className="md:w-8/12 mr-2">
                <Input
                  label="Mother's Name"
                  name="motherName"
                  isRequired={true}
                  formik={formik}
                />
              </div>
              <div className="md:w-4/12">
                <Input
                  label="Occupation"
                  formik={formik}
                  name="motherOccupation"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Input
                label="Annual Income"
                name="annualIncome"
                type="number"
                formik={formik}
              />
            </div>
            <div className="sm:col-span-2">
              <Input
                label="Contact No."
                name="mobile"
                isRequired={true}
                formik={formik}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right flex justify-evenly sm:col-span-2">
              <button
                type="reset"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
