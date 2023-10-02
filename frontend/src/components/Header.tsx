import Image from "next/image"
import ResetButton from "./ResetButton"
import SearchBar from "./SearchBar"
import { Dispatch, SetStateAction } from "react";
import { TodoProps } from "@/app/page";
import SearchFilter from "./SearchFilter";

interface HeaderProps {
  data: Dispatch<SetStateAction<TodoProps[] | null>>;
}

const Header = ({data}: HeaderProps) => {
  return (
    <div className="flex flex-row items-center w-full gap-[1.125rem] h-[4.5rem] bg-white shadow-tertiary-shadow px-7 box-border overflow-hidden">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={36}
        height={36}
      />
      <h1 className="hidden md:block">CoreNotes</h1>
      <SearchBar setData={data} />
      <SearchFilter setData={data}/>
      <ResetButton setData={data} className="self-center ml-auto"/>
    </div>
  )
}

export default Header