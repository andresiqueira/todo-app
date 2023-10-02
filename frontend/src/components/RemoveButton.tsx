import fetchApi from "@/utils/fetchApi";
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react"

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  todoId: number;
  emitter: Dispatch<SetStateAction<string>>;
}

const RemoveButton = ({ todoId, emitter, ...rest }: RemoveButtonProps) => {
  const handleRemove = async (id: number) => {
    if (!id) return

    try {
      const result = await fetchApi({id, options: {method: 'DELETE'}})

      emitter && emitter(String(new Date))
    } catch (error) {
      console.log("Erro ao deletar: ", error)
    }
  }

  return (
    <button
      type="button"
      {...rest}
      onClick={() => {
        handleRemove(todoId)
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
        <path d="M13.6141 2.29924L12.2905 0.975616L7.04288 6.22319L1.79531 0.975616L0.47168 2.29924L5.71926 7.54682L0.47168 12.7944L1.79531 14.118L7.04288 8.87045L12.2905 14.118L13.6141 12.7944L8.36651 7.54682L13.6141 2.29924Z" fill="#51646E" />
      </svg>
    </button>
  )
}

export default RemoveButton