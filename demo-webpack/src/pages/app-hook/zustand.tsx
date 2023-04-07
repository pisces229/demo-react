import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CountState {
  count: number;
  getCount: () => number;
  plus: (count: number) => void;
  reset: () => void;
  fetch: () => Promise<void>;
}

// const useCountStore = create<CountState>()(
//   (set, get) => ({
//     count: 0,
//     getCount: () => get().count,
//     plus: (count) => set((state) => ({ count: state.count + count })),
//     reset: () => set(() => ({ count: 0 })),
//     fetch: async () => {
//       const response = await fetch('');
//       set({ count: await response.json() })
//     },
//   })
// );

// You can persist your store's data using any kind of storage.
const useCountStore = create<CountState>()(
  persist(
    (set, get) => ({
      count: 0,
      getCount: () => get().count,
      plus: (count) => set((state) => ({ count: state.count + count })),
      reset: () => set((state) => ({ count: 0 })),
      fetch: async () => {
        const response = await fetch('');
        set({ count: await response.json() });
      },
    }),
    {
      name: 'CountStore',
      // getStorage: () => sessionStorage,
      getStorage: () => localStorage,
    },
  ),
);

// const { getState, setState, subscribe, destroy } = useCountStore;
useCountStore.subscribe(console.log);
// useCountStore.setState({ count: 0 });
// useCountStore.destroy();

const First = () => {
  const countState = useCountStore((state) => state.count);
  const countPlus = useCountStore((state) => state.plus);
  const countReset = useCountStore((state) => state.reset);
  return (
    <>
      <h3>First</h3>
      <p>Count:[{countState}]</p>
      <button onClick={async () => countPlus(1)}>Plus</button>
      <button onClick={async () => countReset()}>Reset</button>
    </>
  );
};

const Second = () => {
  const countState = useCountStore((state) => state.count);
  const countPlus = useCountStore((state) => state.plus);
  const countReset = useCountStore((state) => state.reset);
  return (
    <>
      <h3>Second</h3>
      <p>Count:[{countState}]</p>
      <button onClick={async () => countPlus(1)}>Plus</button>
      <button onClick={async () => countReset()}>Reset</button>
    </>
  );
};

const Index = () => {
  console.log('Zustand');
  // const countState = useCountStore((state) => (state.count));
  // const countPlus = useCountStore((state) => (state.plus));
  // const countReset = useCountStore((state) => (state.reset));
  // const countFetch = useCountStore((state) => (state.fetch));
  const { countState, countPlus, countReset, countFetch } = useCountStore((state) => ({
    countState: state.count,
    countPlus: state.plus,
    countReset: state.reset,
    countFetch: state.fetch,
  }));
  return (
    <>
      <h3>Zustand</h3>
      <p>Count:[{countState}]</p>
      <button onClick={async () => countPlus(1)}>Plus</button>
      <button onClick={async () => countReset()}>Reset</button>
      <First></First>
      <Second></Second>
    </>
  );
};
export default Index;
