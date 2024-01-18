// import { stringify } from "querystring";
// 위의 오류는 Webpack이 Node.js 코어 모듈인 'querystring'을 찾지 못해 발생하는 것으로 보입니다. 이는 Webpack 5 이후로 Node.js 코어 모듈에 대한 폴리필이 기본적으로 포함되지 않기 때문입니다. 이 문제를 해결하려면 다음과 같은 절차를 따르시면 됩니다
import React, { createContext, useState, useEffect } from "react";

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  addToDo: (): void => {},
  deleteToDo: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListProvider = ({ children }: Props): JSX.Element => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      const stringify = JSON.stringify;
      localStorage.setItem("ToDoList", stringify(newList));
      setToDoList(newList);
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
    setToDoList(list);
  };

  useEffect(() => {
    const list = localStorage.getItem("ToDoList");
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        addToDo,
        deleteToDo,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListProvider };
