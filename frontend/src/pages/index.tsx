//Next
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

//Styles
import styles from '../../styles/Home.module.scss'
import logoImg from '../public/logo.svg'

//React
import {useContext, FormEvent, useState} from 'react'
import {toast} from 'react-toastify'

//Components
import { Input } from '../components/UI/Input/Input'
import { Button } from '../components/UI/Button/Button'

//Context
import {AuthContext} from '../contexts/AuthContext'
import {canSSRGuest} from '../utils/canSSRGuest'



export default function Home() {
  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)



  async function handleLogin(e: FormEvent){
    e.preventDefault();

    if(email === '' || password === ''){
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true)

    let data = {
      email,
      password
    }
    await signIn(data);

    setLoading(false)
  }

  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" priority={true}/>

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button
            type="submit"
            loading={loading}
          >
            Acessar
          </Button>
        </form>

        <Link legacyBehavior href="/signup">
           <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
        </Link>

      </div>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async(context) => {
  return{
    props: {}
  }
})