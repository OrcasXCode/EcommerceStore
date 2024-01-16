import { atom } from 'recoil';
// import { persistAtom } from 'recoil-persist';
// import { configure } from 'recoil';

// Define Recoil atom
export const cartAtom = atom({
  key: 'cartAtom',
  default:0,
});

// // Create a persisted version of the atom
// const { persistAtom: persist } = persistAtom({
//   key: 'recoil-persist',
//   storage: localStorage, // You can choose a different storage method if needed
// });

// // Configure Recoil with the persisted atom
// configure({
//   atomsManager: new Map({
//     [cartAtom.key]: persist(cartAtom),
//   }),
// });



// import { atom, RecoilRoot } from 'recoil';
// import { persistAtom } from 'recoil-persist';
// import { render } from 'react-dom';
// import App from './App';

// export const cartAtom = atom({
//   key: 'cartAtom',
//   default: { value: 0 },
// });

// const { persistAtom: persist } = persistAtom({
//   key: 'recoil-persist',
//   storage: localStorage,
// });

// const AppWithRecoil = () => (
//   <RecoilRoot initializeState={({ set }) => persist(cartAtom, set)}>
//     <App />
//   </RecoilRoot>
// );

// render(<AppWithRecoil />, document.getElementById('root'));
