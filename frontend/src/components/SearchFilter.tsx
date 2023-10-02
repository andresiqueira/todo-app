import { Listbox, Transition } from '@headlessui/react'
import { Dispatch, FormHTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import { BiFilterAlt } from "react-icons/bi";
import palletColors from '@/utils/palletColors';
import fetchApi from '@/utils/fetchApi';
import { TodoProps } from '@/app/page';

interface SearchFilterProps extends FormHTMLAttributes<HTMLFormElement> {
  setData: Dispatch<SetStateAction<TodoProps[] | null>>;
}

const SearchFilter = ({ setData }: SearchFilterProps) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (selectedPerson !== null && selectedPerson === "1") {
          const result = await fetchApi({
            params: { is_favorite: selectedPerson }
          })
          setData && setData(result.data)
          setSelectedPerson(null)
        }

        if (selectedPerson !== null && selectedPerson !== "1") {
          const result = await fetchApi({
            params: { container_color: selectedPerson }
          })

          if (result.data.length === 0) return

          setData && setData(result.data)
          setSelectedPerson(null)
        }
      } catch (error) {
        console.log("Erro ao fazer fetch de pesquisa: ", error)
      }
    }
    handleSearch()
  },
    [selectedPerson, setData])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="">
        <BiFilterAlt className='w-5 h-5 text-[#51646E;]' />
      </Listbox.Button>

      <Transition
        enter="transition  ease-in-out"
        leave="transition ease-in-out"
      >
        <Listbox.Options className=" z-50 absolute grid -mt-2 bg-white gap-4 p-2 border-primary-border rounded-[0.5625rem] shadow-secondary-shadow">
          {palletColors.map((color) => (
            <Listbox.Option
              key={color}
              value={color}
            >
              <div style={{ backgroundColor: color }} className='rounded-full w-4 h-4'>

              </div>
            </Listbox.Option>
          ))}
          <Listbox.Option
            value="1"
          >
            <svg className='-mt-[6px]' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7.47998 7.50375L2.32617 8.29666L6.88529 11.9638L5.69595 17.5141L9.85865 14.3425L15.0125 17.5141L13.6249 11.9638L17.4903 8.29666L12.2373 7.50375L9.85865 2.34995L7.47998 7.50375Z" fill="#FFA000" />
              <path d="M9.93799 13.7112L6.29971 15.9077L7.25766 11.7662L4.04514 8.97947L8.28335 8.62145L9.93799 4.71223L11.5926 8.62145L15.8308 8.97947L12.6183 11.7662L13.5763 15.9077M19.6143 7.76026L12.657 7.17001L9.93799 0.754639L7.21896 7.17001L0.261719 7.76026L5.53529 12.3371L3.95805 19.1396L9.93799 15.5303L15.9179 19.1396L14.331 12.3371L19.6143 7.76026Z" fill="#455A64" />
            </svg>
          </Listbox.Option>
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export default SearchFilter