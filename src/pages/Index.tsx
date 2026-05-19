export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПИРОГ*ЗЕБРА</div>
        <nav>
          <a href="#">Рецепт</a>
          <a href="#">Ингредиенты</a>
          <a href="#">Галерея</a>
          <a href="#">О проекте</a>
        </nav>
        <button className="btn-cta">Читать рецепт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПИРОГ
              <br />
              <span>ЗЕБРА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Классический советский пирог с чёрно-белыми полосками. Простой рецепт, который знала каждая бабушка — и теперь знаешь ты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть рецепт
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Ингредиенты
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ПРОСТО
              <br />
              ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВЫПЕЧКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              КЛАССИКА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЧЁРНЫЕ И БЕЛЫЕ ПОЛОСКИ * СМЕТАННОЕ ТЕСТО * БЕЗ СЛОЖНЫХ ИНГРЕДИЕНТОВ * СОВЕТСКАЯ КЛАССИКА * ГОТОВИТСЯ ЗА ЧАС *
            ЧЁРНЫЕ И БЕЛЫЕ ПОЛОСКИ * СМЕТАННОЕ ТЕСТО * БЕЗ СЛОЖНЫХ ИНГРЕДИЕНТОВ * СОВЕТСКАЯ КЛАССИКА * ГОТОВИТСЯ ЗА ЧАС
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КАК ГОТОВИТЬ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Полный рецепт
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Шаг 1</span>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Замешиваем тесто"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Замешиваем тесто</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Взбить 3 яйца со стаканом сахара. Добавить 200 г сметаны, 100 г масла, щепотку соды и 2 стакана муки. Разделить тесто на две части.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Шаг 2
              </span>
              <img
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Добавляем какао"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Делаем полоски</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  В одну часть теста добавить 2 ст. ложки какао. Чередовать ложки светлого и тёмного теста в центр формы — полоски сами расплывутся.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Шаг 3
              </span>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Выпекаем пирог"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Выпекаем</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Выпекать при 180°C около 40–45 минут. Проверить готовность зубочисткой — она должна выходить сухой. Остудить перед подачей.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ИСТОРИЯ РЕЦЕПТА.</h2>
            <p className="vibe-text">
              Пирог «Зебра» появился в советских кулинарных книгах в 1970-х. Его секрет — в способе выкладки теста: ложка за ложкой в центр формы, и узор получается сам собой. Никакой магии — только физика и какао.
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
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пирог Зебра 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пирог Зебра 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Выпечка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Готовый пирог"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПИРОГ*ЗЕБРА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Информационный проект о классическом советском пироге «Зебра» — история, рецепт и советы по приготовлению.
          </p>
        </div>
        <div className="footer-links">
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Рецепт</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Ингредиенты</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Галерея</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>О проекте</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>О проекте</h4>
          <ul>
            <li>Учебный сайт</li>
            <li>Советская классика</li>
            <li>Домашняя выпечка</li>
            <li>Сделано с любовью</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 ПИРОГ ЗЕБРА</span>
          <span>ВКУС ДЕТСТВА</span>
          <span>Учебный проект</span>
        </div>
      </footer>
    </>
  );
}
