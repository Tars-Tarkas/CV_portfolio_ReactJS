import * as React from "react";
import "./withListLoading.module.scss";

// type data = {
//   error: boolean;
//   isLoading: boolean;
//   data: [] | undefined;
// };

function withListLoading(Component: any) {
  return function WihLoadingComponent({ error, isLoading, ...props }: any) {
    if (error) {
      return (
        <div>
          <p className="message__error">Файл не найден! </p>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <p className="message__warn">Идет открытие файла...</p>
        </div>
      );
    }
    if (!error || !isLoading) return <Component {...props} />;
    return null;
  };
}

export default withListLoading;
