import { useState } from "react";

const CreateTryoutSubjek = () => {
  const [options, setOptions] = useState(["", "", "", "", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 w-screen">
      <div className="border-2 border-blue-500 rounded-lg p-6 w-full max-w-xl bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Buat Soal Tryout</h2>
        <label className="block mb-2 text-sm font-medium text-blue-900">
          Soal
        </label>
        <textarea className="w-full p-2 border border-blue-600 bg-blue-50 rounded-md h-24 focus:outline-blue-500"></textarea>


        <label className="block mt-4 mb-2 text-sm font-bold text-blue-900">
          Opsi
        </label>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md mb-3 text-sm hover:bg-blue-600"
          onClick={addOption}
        >
          Buat Opsi
        </button>
        <div className="border border-blue-700 bg-blue-100 p-3 rounded-md space-y-2">
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 border border-blue-600 bg-blue-50 rounded-md focus:outline-blue-500"
              placeholder={`Opsi ${index + 1}`}
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
            Batalkan
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTryoutSubjek;
