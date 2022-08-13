import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import NotesList from './NotesList';
import Form from './Form';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="notes" element={<NotesList />} />
        </Routes>
      </div>
    </div>
  );
}
