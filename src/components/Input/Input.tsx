type InputProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  type,
  name,
  onChange,
  placeholder,
  value,
  ...rest
}: InputProps) => {
  return (
    <input
      area-label="input"
      {...rest}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 mb-5 rounded-sm bg-transparent border-2 border-accent"
      type={type}
      placeholder={placeholder}
    />
  );
};
