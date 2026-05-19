export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">RETRO*DINER</div>
        <nav>
          <a href="#">Рецепты</a>
          <a href="#">История</a>
          <a href="#">Галерея</a>
          <a href="#">О проекте</a>
        </nav>
        <button className="btn-cta">Все рецепты</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              РЕЦЕПТЫ
              <br />ИЗ <span>70-х</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Собрали лучшие рецепты классических американских дайнеров. Готовь дома — точь-в-точь как в старом кино.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть рецепты
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                История дайнеров
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              КУЛЬТУРА
              <br />
              КУХНИ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #РЕТРОВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КЛАССИЧЕСКИЕ БУРГЕРЫ * МОЛОЧНЫЕ КОКТЕЙЛИ * РЕТРО РЕЦЕПТЫ * АМЕРИКАНСКАЯ КУХНЯ * ИСТОРИЯ ДАЙНЕРОВ *
            КЛАССИЧЕСКИЕ БУРГЕРЫ * МОЛОЧНЫЕ КОКТЕЙЛИ * РЕТРО РЕЦЕПТЫ * АМЕРИКАНСКАЯ КУХНЯ * ИСТОРИЯ ДАЙНЕРОВ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">РЕЦЕПТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все рецепты
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Основное</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Классический Smash Burger</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Говяжий фарш 80/20, прижать на раскалённой сковороде, чеддер, маринованные огурцы, фирменный соус на бриоши. Готовится за 10 минут.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Закуска
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца по-американски"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Americana Pizza</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тонкое тесто на закваске, томатный соус, пепперони, jalapeño и двойной слой моцареллы. Рецепт из Чикаго 1972 года.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Напиток
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Молочный коктейль"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Vanilla Milkshake</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Ванильное мороженое, цельное молоко, щепотка соли и взбитые сливки. Классика, которую невозможно испортить.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЧТО ТАКОЕ ДАЙНЕР?</h2>
            <p className="vibe-text">
              Американский дайнер — это не просто кафе. Это культура. В 1950–70-х они стали символом свободы, молодёжи и рок-н-ролла. Хромированные стойки, красные диваны, джукбоксы — и еда, которая кормила целые поколения.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Читать историю
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ГАЛЕРЕЯ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">RETRO*DINER</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Информационный проект о культуре американских дайнеров и классических рецептах эпохи 70-х.
          </p>
        </div>
        <div className="footer-links">
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Рецепты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                История
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>О проекте</h4>
          <ul>
            <li>Учебный сайт</li>
            <li>Культура дайнеров</li>
            <li>Рецепты 1950–1970-х</li>
            <li>Сделано с любовью</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 RETRO DINER</span>
          <span>ВКУС КЛАССИКИ</span>
          <span>Учебный проект</span>
        </div>
      </footer>
    </>
  );
}