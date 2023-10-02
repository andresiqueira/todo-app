import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react"

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleEdit: Dispatch<SetStateAction<boolean>>;
}

const EditButton = ({ handleEdit, ...rest }: EditButtonProps) => {

  return (
    <button
      type="button"
      onClick={() => handleEdit((prev) => !prev)}
      {...rest}
    >
      <div className="rounded-full hover:bg-[#FFE3B3]">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9446 12.1667L17.8324 13.0544L9.2568 21.6111H8.38791V20.7422L16.9446 12.1667ZM20.3446 6.5C20.1085 6.5 19.8629 6.59444 19.6835 6.77389L17.9551 8.50222L21.4968 12.0439L23.2251 10.3156C23.5935 9.94722 23.5935 9.33333 23.2251 8.98389L21.0151 6.77389C20.8262 6.585 20.5901 6.5 20.3446 6.5ZM16.9446 9.51278L6.49902 19.9583V23.5H10.0407L20.4862 13.0544L16.9446 9.51278Z" fill="#51646E" />
        </svg>
      </div>
    </button>
  )
}

export default EditButton