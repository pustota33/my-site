import { useState, useEffect } from "react";
import { Users, User, ArrowUp, Heart, Zap, Brain, Star } from "lucide-react";

export default function IndexSimple() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleContactClick = () => {
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Contact Popup Component
  const ContactPopup = () => {
    if (!showContactPopup) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={closeContactPopup}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeContactPopup}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>

          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Связаться со мной</h3>
            <p className="text-gray-600">Выберите удобный способ связи для записи на сеанс активации Кундалини</p>
          </div>

          {/* Contact options */}
          <div className="p-6 space-y-4">
            {/* Email */}
            <a
              href="mailto:denisoness@gmail.com"
              className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Email</h4>
                <p className="text-gray-600 text-sm">denisoness@gmail.com</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/denisoneness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Telegram</h4>
                <p className="text-gray-600 text-sm">@denisoneness</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=79806504389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600">WhatsApp</h4>
                <p className="text-gray-600 text-sm">+79806504389</p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-purple-50 rounded-b-2xl">
            <p className="text-sm text-gray-600 text-center">
              Обычно отвечаю в течение нескольких часов
            </p>
          </div>
        </div>
      </div>
    );
  };

  const faqItems = [
    {
      question: "Это эзотерика?",
      answer: "Нет. Активация Кундалини — это практика передачи жизненной энергии, которая мягко активирует естественные процессы тела и сознания, помогая снять блоки, пробудить внутренние ресурсы и усилить осознанность. Это не ритуалы и не магия — это работа с энергией, которая уже присутствует в каждом человеке."
    },
    {
      question: "А если я ничего не почувствую?",
      answer: "Это не обязательно про «почувствовать». Активация Кундалини — это процесс, который разворачивается внутри естественно и постепенно. Даже если телесных ощущений не будет, энергия всё равно начнёт работать, мягко активируя ваши внутренние ресурсы и помогая интегрировать новые состояния сознания. Эффект часто проявляется накопительно — через несколько часов, дней или после повторных сессий."
    },
    {
      question: "Мне кажется, у меня ничего не получится",
      answer: "Активация Кундалини — это не про усилия или контроль, а про мягкое пробуждение энергии, которая уже есть в вас. Вы просто приходите в безопасное пространство, позволяете процессу идти своим естественным ходом, а энергия сама делает своё дело. Каждый опыт уникален — нет правильного или неправильного результата."
    },
    {
      question: "Это точно безопасно?",
      answer: "Да, при соблюдении рекомендаций и сопровождении опытного проводника процесс безопасен. Активация Кундалини не предполагает насилия над телом или психикой и ведётся мягко и постепенно. Возможны эмоциональные высвобождения или спонтанные движения — это естественная реакция организма. При острых психических состояниях или серьёзных медицинских противопоказаниях важно обсудить с проводником перед сессией."
    },
    {
      question: "Онлайн работает так же, как офлайн?",
      answer: "Да, энергия передаётся и в онлайн-формате. Многие участники отмечают, что дистанционные сессии ощущаются так же глубоко, как и очные. Разница может быть лишь в том, что для новичков процесс иногда включается быстрее на живых встречах. В любом случае энергия сама находит путь независимо от расстояния."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-white border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="https://www.активация-кундалини.рф" className="text-2xl font-bold text-purple-600 inline-flex cursor-pointer">
              Активация Кундалини
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Открыть меню" className="md:hidden text-gray-700 hover:text-purple-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about-practice" className="text-gray-700 hover:text-purple-600 transition-colors">О практике</a>
              <a href="#about-me" className="text-gray-700 hover:text-purple-600 transition-colors">Обо мне</a>
              <a href="#format-pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Формат и стоимость</a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
              <button onClick={handleContactClick} className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</button>
              <button
                onClick={handleContactClick}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium"
              >
                Записаться на сеанс
              </button>
            </nav>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-purple-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            <a href="#about-practice" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-purple-600">О практике</a>
            <a href="#about-me" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-purple-600">Обо мне</a>
            <a href="#format-pricing" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-purple-600">Формат и стоимость</a>
            <a href="#reviews" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-purple-600">Отзывы</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-purple-600">FAQ</a>
            <button onClick={() => { setMobileOpen(false); handleContactClick(); }} className="block w-full text-left text-gray-700 hover:text-purple-600">Контакты</button>
            <button onClick={() => { setMobileOpen(false); handleContactClick(); }} className="w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium">Записаться на сеанс</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="font-extrabold" style={{ color: 'rgba(0,0,0,0.73)', textShadow: '0 1px 0 rgba(0,0,0,0.15)' }}>Активация</span><br />
              <span className="font-extrabold" style={{ color: 'rgba(0,0,0,0.73)', textShadow: '0 1px 0 rgba(0,0,0,0.15)' }}>Кундалини</span><br />
              <span className="text-purple-500 font-bold">
                <div className="mx-auto" style={{ maxWidth: '942px' }}>
                  <p>Откройте путь к глубокой трансформации через мягкое раскрытие энергии Кундалини.</p>
                  <p>Без усилий.</p>
                </div>
              </span>
            </h1>
            <div className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              <div>
                <p>Обретите гармонию, исцеление и духовное пробуждение в безопасной и поддерживающей среде.</p>
              </div>
            </div>
            <button
              onClick={handleContactClick}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Записаться на активацию
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full max-w-md mx-auto hidden md:block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdf98df48c24348269be81fbaf09cc1e5%2Fac76ccb576e4405a92b6f6943f9c3e6d?format=webp&width=800"
                  alt="Денис - фасилитатор активации Кундалини"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Обо мне
              </h2>
              <div className="w-full max-w-md mx-auto mb-6 block md:hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdf98df48c24348269be81fbaf09cc1e5%2Fac76ccb576e4405a92b6f6943f9c3e6d?format=webp&width=800"
                  alt="Денис - фасилитатор активации Кундалини"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="text-lg text-gray-600 mb-6 leading-relaxed">
                <div>
                  <p>
                    Меня зовут Денис, я проводник энергии Кундалини. Моя
                    задача — создать для вас безопасное пространство, где
                    энергия может проявиться естественно и без усилий. Я
                    внимательно сопровождаю процесс и поддерживаю
                    интеграцию после сессии.
                  </p>
                  <p>
                    В этой практике на первом месте всегда стоит энергия и тот, кто её принимает. Моё предназначение — быть проводником и держать пространство, в котором она раскрывается для каждого по-своему.
                  </p>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg mb-6"
              >
                Получить консультацию
              </button>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-700 text-base leading-relaxed">
                  <strong>Примечание:</strong>
                  <p>
                    метод опирается на прямую передачу/трансляцию жизненной
                    силы и не требует от вас что-либо делать во время
                    сессии.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Practice Section */}
      <section id="about-practice" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              О практике
            </h2>
          </div>

          {/* What is Kundalini */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Что такое Кундалини?
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Кундалини — это спящая энергия внутри каждого человека. Активация помогает раскрыть её мягко и безопасно, чтобы восстановить жизненные силы, улучшить эмоциональное состояние и выйти на новый уровень осознанности.
              </p>
            </div>
          </div>

          {/* What is Kundalini Activation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Что такое активация Кундалини?
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <div>
                <p>
                  Активация Кундалини — это прямая передача жизненной
                  энергии, которая запускает процесс пробуждения. Во время
                  сессии у части людей самопроизвольно возникают движения
                  тела, эмоциональные высвобождения, состояния
                  расширения персонального сознания или глубокие инсайты — это
                  возможные эффекты, а не цель.
                </p>
              </div>
              <p>
                <strong>Главная особенность подхода:</strong>
                <div>
                  <p>
                    Энергия входит через макушку и движется к нижней чакре, а
                    затем может течь в обоих направлениях), что описывают
                    как естественный и постепенный процесс пробуждения.
                  </p>
                </div>
              </p>
            </div>
          </div>

          {/* How session works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Как проходит сессия
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <div>
                <p>
                  Вы лежите или сидите на коврике с закрытыми глазами,
                  звучит музыка.
                </p>
              </div>
              <div>Я работаю руками в области энергетических/меридианных точек (иногда лёгкое касание).</div>
              <div>
                <p>
                  С внешней стороны это всё. Внутренний процесс у каждого
                  индивидуален.
                </p>
              </div>
            </div>
          </div>

          {/* What practice gives (Results) */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Что даёт практика (Результаты)
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <ul className="space-y-3">
                <li>• Снятие блоков и напряжения</li>
                <li>• Пробуждение энергии и творческого потока</li>
                <li>• Освобождение от стресса и зажимов</li>
                <li>• Глубокие инсайты и чувство единства</li>
                <li>• Улучшение эмоционального состояния</li>
              </ul>
            </div>
          </div>

          {/* Formats */}
          <div id="format-pricing" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Форматы
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Индивидуально / Групповые</h4>
                <div className="text-gray-600">
                  <p>
                    Онлайн / офлайн — дистанционные сессии по ощущениям
                    близки к очным для многих участников (у новичков
                    активация иногда идёт быстрее очно).
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Длительность</h4>
                <p className="text-gray-600">90-120 минут (включая короткую интеграцию после).</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Стоимость</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Групповая онлайн сессия</h4>
                  <p className="text-gray-600">5000 рублей</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Индивидуальная онлайн сессия</h4>
                  <p className="text-gray-600">10000 рублей</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Групповая офлайн сессия</h4>
                  <p className="text-gray-600">10000 рублей</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Индивидуальная офлайн сессия</h4>
                  <p className="text-gray-600">25000 рублей</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Записаться
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Уточнить ближайшие даты
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              <p>Посмотрите, как проходят сеансы</p>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full aspect-video"
                  src="https://rutube.ru/play/embed/365c972c172b29c80b622b2cc657ced1"
                  title="Видео — как проходят сеансы"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600">
                <p>Процесс Активации Кундалини Энергии</p>
              </p>
            </div>
          </div>

          <div id="reviews" className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Отзывы участников</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Анна, 32 года</h4>
                <p className="text-gray-600">«На первой сессии я чувствовала только лёгкое тепло, но потом вдруг пришло ощущение огромного спокойствия и ясности. На следующей — тело само двигалось в такт музыке. Это был невероятный опыт доверия энергии.»</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Сергей, 41 год</h4>
                <p className="text-gray-600">«Я скептически относился к таким практикам, но решил попробовать. В какой-то момент я словно вышел за пределы мыслей и почувствовал лёгкость, как будто бросил груз. Впервые за долгое время спал глубоко и спокойно.»</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Мария, 27 лет</h4>
                <p className="text-gray-600">«Во время активации я плакала без остановки, и это было освобождающе. Будто внутри что-то мягко раскрылось. После я стала спокойнее реагировать на стрессовые ситуации.»</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Елена, 35 лет</h4>
                <p className="text-gray-600">«Я давно практикую медитацию, но такого опыта у меня не было. Энергия текла сама, без моих усилий. Сессия дала очень глубокие инсайты о том, куда мне двигаться дальше в жизни.»</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Дмитрий, 29 лет</h4>
                <p className="text-gray-600">«Сначала я сомневался, получится ли у меня что-то почувствовать. Но через какое-то время тело само начало делать крийи. Было ощущение, что меня кто-то мягко ведёт. Очень сильный опыт.»</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества Активации
            </h2>
            <p className="text-lg text-gray-600">
              Откройте уникальную возможность трансформации и роста через
              пробуждение энергии Кундалини
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <Heart className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <div>
                  <p>Гармония и Баланс</p>
                </div>
              </h3>
              <p className="text-gray-600">
                <div>
                  <p>
                    Обретите внутренний мир и гармонию через
                    сбалансированную работу с энергетическими центрами
                  </p>
                </div>
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <p>Энергетическое Пробуждение</p>
              </h3>
              <div className="text-gray-600">
                <p>
                  Пробудите дремлющую энергию и откройте новые возможности
                  для духовного и личностного роста
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <Brain className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Расширение Сознания
              </h3>
              <div className="text-gray-600">
                <p>
                  Достигните глубокого понимания себя и окружающего мира
                  через расширение сознания
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Глубокое Исцеление
              </h3>
              <div className="text-gray-600">
                <div>
                  <p>
                    Освободитесь от блоков и травм прошлого, обретите
                    целостность и внутреннюю силу
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <div>
                <p>Часто Задаваемые Вопросы</p>
              </div>
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на самые важные вопросы о практике
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-purple-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    <div>
                      <p>{item.question}</p>
                    </div>
                  </span>
                  <span className={`text-purple-600 transform transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы к активации Кундалини?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            <div>
              <p>
                Начните своё путешествие к внутренней трансформации и
                духовному пробуждению уже сегодня! Запишитесь на
                персональный сеанс активации Кундалини для глубокого опыта.
              </p>
            </div>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg"
            >
              Записаться на сеанс Онлайн
            </button>
            <button
              onClick={handleContactClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Задать вопрос
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Активация Кундалини
              </h3>
              <p className="text-gray-400">
                Путь к абсолютному пробуждению через активацию Кундалини
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Меню</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Активация Кундалини</a></li>
                <li><a href="#about-me" className="hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#format-pricing" className="hover:text-white transition-colors">Формат и стоимость</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://t.me/denisoneness" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=79806504389" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                </li>
                <li>
                  <a href="http://www.youtube.com/@DenisOneness" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                </li>
                <li>
                  <a href="https://rutube.ru/channel/67994369/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rutube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Акивация Кундалини. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactPopup />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Прокрутить вверх"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
