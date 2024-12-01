'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [symbol, setSymbol] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (symbol.trim()) {
      router.push(`${symbol}`);
    } else {
      alert('Please enter a valid symbol name.');
    }
  };

  return (
    <>
      <h1 className="text-[#242424] text-[19px] font-semibold border-b-[1px] pb-4">
        Crypto
      </h1>
      <div>
        <label className="text-base font-normal">
          <h3>Enter Symbol Name and Search</h3>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-[524px] h-[56px] px-[20px] py-[12px] border-[1px] rounded-[4px] mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Symbol Name"
          />
        </label>
      </div>

      <div>
        <button
          onClick={handleSearch}
          className="w-[524px] h-[56px] rounded-[4px] text-white bg-[#0059FF] hover:bg-blue-600 transition-all"
        >
          Search
        </button>
      </div>
    </>
  );
}
