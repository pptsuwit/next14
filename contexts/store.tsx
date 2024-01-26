"use client";
import { getModalMessage } from "@/utils/helpers";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  firstName: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalMessage: IModalMessage;
  setModalMessage: Dispatch<SetStateAction<IModalMessage>>;

  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;

  drawer: boolean;
  setDrawer: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): DataType[] => [],
  modal: false,
  setModal: (): boolean => false,
  modalMessage: { title: "", message: "", status: "" },
  setModalMessage: (): IModalMessage => ({
    title: "",
    message: "",
    status: "",
  }),
  loading: false,
  setLoading: (): boolean => false,
  drawer: false,
  setDrawer: (): boolean => false,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<DataType[] | []>([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(getModalMessage());
  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        data,
        setData,
        modal,
        setModal,
        modalMessage,
        setModalMessage,
        loading,
        setLoading,
        drawer,
        setDrawer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
