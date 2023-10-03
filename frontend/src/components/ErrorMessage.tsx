const ErrorMessage = ({ message }: { message: string }) => {

  return (
    <span style={{left: "calc(50% - 10rem)"}} className="w-80 absolute top-80 text-center"> {message} </span>
  )
}

export default ErrorMessage