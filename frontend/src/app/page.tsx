'use client'
import Card from '@/components/Card'
import FormCard from '@/components/FormCard'
import Header from '@/components/Header'
import fetchApi from '@/utils/fetchApi'
import { useEffect, useState } from 'react'

export interface DataProps {
  id: number;
  title: string;
  description: string;
  is_favorite: number;
  container_color: string;
}

export interface TodoProps {
  id: number;
  title: string;
  description: string;
  is_favorite: number;
  status: string;
  container_color: string;
  created_at: string;
  updated_at: string | null;
}

export interface ApiResponseProps {
  message: string;
  data: TodoProps[];
}

export default function Home() {
  const [data, setData] = useState<TodoProps[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [emitter, setEmitter] = useState<string>('')

  const handleResponseApi = async () => {
    try {
      setLoading(true)
      const result = await fetchApi({})
      setData(result.data)
      setLoading(false)
    } catch (error) {
      console.log("Erro ao listar todos: ", error)
    }
  }

  useEffect(() => {
    handleResponseApi()
    setEmitter(String(new Date))
  }, [emitter])

  return (
    <div className='flex flex-col items-center max-w-[160rem] m-auto relative'>
      <Header data={setData} />
      <FormCard emitter={setEmitter} />
      <div className='grid xl:grid-cols-3 gap-9 max-w-max px-24 pb-14'>
        {
          loading ? (<span>Carregando...</span>) :
          data?.map(({ id, title, description, is_favorite, container_color }: DataProps) => (
            <Card key={id} todoId={id} title={title} description={description} isFavorite={is_favorite} containerColor={container_color} emitter={setEmitter} />
          ))
        }
      </div>
    </div>
  )
}
