import React from "react";

interface FilterBarProps {
    filter: {
      from: string;
      to: string;
    };
    setFilter: (filter: { from: string; to: string }) => void;
  }

  function FilterBar({ filter, setFilter }: FilterBarProps) {
      
   return ( 
        <><input onChange={e => setFilter({ ...filter, from: e.target.value })} type="date" value={filter.from} />
          <input onChange={e => setFilter({ ...filter, to: e.target.value })}  type="date" value={filter.to} />
        </>
   )
  }
  export default FilterBar
  
