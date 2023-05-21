import {useState} from "react";

export function useObject(initialValue: any = null) {
  const [objectState, setObjectState] = useState<any>(initialValue);
  return {
    state: objectState,
    setState: function (newState: any) {
      this.state = newState;
      setObjectState(newState);
    }
  }
}
