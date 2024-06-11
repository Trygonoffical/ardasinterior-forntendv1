import AdminNav from "@/components/Navbar/AdminNav";


export default function AdminLayout({ children }) {
    return (
      <>
      <div>
            <AdminNav />
            {children}
      </div>
      </>
    );
  }

