import { useState } from 'react';

export const useStitcher = () => {  
  const [finalValue, setFinalValue] = useState<string>(' ')

  const stitchValue = (clickedValue: string|null) => setFinalValue(`${finalValue}${clickedValue}`)

  const clearValue = () => setFinalValue('')

  return {finalValue, stitchValue, clearValue};
}