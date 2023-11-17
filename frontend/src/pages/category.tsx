//Next
import Head from 'next/head'
//Components
import {Header} from '../components/Header/Header'
//styles
import styles from '../../styles/Category.module.scss'
//React
import {useState, FormEvent} from 'react'
import { toast } from 'react-toastify'
//api
import { setupAPIClient } from '../services/api'

import { canSSRAuth } from '../utils/canSSRAuth'


export default function Category(){
    const [name, setName] = useState("");

    async function handleRegister(e: FormEvent){
        e.preventDefault();

        if(name === ''){
            return toast.error("Digite um nome para a Categoria")
        }
        const apiClient = setupAPIClient();
        await apiClient.post("/category",{
            name: name
        })

        toast.success("Categoria cadastrada com sucesso")
        setName('');
    }

    return(
        <>
            <Head>
                <title>Nova Categoria - Sujeito Pizzaria</title>
            </Head>

            <Header/>
            <main className={styles.container}>
                <h1>Cadastrar Categorias</h1>

                <form className={styles.form} onSubmit={handleRegister}>
                    <input
                    type="text"
                    placeholder="Digite o nome da Categoria"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <button className={styles.buttonAdd} type="submit">Cadastrar</button>
                </form>
            </main>

        </>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return{
        props:{}
    }
})