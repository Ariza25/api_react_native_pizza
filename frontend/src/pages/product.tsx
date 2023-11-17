//Next
import Head from 'next/head'
//components
import { Header } from '../components/Header/Header'
//styles
import styles from '../../styles/Product.module.scss'
//utils
import { canSSRAuth } from '../utils/canSSRAuth'
//React
import { FiUpload } from 'react-icons/fi'
import { useState, ChangeEvent, FormEvent } from 'react'
import React from 'react'
import { toast } from 'react-toastify'
//api
import { setupAPIClient } from '../services/api'


type ItemProps = {
    id: string
    name: string
}

interface CategoryProps {
    categoryList: ItemProps[]
}
export default function Product({ categoryList }: CategoryProps) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [avatarUrl, setAvatarUrl] = useState("");
    const [imageAvatar, setImageAvatar] = useState<null | File>(null);

    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState(0)

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }
        const image = e.target.files[0];

        if (!image) {
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    function handleChangeCategory(e: any) {
        setCategorySelected(e.target.value)
    }

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        try {
            const data = new FormData();

            if (name === "" || price === "" || description === "" || imageAvatar == null) {
                toast.warning("Preencha todos os campos");
                return;
            }

            data.append("name", name)
            data.append("price", price)
            data.append("description", description)
            data.append("category_id", categories[categorySelected].id)
            data.append("file", imageAvatar)

            const apiClient = setupAPIClient();

            await apiClient.post("/product", data);

            toast.success("Produto cadastrado com sucesso!")

        } catch (err) {
            toast.error("Oops! Ocorreu um erro ao cadastrar")
        }

        setName("");
        setPrice("");
        setDescription("");
        setImageAvatar(null);
        setAvatarUrl("");
    }

    return (
        <>
            <Head>
                <title>Novo Produto - Sujeito Pizzaria</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar Produtos</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <label className={styles.labelAvatar}>
                            <span><FiUpload size={35} color="#fff" /></span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                            {avatarUrl && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt="Imagem do Produto"
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>

                        <select value={categorySelected} onChange={handleChangeCategory}>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>
                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Preço do produto. Exemplo: R$ 45,00"
                            className={styles.input}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        <textarea
                            placeholder="Descreva seu produto"
                            className={styles.input}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className={styles.buttonAdd}>Cadastrar</button>
                    </form>
                </main>
            </div>

        </>
    )
}

export const getServerSideProps = canSSRAuth(async (context: any) => {
    try {
        const apiClient = setupAPIClient(context);

        const response = await apiClient.get('/category');

        return {
            props: {
                categoryList: response.data
            },
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);

        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
});