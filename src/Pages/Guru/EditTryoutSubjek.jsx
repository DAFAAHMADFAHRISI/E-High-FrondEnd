import { useState } from "react";

const EditTryoutSubjek = () => {
  const [options, setOptions] = useState(["", "", "", "", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 w-screen">
      <div className="border-2 border-gray-400 rounded-lg p-6 w-full max-w-xl bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Soal Tryout</h2>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Soal
        </label>
        <textarea className="w-full p-2 border border-gray-600 bg-gray-50 rounded-md h-24 focus:outline-gray-500"></textarea>

        <label className="block mt-4 mb-2 text-sm font-bold text-gray-900">
          Opsi
        </label>
        <button
          className="bg-gray-600 text-white px-3 py-1 rounded-md mb-3 text-sm hover:bg-gray-700"
          onClick={addOption}
        >
          Tambah Opsi
        </button>
        <div className="border border-gray-700 bg-gray-100 p-3 rounded-md space-y-2">
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 border border-gray-600 bg-gray-50 rounded-md focus:outline-gray-500"
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

        <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-700">Simpan</button>

        <div className="flex justify-between mt-4">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Batalkan
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTryoutSubjek;
