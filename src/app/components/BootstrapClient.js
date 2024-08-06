"use client"

import { useEffect } from "react";

const BootstrapClient = () => {
 return (
  useEffect(() => {
   import("bootstrap/dist/js/bootstrap");
  }, [])
 )
}
export default BootstrapClient