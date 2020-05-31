export const formData = (form: HTMLFormElement | null) => {
  if (!form) {
    const error = "Error! No for provided to formData";
    console.error(error);
    return { error };
  }
  let values: { [prop: string]: string } = {};
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => (values[input.id] = input.value));
  return values;
};
