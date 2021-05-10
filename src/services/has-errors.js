export function hasErrors(errors) {
  return !Object.values(errors).every(
    (value) => value === undefined || value === null
  );
}
