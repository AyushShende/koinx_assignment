export default function Performance() {
  return (
    <div className="space-y-6">
      <h3 className="title text-2xl">Performance</h3>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <p className="font-light">Today&apos;s Low</p>
          <p className="">46,930.22</p>
        </div>
        <div className="flex-1 rounded-lg mx-6 h-1 bg-gradient-to-r from-red-400 via-orange-400 to-green-400"></div>
        <div className="space-y-2">
          <h3 className="font-light">Today&apos;s High</h3>
          <p className="">49,343.80</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <p className="font-light">52W Low</p>
          <p className="">16,930.22</p>
        </div>
        <div className="flex-1 mx-6 h-1 rounded-lg bg-gradient-to-r from-red-400 via-orange-400 to-green-400"></div>
        <div className="space-y-2">
          <h3 className="font-light">52W High</h3>
          <p className="">49,743.83</p>
        </div>
      </div>
    </div>
  );
}
