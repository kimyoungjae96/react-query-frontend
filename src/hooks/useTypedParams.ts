import { useParams } from "react-router-dom";
import invariant from "tiny-invariant";

export const useTypedParams = <T extends string>(
  parameterNames: T[]
): Record<T, string> => {
  const params = useParams();
  const typedParams: Record<string, string> = {};
  parameterNames.forEach((paramName) => {
    const currentParam = params[paramName];
    invariant(
      currentParam,
      `${paramName} not found in useParams. Check the parent route to make sure nothing changed`
    );
    typedParams[paramName] = currentParam;
  });
  return typedParams;
};
