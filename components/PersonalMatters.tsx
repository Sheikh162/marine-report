'use client';
import { PersonalMatter } from "@/types";
import React, { useState } from 'react';

interface PersonalMattersProps {
  name:string,
  setValue:any//()=>void
}

export function PersonalMatters({ name,setValue }: PersonalMattersProps) {
  const [currentSelection, setCurrentSelection] = useState<PersonalMatter[]>([]);

  const toggleMatter = (matter: PersonalMatter) => {
    currentSelection.includes(matter)
      ? setCurrentSelection(currentSelection=>currentSelection.filter(m => m !== matter))
      : setCurrentSelection(currentSelection=>[...currentSelection, matter])
      setValue(name,currentSelection)
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Personal Matters</label>
      <div className="space-y-2">
        {Object.values(PersonalMatter).map((matter) => (
          <div key={matter} className="flex items-center">
            <input 
              type="checkbox"
              checked={currentSelection.includes(matter)}
              onChange={() => toggleMatter(matter)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              {matter}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 
register all those
*/