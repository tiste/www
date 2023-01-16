export function hasErrors(errors: Record<string, string | null>) {
  return !Object.values(errors).every(
    (value) => value === undefined || value === null
  );
}
