"use client";
import { useGlobalContext } from "@/contexts/store";

import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import Sample from "@/components/Sample";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { modal, loading } = useGlobalContext();
  return (
    <>
      {/* <Modal></Modal> */}
      {/* <Loading></Loading> */}
      {/* <Sample></Sample> */}
      {modal && <Modal></Modal>}
      {loading && <Loading></Loading>}
      {children}
    </>
  );
}
