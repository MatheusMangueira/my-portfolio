type ButtonSubmitFormProps = {
  type: "button" | "submit" | "reset" | undefined;
  childrem: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSubmitForm = ({
  childrem,
  type,
  ...rest
}: ButtonSubmitFormProps) => {
  return (
    <button
      {...rest}
      type={type}
      className="font-inter text-[22px] bg-accent hover:bg-secondary w-full p-2 rounded-sm cursor-pointer text-primary hover:text-accent duration-300 "
    >
      {childrem}
    </button>
  );
};
