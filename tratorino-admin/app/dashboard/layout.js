import Menu from "../component/menu";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="duration-300 no-underline ease-in">   
        {children}
        <Menu />
      </section>
    )
  }