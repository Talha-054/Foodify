

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJzaeOaLO7dEvTTWGWhW92eN5BlkFUG84",
  authDomain: "practise-75eb6.firebaseapp.com",
  databaseURL: "https://practise-75eb6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "practise-75eb6",
  storageBucket: "practise-75eb6.appspot.com",
  messagingSenderId: "103228984981",
  appId: "1:103228984981:web:f6c21dbb7162b54cf9d59c",
//   databaseURL: 'https://practise-75eb6-default-rtdb.asia-southeast1.firebasedatabase.app/'
};


export const app = initializeApp(firebaseConfig);

console.log('db connected')