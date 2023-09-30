import s from "./styles.module.css";

const Header = () => {
  console.log("asdasdasdasd");
  return (
    <div className={s.wrapper}>
      <div>Logo</div>
      <nav className={s.nav}>
        <a href="https://google.com">Google</a>
        <a href="https://vk.com">VK</a>
      </nav>
    </div>
  );
};

export default Header;
