// src/components/homeComponents/testSection.jsx
const TestSection = () => {
  return (
    <section className="bg-gray-100 py-24 px-8 flex flex-col gap-12 max-w-5xl mx-auto my-12 rounded-3xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Scroll Testing Section
        </h2>
        <p className="text-gray-600 mt-2">
          Page ko neeche scroll karein dekhne ke liye ke Menu Bar saath move kar raha hai ya nahi.
        </p>
      </div>

      {/* Demo Cards to create vertical height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-64 flex items-center justify-center font-semibold text-gray-700">
          Block 1
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-64 flex items-center justify-center font-semibold text-gray-700">
          Block 2
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-64 flex items-center justify-center font-semibold text-gray-700">
          Block 3
        </div>
      </div>

      <div className="bg-brand-red/10 border border-brand-red/20 p-12 rounded-2xl text-center text-brand-red font-medium">
        Agar Side Menu scroll karne par upar chala jaye (screen par fix na rahe), toh behavior bilkul accurate hai!
      </div>

      {/* Extra spacing for deep scroll test */}
      <div className="h-[600px] bg-white rounded-2xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
        Deep Scroll Test Area (600px Height)
      </div>
    </section>
  );
};

export default TestSection;