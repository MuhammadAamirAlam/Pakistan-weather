const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-10 h-10 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-500 text-sm font-medium">
        Loading weather data...
      </p>
    </div>
  );
};

export default LoadingSpinner;
