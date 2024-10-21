import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-2xl font-poppins">
      <table className="min-w-full border-2 rounded-2xl font-poppins shadow-md">
        <thead className="font-bold text-[1.1rem] text-text_blue-500 bg-border-100">
          <tr className="p-2 rounded-2xl text-[1.15rem]">
            <th className="border px-4 py-2 text-left rounded-tl-2xl">
              No.
            </th>
            <th className="border px-4 py-2 text-left">Class</th>
            <th className="border px-4 py-2 text-left">Class Teacher</th>
            <th className="border px-4 py-2 text-left rounded-tr-2xl">
              Subject - Teacher
            </th>
          </tr>
        </thead>
        <tbody className="text-[#060606] text-[1rem] rounded-b-2xl">
          {data.map((row, index) => (
            <tr key={index} className="py-2 my-2">
              <td className="border-x px-4 py-2">{row.no}</td>
              <td className="border-x px-4 py-2">{row.class}</td>
              <td className="border-x px-4 py-2">{row.teacher}</td>
              <td className="border-x px-4 py-2 whitespace-pre-wrap">
                {row.subjects.map((subject, i) => (
                  <div key={i}>{subject}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
