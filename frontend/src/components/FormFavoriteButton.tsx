import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react"

interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  favorite: boolean;
  setFavorite: Dispatch<SetStateAction<boolean>>
}

const FormFavoriteButton = ({ favorite, setFavorite, ...rest } : FavoriteButtonProps) => {

  const color = favorite === true ? "#FFA000" : "#FFFFFF"
  return (
    <button
      onClick={() => setFavorite((prev) => !prev)}
      type="button"
      { ...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.47998 7.50375L2.32617 8.29666L6.88529 11.9638L5.69595 17.5141L9.85865 14.3425L15.0125 17.5141L13.6249 11.9638L17.4903 8.29666L12.2373 7.50375L9.85865 2.34995L7.47998 7.50375Z"  fill={color} />
        <path d="M9.93799 13.7112L6.29971 15.9077L7.25766 11.7662L4.04514 8.97947L8.28335 8.62145L9.93799 4.71223L11.5926 8.62145L15.8308 8.97947L12.6183 11.7662L13.5763 15.9077M19.6143 7.76026L12.657 7.17001L9.93799 0.754639L7.21896 7.17001L0.261719 7.76026L5.53529 12.3371L3.95805 19.1396L9.93799 15.5303L15.9179 19.1396L14.331 12.3371L19.6143 7.76026Z" fill="#455A64" />
      </svg>
    </button>
  )
}

export default FormFavoriteButton