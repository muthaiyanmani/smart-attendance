import { useFormik } from "formik";
import { useClass } from "src/api/create-class/createClass";
import Input from "src/components/global/Input";

export default function AddClassForm() {
  const { mutate } = useClass();
  const initialValues = {
    name: "",
    teacher: "",
    section: "",
    year: `${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => mutate(values),
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <Input
          label="Class Name"
          name="name"
          formik={formik}
          isRequired={true}
        />
      </div>
      <div>
        <Input
          label="Section"
          name="section"
          formik={formik}
          isRequired={true}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          label="Teacher"
          name="teacher"
          formik={formik}
          isRequired={true}
        />
      </div>
      <div className="sm:col-span-2">
        <div className="mt-1">
          <Input
            label="Academic Year"
            name="year"
            formik={formik}
            isDisabled={true}
            isRequired={false}
          />
        </div>
      </div>
      <br />
      <div className="sm:col-span-2 grid grid-cols-2 gap-8 md:gap-10">
        <button
          type="reset"
          onClick={formik.handleReset}
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
