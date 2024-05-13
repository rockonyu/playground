import type { FieldValues, Tool } from "../types";

export const createTool = <T extends FieldValues>(config: {
  type: string;
  defaultValues: T;
  render: (props: T) => string;
}): Tool<T> => {
  return config;
};
