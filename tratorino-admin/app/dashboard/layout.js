import Menu from "../component/menu";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>   
        {children}
        <Menu />
      </section>
    )
  }