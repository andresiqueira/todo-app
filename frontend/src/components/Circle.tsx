import { ButtonHTMLAttributes, Dispatch } from "react";
import { DataProps } from "./Card";
import fetchApi from "@/utils/fetchApi";

interface CircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  todoId: number;
  emitter: Dispatch<React.SetStateAction<string>>;
  setColor: Dispatch<React.SetStateAction<DataProps>>;
}
const Circle = ({ color, todoId, emitter, setColor, ...rest }: CircleProps) => {

  const handleEdit = async () => {
    if (!todoId) return

    try {
      const result = await fetchApi({
        id: todoId, options: {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            containerColor: color
          })
        }
      })

      setColor && setColor((prev: any) => { return { ...prev, containerColor: color } })
      emitter && emitter(String(new Date))
    } catch (error) {
      console.log("Erro ao mudar cor do card", error)
    }
  }

  return (
    <button
      onClick={handleEdit}
      type="button"
      style={{ backgroundColor: color }}
      className={`rounded-full w-9 h-9 m-1`}
      {...rest}
    />
  )
}

export default Circle