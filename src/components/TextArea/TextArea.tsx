type TextAreaProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  name,
  onChange,
  placeholder,
  value,
  ...rest
}: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      value={value}
      onChange={onChange}
      className=" resize-none	h-[200px] p-2 mb-5 rounded-sm bg-transparent border-2 border-accent"
      name={name}
      placeholder={placeholder}
    />
  );
};
