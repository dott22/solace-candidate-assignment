"use client";
import SearchForm from "./search-form";

import { useState } from "react";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [openAccordion, setOpenAccordion] = useState<number>(-1);

  const [searchParams, setSearchParams] = useState({
    firstName: "",
    lastName: "",
    city: "",
    degree: "",
    specialty: "",
    yearsOfExperience: "",
  });
  

  const handleSearch = (e: any) => {
    console.log("inside handleSearch: ", searchParams, searchParams.firstName);
    e.preventDefault();

    const url =
      `firstName=${searchParams.firstName}&` +
      `lastName=${searchParams.lastName}&city=${searchParams.city}&degree=${searchParams.degree}&` +
      `specialty=${searchParams.specialty}&yearsOfExperience=${searchParams.yearsOfExperience}`;
    fetch("/api/advocates?" + encodeURI(url)).then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });

    setFilteredAdvocates(filteredAdvocates);
    console.log("filteredAvocates: ", filteredAdvocates);
  };

  function handleInputChange(e: any) {
    const { id, value } = e.target;
    setSearchParams({ ...searchParams, [id]: value });
    console.log("inside handleInputChange");
  }

  const toggleAccordion = (index: number) => {
    if (openAccordion == index) setOpenAccordion(-1);
    else setOpenAccordion(index)
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <SearchForm
        searchParams={searchParams}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />
      <br />
      <table className="table-auto bg-white border border-gray-300">
        <thead className="bg-solacegreen-500 text-white">
          <tr>
            <th className="border border-solacegreen-500 px-4 py-2">
              First Name
            </th>
            <th className="border border-solacegreen-500 px-4 py-2">
              Last Name
            </th>
            <th className="border border-solacegreen-500 px-4 py-2">City</th>
            <th className="border border-solacegreen-500 px-4 py-2">Degree</th>
            <th className="border border-solacegreen-500 px-4 py-2">
              Specialties
            </th>
            <th className="border border-solacegreen-500 px-4 py-2">
              Years of Exp
            </th>
            <th className="border border-solacegreen-500 px-4 py-2">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate, rowIndex) => {
            let pNum = advocate.phoneNumber.toString();
            let formattedPNum = `(${pNum.substr(0, 3)}) ${pNum.substr(3, 3)}-${pNum.substr(6, 4)}`
            return (
              <tr key={rowIndex}>
                <td className="border border-solacegreen-500 px-4 py-2">
                  {advocate.firstName}
                </td>
                <td className="border border-solacegreen-500 px-4 py-2">
                  {advocate.lastName}
                </td>
                <td className="border border-solacegreen-500 px-4 py-2">
                  {advocate.city}
                </td>
                <td className="border border-solacegreen-500 px-4 py-2">
                  {advocate.degree}
                </td>
                <td className="border border-solacegreen-500 px-4 py-2">
                  <div className="">
                    <div className="m-2 space-y-2">
                      <div
                        className={`group flex flex-col gap-0 rounded-lg ${(openAccordion == rowIndex) ? '' : 'collapsed'}`}
                        tabIndex="1"
                      >
                        <div className="flex mb-0 pb-0 cursor-pointer items-center justify-between">
                          <span className="mb-0 pb-0"> {advocate.specialties[0]} </span>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Chevron_down_square.svg"
                            className={`h-2 w-3 transition-transform duration-500 ${(openAccordion == rowIndex) ? 'rotate-180' : ''}`}
                            onClick={(e) => { e.preventDefault(); toggleAccordion(rowIndex); }}
                          />
                        </div>
                        <div className={`overflow-hidden transition-max-height duration-500 ${(openAccordion == rowIndex) ? 'max-h-screen' : 'max-h-0'}`}>
                          {advocate.specialties.map((s, index) => (
                            (index > 0) && <div>{s}</div> 
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border text-center border-solacegreen-500 px-4 py-2">
                  {advocate.yearsOfExperience}
                </td>
                <td className="border border-solacegreen-500 px-4 py-2 whitespace-nowrap">
                  {formattedPNum}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
