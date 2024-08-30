interface SearchFormProps {
  searchParams: {
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialty: string;
    yearsOfExperience: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchForm({ searchParams, onInputChange, onSearch } : SearchFormProps ) {
  return (
    <div>
      <form className="w-full" onSubmit={onSearch}>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              value={searchParams.firstName}
              onChange={onInputChange}
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              value={searchParams.lastName}
              onChange={onInputChange}
              placeholder="Doe"
            />
          </div>

          <div className="w-full md:w-1/6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              type="text"
              value={searchParams.city}
              onChange={onInputChange}
              placeholder="Los Angeles"
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="degree"
            >
              Degree
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="degree"
                value={searchParams.degree}
                onChange={onInputChange}
              >
                <option></option>
                <option>MD</option>
                <option>PhD</option>
                <option>MSW</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="specialty"
            >
              Specialty
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="specialty"
                value={searchParams.specialty}
                onChange={onInputChange}
              >
                <option></option>
                <option>Bipolar</option>
                <option>LGBTQ</option>
                <option>Medication/Prescribing</option>
                <option>Suicide History/Attempts</option>
                <option>
                  General Mental Health (anxiety, depression, stress, grief,
                  life transitions)
                </option>
                <option>Men's issues</option>
                <option>
                  Relationship Issues (family, friends, couple, etc)
                </option>
                <option>Trauma & PTSD</option>
                <option>Personality disorders</option>
                <option>Personal growth</option>
                <option>Substance use/abuse</option>
                <option>Pediatrics</option>
                <option>
                  Women's issues (post-partum, infertility, family planning)
                </option>
                <option>Chronic pain</option>
                <option>Weight loss & nutrition</option>
                <option>Eating disorders</option>
                <option>Diabetic Diet and nutrition</option>
                <option>
                  Coaching (leadership, career, academic and wellness)
                </option>
                <option>Life coaching</option>
                <option>Obsessive-compulsive disorders</option>
                <option>
                  Neuropsychological evaluations & testing (ADHD testing)
                </option>
                <option>Attention and Hyperactivity (ADHD)</option>
                <option>Sleep issues</option>
                <option>Schizophrenia and psychotic disorders</option>
                <option>Learning disorders</option>
                <option>Domestic abuse</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="yearsOfExperience"
            >
              Yrs Exp
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="yearsOfExperience"
              type="text"
              value={searchParams.yearsOfExperience}
              onChange={onInputChange}
              placeholder="#"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <button
              className="shadow bg-solacegreen-500 hover:bg-solacegreen-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
