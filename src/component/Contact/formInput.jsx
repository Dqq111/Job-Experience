export default function FormInput({
  label,
  textBox,
  type,
  name,
  placeholder,
  ...props
}) {
  let content = (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      {...props}
    />
  );

  if (textBox) {
    content = (
      <textarea
        name={name}
        placeholder={placeholder}
        rows="6"
        required
        {...props}
      ></textarea>
    );
  }
  return (
    <>
      <label>{label}</label>
      {content}
    </>
  );
}
