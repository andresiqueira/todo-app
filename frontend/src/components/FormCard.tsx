import { Dispatch, FormEvent, FormHTMLAttributes, SetStateAction, useState } from "react";
import FormFavoriteButton from "./FormFavoriteButton";
import fetchApi from "@/utils/fetchApi";
import * as yup from "yup";

const formSchema = yup.object().shape({
  input: yup.string().required("Título é obrigatório"),
  textarea: yup.string().required("Descrição é obrigatório"),
});

interface FormCardProps extends FormHTMLAttributes<HTMLFormElement> {
  emitter: Dispatch<SetStateAction<string>>;
}

const FormCard = ({ emitter, ...rest }: FormCardProps) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [values, setValues] = useState<{ input: string, textarea: string }>({
    input: '',
    textarea: '',
  });

  const [errors, setErrors] = useState<{ input: string | null, textarea: string | null }>({
    input: null,
    textarea: null,
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await formSchema.validate(values, { abortEarly: false });
      const result = await fetchApi({
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.input,
            description: values.textarea,
            status: "todo",
            isFavorite: favorite,
            containerColor: "#FFFFFF",
          }),
        },
      });

      setValues({
        input: '',
        textarea: '',
      })
      setFavorite(false)

      emitter(String(new Date));
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        const newErrors = {} as typeof errors;
        e?.inner.forEach((error) => {
          newErrors[error.path as keyof typeof errors] = error.message;
        });
        setErrors(newErrors);
      } else {
        console.log("Error ao criar todo: ", e);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, input: event.target.value }));
    setErrors((prev) => ({ ...prev, input: null }));
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, textarea: event.target.value }));
    setErrors((prev) => ({ ...prev, textarea: null }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col relative w-[24.375rem] xl:w-[33.125rem] bg-white border border-primary-border xl:rounded-[0.1875rem] rounded-3xl mt-6 mb-10 py-3 shadow-secondary-shadow"
      {...rest}
    >
      <div className="flex flex-row justify-between px-5 pb-3 border-b">
        <input
          value={values.input}
          onChange={handleInputChange}
          className="focus:outline-none w-full text-[0.8875rem] leading-normal font-bold"
          type="text"
          placeholder="Título"
        />
        <FormFavoriteButton favorite={favorite} setFavorite={setFavorite} />
      </div>
      {errors.input && <div className="text-red-500">{errors.input}</div>}

      <textarea
        value={values.textarea}
        onChange={handleTextareaChange}
        className="focus:outline-none rounded-lg w-full flex flex-row px-5 pt-2 pb-3 resize-none overflow-hidden"
        placeholder="Criar nota..."
      />
      {errors.textarea && <div className="text-red-400 m-auto mb-4">{errors.textarea}</div>}

      {values.input?.length > 0 && (
        <button className="text-sm" type="submit">
          Criar
        </button>
      )}
    </form>
  );
};

export default FormCard;