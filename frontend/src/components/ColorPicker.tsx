import { Popover, Transition } from '@headlessui/react'
import palletColors from '@/utils/palletColors'
import Circle from './Circle';
import { Dispatch, SetStateAction } from 'react';
import { DataProps } from './Card';

interface ColorPickerProps {
  id: number;
  emitter: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<DataProps>>;
}

const ColorPicker = ({ id, emitter, setColor }: ColorPickerProps) => {

  return (
    <Popover className="relative h-[1.875rem] ">
      <Popover.Button className="justify-center">
        <div className="rounded-full hover:bg-[#FFE3B3]">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <path d="M21.4957 16.5469C21.4957 16.5469 19.4957 18.7169 19.4957 20.0469C19.4957 20.5773 19.7064 21.086 20.0815 21.4611C20.4565 21.8362 20.9652 22.0469 21.4957 22.0469C22.0261 22.0469 22.5348 21.8362 22.9099 21.4611C23.285 21.086 23.4957 20.5773 23.4957 20.0469C23.4957 18.7169 21.4957 16.5469 21.4957 16.5469ZM7.70566 15.0469L12.4957 10.2569L17.2857 15.0469M19.0557 13.9869L10.1157 5.04691L8.70566 6.45691L11.0857 8.83691L5.93566 13.9869C5.34566 14.5469 5.34566 15.5169 5.93566 16.1069L11.4357 21.6069C11.7257 21.8969 12.1157 22.0469 12.4957 22.0469C12.8757 22.0469 13.2657 21.8969 13.5557 21.6069L19.0557 16.1069C19.6457 15.5169 19.6457 14.5469 19.0557 13.9869Z" fill="#51646E" />
            <path d="M12.5644 20.0439L7.73438 15.0001H17.3018L12.5644 20.0439Z" fill="#FFA000" />
          </svg>
        </div>
      </Popover.Button>

      <Transition
        enter="transition duration-400 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >

        <Popover.Panel className="absolute z-10 top-9">
          <div className="grid-rows-2 w-[18.125rem] lg:flex lg:flex-row items-center lg:w-[34.375rem] lg:h-[3.125rem] bg-[#FFFFFF] border px-3 py-1 border-primary-border rounded-[0.5625rem] shadow-secondary-shadow">
            {
              palletColors.map((color) => (
                <Circle key={color} color={color} todoId={id} emitter={emitter} setColor={setColor} />
              ))
            }
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default ColorPicker