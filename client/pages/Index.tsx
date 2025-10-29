import Header from "@/components/Header";
import { Play, Heart, Zap, Users, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Что такое активация Кундалини?",
      answer: "Активация Кундалини — это процесс пробуждения дремлющей духовной энергии, которая находится в основании позвоночника. Эта практика способствует глубокой трансформации сознания и исцелению на всех уровнях."
    },
    {
      question: "Безопасна ли практика активации Куналини?",
      answer: "При правильном проведении под руководством опытного практика, активация Кундалини абсолютно безопасна. Мы создаём поддерживающую среду и внимательно следим за вашим состоянием на протяжении всего процесса."
    },
    {
      question: "Сколько длится сеанс активации Кундалини?",
      answer: "Стандартный сеанс длится около 60-90 минут. Это включает подготовку, саму практику активации и время для интеграции полученного опыта."
    },
    {
      question: "Нужна ли физическая подготовка для активации Кундалини?",
      answer: "Нет, специальной физической подготовки не требуется. Практика доступна людям любого возраста и уровня физической подготовки. Главное - открытость и готовность к трансформации."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-lavender-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Активация</span><br />
                <span className="text-gray-900">Кундалини</span><br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  <p>Пробудите Внутреннюю Силу</p>
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Откройте путь к глубокой трансформации через
                активацию энергии Кундалини. Обретите гармонию,
                исцеление и духовное пробуждение в безопасной и
                поддерживающей среде.
              </p>
              <button className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg">
                Записаться на Сеанс
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20"></div>
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-purple-500/30 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Посмотрите, как проходят сеансы
          </h2>
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Убедитесь в силе и безопасности Кундалини
          </p>
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Гармония и Баланс
              </h3>
              <p className="text-gray-600">
                Обретите внутренний мир и гармонию через сбалансированную работу с энергетическими центрами
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Энергетическое Пробуждение
              </h3>
              <p className="text-gray-600">
                Пробудите дремлющую энергию и откройте новые возможности для духовного и личностного роста
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Расширение Сознания
              </h3>
              <p className="text-gray-600">
                Достигните глубокого понимания себя и окружающего мира через расширение сознания
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Глубокое Исцеление
              </h3>
              <p className="text-gray-600">
                Освободитесь от блоков и травм прошлоо, обретите целостность и внутреннюю силу
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <p>Как Проходит Сессия Активации Кундалини</p>
            </h2>
            <p className="text-lg text-gray-600">
              Три этапа трансформационного путешествия
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Подготовка
              </h3>
              <p className="text-gray-600">
                Перед сеансом мы проводим беседу, создавая безопасное пространствоство для вашего опыта
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Активация
              </h3>
              <p className="text-gray-600">
                Во время сеанса энергия осторожно пробуждается, позволяя естественному исцелению
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Интеграция
              </h3>
              <p className="text-gray-600">
                После сеанса время для интеграции опыта и обсуждения вашего путешествия
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы Участников
            </h2>
            <p className="text-lg text-gray-600">
              Их опыт трансформации на этом пути, что уже прошёл этот путь
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Опыт активации был невероятным! Я почувствовал глубокое исцеление и освобождение от старых блоков. Это изменило мою жизнь к лучшему."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold">АВ</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Анна В.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Практика с мастером Кундалини была трансформирующей. Я ощутил прилив энергии и ясности, которых не испытывал раньше."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold">МК</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Михаил К.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                <p>
                  "Этот опыт открыл мне новые грани духовности и помог обрести гармонию. Я рекомендую каждому попробовать эту практику."
                </p>
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold">ЕС</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Елена С.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто Задаваемые Вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на самые важные вопросы о практике
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-purple-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    <p>{item.question}</p>
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-600 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
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
            Начните своё путешествие к внутренней трансформации и духовному пробуждению уже сегодня! Запишитесь на персональный сеанс активации Кундалини для глубокого опыта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors duration-200 shadow-lg">
              Записаться на сеанс Онлайн
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Задать вопрос
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                <p>Активация</p>
                <p>Кундалини</p>
              </h3>
              <p className="text-gray-400">
                Путь к духовному пробуждению через активацию Кундалини
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Практика</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О методе</li>
                <li>Сеансы</li>
                <li>Групповые практики</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Телеграм</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Активация Кундалини</h4>
              <p className="text-gray-400 text-sm">
                Путь к духовному пробуждению и внутреннему исцелению через древние практики активации энергии Кундалини
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              <p>© 2025 Активация Кундалини. Все права защищены.</p>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
