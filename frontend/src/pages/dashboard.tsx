import { useState } from 'react';
import { canSSRAuth } from '../utils/canSSRAuth';
import Head from 'next/head';
import styles from '../../styles/Dashboard.module.scss';
import { Header } from '../components/Header/Header';
import { FiRefreshCcw } from 'react-icons/fi';
import { setupAPIClient } from '../services/api';


export default function Dashboard(){

  return (
    <>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  );
}
