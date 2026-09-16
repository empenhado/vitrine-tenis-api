export function TelaCarregamento() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="bg-gray-200 aspect-square w-full rounded-sm" />

      <div className="flex justify-between items-center mt-3 gap-2">
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>

      <div className="h-3 bg-gray-200 rounded w-1/3 mt-2" />
    </div>
  );
}
