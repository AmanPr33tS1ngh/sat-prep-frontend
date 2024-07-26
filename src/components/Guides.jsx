import React from 'react';

const Guides = () => {
  const guides = [
    { title: 'VISA Guide', description: 'Know how to crack the Visa interview and also what you need on D-Day' },
    { title: 'Scholarship Guide', description: 'Know about how you can study at your dream university almost for free' },
    { title: 'A-Z of Study Abroad Guide', description: 'Plan of action curated by an expert based on your profile and interests' }
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Download free study abroad guides curated by our experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
            <p className="mb-4">{guide.description}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Download Guide</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
