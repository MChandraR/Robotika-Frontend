"use client"
export default function AdminLayout({
    children, 
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {children}
        </div>
    );
}