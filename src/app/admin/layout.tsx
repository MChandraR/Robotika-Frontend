"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loaders";

export default function AdminLayout({
    children, 
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
  
    // const pathname = usePathname();
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);

    return(
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
    );
}