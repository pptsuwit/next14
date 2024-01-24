"use client";
import { useGlobalContext } from "@/contexts/store";

// import Modal from "@/components/baseComponent/Modal";
// import PageProvider from "@/components/helpers/PageProvider";
// import { ThemeProvider } from "next-themes";

// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { createTheme } from "@mui/material/styles";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { modal, setModal, modalMessage } = useGlobalContext();
  return (
    <>
      <div>Modal</div>
      {/* <PageProvider> */}
      {/* <Modal open={modal} handleClose={() => setModal(false)} body={modalMessage}></Modal> */}
      {children}
      {/* </PageProvider> */}
    </>
  );
  // return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
