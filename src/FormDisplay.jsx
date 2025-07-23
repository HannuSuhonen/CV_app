const FormDisplay = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submitted Data</h2>
      <dl className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <dt className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</dt>
            <dd className="text-gray-900">{value ? value.toString() : '—'}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FormDisplay;
