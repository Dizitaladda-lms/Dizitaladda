export const metadata = { title: "Admin Area | Dizital Adda" };

export default function AdminLayout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/panel/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/panel/css/adminstyle.css" />
      {children}
    </>
  );
}
