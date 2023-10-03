import { Dispatch, FormEvent, FormHTMLAttributes, SetStateAction, useRef } from "react"
import SearchButton from "./SearchButton"
import { TodoProps } from "@/app/page";
import fetchApi from "@/utils/fetchApi";
import ErrorMessage from "./ErrorMessage";

interface SearchBarProps extends FormHTMLAttributes<HTMLFormElement> {
  setData: Dispatch<SetStateAction<TodoProps[] | null>>;
  setError: Dispatch<SetStateAction<string>>;
  error: string;
}

const SearchBar = ({ setData, error, setError, ...rest }: SearchBarProps) => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    try {
      if (searchInput.current) {
        const result = await fetchApi({
          params: { title: searchInput.current?.value }
        })

        if (result.data.length === 0) {
          setError('error search')
        }

        if (result.data.length > 0) {
          setError('')
        }

        setData && setData(result.data)
        searchInput.current.value = ""
      }
    } catch (error) {
      console.log("Erro ao fazer fetch de pesquisa: ", error)
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => handleSearch(event)}
        className="flex relative flex-row items-center justify-between rounded-[0.1875rem] ml-[0.625rem] xl:w-[33.125rem] border border-primary-border h-10 shadow-primary-shadow px-3"
        {...rest}
      >
        <input ref={searchInput} className="focus:outline-none text-[0.875rem] w-full" type="text" placeholder="Pesquisar notas" />
        <SearchButton />
      </form>
      {
        error === "error search" && <ErrorMessage message="Sua pesquisa não encontrou nenhuma tarefa com o título correspondente." />
      }
    </>
  )
}

export default SearchBar