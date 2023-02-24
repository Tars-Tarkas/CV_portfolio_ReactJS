import React from "react";
import "./withListLoading.module..scss";
import { ICV } from "../types/data";

function WithListLoading(Component: any) {
  return function WihLoadingComponent({
    error,
    isLoading,
    ...props
  }: ICV): JSX.Element {
    return error ? (
      <p className="message__error">Файл не найден! </p>
    ) : isLoading ? (
      <p className="message__warn">Идет открытие файла...</p>
    ) : (
      <Component {...props} />
    );
  };
}

export { WithListLoading };
