import CardFavoriteButton from "./CardFavoriteButton"
import RemoveButton from "./RemoveButton"
import EditButton from "./EditButton"
import ColorPicker from "./ColorPicker"
import { Dispatch, FormHTMLAttributes, SetStateAction, useEffect, useRef, useState } from "react";
import fetchApi from "@/utils/fetchApi";

export interface CardProps extends FormHTMLAttributes<HTMLFormElement> {
  todoId: number;
  title: string;
  description: string;
  isFavorite: number;
  containerColor: string;
  emitter: Dispatch<SetStateAction<string>>
}

export interface DataProps {
  title: string;
  description: string;
  containerColor: string;
}

const Card = ({
  todoId,
  title,
  description,
  isFavorite,
  containerColor,
  emitter
}: CardProps) => {
  const [editable, setEditable] = useState<boolean>(false)
  const [data, setData] = useState<DataProps>({
    title,
    description,
    containerColor
  })

  const inputTitleRef = useRef<HTMLInputElement>(null)

  const handleEdit = async () => {
    if (!todoId) return

    try {
      const result = fetchApi({
        id: todoId, options: {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            containerColor: data.containerColor
          })
        }
      })

      setEditable(false)
    } catch (error) {
      console.log("Erro ao atualizar dados do card: ", error)
    }
  }

  useEffect(() => {
    editable && inputTitleRef.current?.focus()
  }, [editable])

  return (
    <form style={{ backgroundColor: data.containerColor }} className="flex flex-col justify-between box-border w-[24.375rem] h-[27.3494rem] shadow-primary-shadow rounded-[1.5625rem]">
      <div style={{ borderColor: containerColor === "#FFFFFF" ? '#D9D9D9' : "#FFFFFF" }} className="w-full pb-[0.75rem] flex flex-row justify-between border-b-[0.0625rem] px-[1.625rem] py-[1.0625rem]">
        {
          !editable ?
            <input ref={inputTitleRef} disabled className="text-[0.8875rem] leading-normal font-bold bg-transparent w-full focus:outline-none" value={data.title} />
            :
            <input
              className="text-[0.8875rem] leading-normal font-bold bg-transparent w-full focus:outline-none"
              value={data.title}
              onChange={(event) => { setData((prev) => { return { ...prev, title: event.target.value } }) }}
              ref={inputTitleRef}
            />
        }
        <CardFavoriteButton todoId={todoId} emitter={emitter} isFavorite={isFavorite} />
      </div>
      <div className="h-full px-[1.625rem] py-[0.875rem]">
        {
          !editable ?
            <textarea disabled className="text-[0.8125rem] leading-normal font-normal bg-transparent w-full h-full focus:outline-none resize-none overflow-hidden" value={data.description} />
            :
            <textarea
              className="text-[0.8125rem] leading-normal font-normal bg-transparent w-full h-full focus:outline-none resize-none overflow-hidden"
              value={data.description}
              onChange={(event) => { setData((prev) => { return { ...prev, description: event.target.value } }) }}
            />
        }
      </div>
      <div className="flex flex-row gap-3 px-[1.625rem] py-[0.6875rem]">
        <EditButton handleEdit={setEditable} />
        <ColorPicker id={todoId} emitter={emitter} setColor={setData} />
        {
          editable && <button className="text-sm" type="button" onClick={handleEdit}>Salvar</button>
        }
        <RemoveButton todoId={todoId} emitter={emitter} className="self-center ml-auto" />
      </div>
    </form>
  )
}

export default Card